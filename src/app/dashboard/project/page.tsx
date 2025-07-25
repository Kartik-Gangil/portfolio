'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { RotateCcw, TrashIcon } from 'lucide-react'
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
      <div className='border border-gray-200 rounded-lg shadow-sm p-6 bg-white '>
        <div className='flex flex-col md:flex-row justify-between mb-4'>
          <Image height="100" width="100" src={image} className='object-cover w-50 border border-black' alt='logo'></Image>
          <div className='flex flex-col'>
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>
            <p className='text-gray-600 mb-4'>{description}</p>
            <div className='flex space-x-2'>{
              techStack.map((tech, index) => (
                <span key={index} className='text-sm text-gray-500'>{tech}</span>
              ))}
            </div>
            <label htmlFor="github">Github Link</label>
            <input aria-label='github' type="text" value={githubLink} onChange={(e) => console.log(e.target.value)} />
            <label htmlFor="live">Live Link</label>
            <input aria-label='live' type="text" value={liveLink} onChange={(e) => console.log(e.target.value)} />
          </div>
          <div className="flex gap-5 items-center ">
            <Button ><RotateCcw /></Button>
            <Button onClick={handledelete} ><TrashIcon /></Button>
          </div>
        </div>
      </div>
    </>
  )
}



const Page = () => {
  const [projects, setProjects] = useState<Project[]>([]);
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
          const formattedProjects = data.map((project:any) => ({
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
      <h1 className='text-3xl font-bold text-center mb-3'>Projects</h1>
      {projects.map((project, index) => (
        <Card
          key={index}
          id={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          techStack={project.techStack}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
      <Button onClick={() => setIsDialogOpen(true)} className='mt-3 relative float-right'>Add Project</Button>
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
