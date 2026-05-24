'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { RotateCcw, TrashIcon, GripVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: string;
  title: string;
  image: string | "";
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

interface ProjectData {
  title: string;
  image: string | "";
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}


const Card = ({ title, image, id, description, techStack, githubLink, liveLink }: Project) => {
  const handledelete = async () => {
    try {
      fetch('/api/Project', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
        .then(res => {
          if (res.ok) {
            console.log("Project deleted successfully");
            window.location.reload(); // Reload the page to reflect changes
          } else {
            console.error("Failed to delete project");
          }
        })
        .catch(error => console.error("Error deleting project:", error));
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='border border-gray-200 rounded-lg shadow-sm p-4 bg-white flex items-start gap-4 cursor-grab'>
        <div className='flex-shrink-0 mt-2'><GripVertical className='h-5 w-5 text-gray-400' /></div>
        <div className='flex-1'>
          <div className='flex flex-col md:flex-row md:items-start justify-between mb-2'>
            <div className='flex items-start gap-4'>
              <Image height={80} width={120} src={image} className='object-cover w-28 h-20 border rounded' alt='logo' />
              <div>
                <h2 className='text-xl font-semibold mb-1'>{title}</h2>
                <p className='text-gray-600 mb-2'>{description}</p>
                <div className='flex flex-wrap gap-2'>{
                  techStack.map((tech, index) => (
                    <span key={index} className='text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded'>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center mt-3 md:mt-0">
              <Button ><RotateCcw /></Button>
              <Button onClick={handledelete} ><TrashIcon /></Button>
            </div>
          </div>
          <div className='mt-2'>
            <label htmlFor="github" className='text-sm text-gray-600'>Github Link</label>
            <input aria-label='github' type="text" value={githubLink} onChange={(e) => console.log(e.target.value)} className='w-full mt-1 border border-gray-200 rounded p-1' />
            <label htmlFor="live" className='text-sm text-gray-600 mt-2 block'>Live Link</label>
            <input aria-label='live' type="text" value={liveLink} onChange={(e) => console.log(e.target.value)} className='w-full mt-1 border border-gray-200 rounded p-1' />
          </div>
        </div>
      </div>
    </>
  )
}



const Page = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const dragItem = useRef<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<ProjectData>({
    title: "",
    image: "",
    description: "",
    techStack: [],
    githubLink: "",
    liveLink: ""
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const fetchedProjects = async () => {
    try {
      fetch('/api/Project')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          const formattedProjects = data.map((project: any) => ({
            id: project._id,
            title: project.title,
            description: project.description,
            techStack: project.techStack,
            image: project.image,
            githubLink: project.githubLink,
            liveLink: project.liveLink || '',
          }))
          setProjects(formattedProjects);
          console.log(formattedProjects)
        });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { fetchedProjects() }, [])

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dragItem.current = index;
    e.dataTransfer.effectAllowed = 'move';
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const from = dragItem.current;
    const to = index;
    if (from === null || from === undefined) return;
    if (from === to) return;
    const items = Array.from(projects);
    const [moved] = items.splice(from, 1);
    items.splice(to, 0, moved);
    setProjects(items);
    dragItem.current = null;
  }

  const saveOrder = async () => {
    try {
      await fetch('/api/Project', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: projects.map(p => p.id) }),
      });
      console.log('Order saved');
    } catch (e) { console.log(e) }
  }

  const handleSubmit = async () => {
    try {
      console.log("Submitted data:", formData);

      // Post data to your API endpoint here
      await fetch('/api/Project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // important!
        },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(data => {
          console.log("Response from server:", data);
          setIsDialogOpen(false);
          fetchedProjects(); // Refresh the project list after submission
        });
    } catch (e) { console.log(e) }
  }

  return (
    <div className='p-5'>
      <h1 className='text-3xl font-bold text-center mb-6'>Projects</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <Card
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          </div>
        ))}
      </div>

      <div className='mt-4 flex items-center justify-end gap-3'>
        <Button onClick={saveOrder} className='px-3 py-1'>Save Order</Button>
        <Button onClick={() => setIsDialogOpen(true)}>Add Project</Button>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Project</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack.join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      techStack: e.target.value.split(",").map((tech) => tech.trim()),
                    })
                  }
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">GitHub Link</label>
                <input
                  type="text"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Live Link</label>
                <input
                  type="text"
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Page
