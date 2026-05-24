'use client';

import { Button } from "@/components/ui/button";
import { Trash, GripVertical } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// interface WorkExp {
//   year: string;
//   role: string;
//   company: string;
// }

interface WorkExpData {
  id: string;
  year: string;
  role: string;
  company: string;
}

const Page = () => {
  const [workData, setWorkData] = useState<WorkExpData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dragItem = useRef<number | null>(null);
  const [formData, setFormData] = useState<WorkExpData>({
    id: "",
    year: "",
    role: "",
    company: "",
  });

  const fetchWorkData = async () => {
    try {
      const res = await fetch("/api/Experience");
      const data = await res.json();
      const formattedData = data.map((item: any) => ({
        id: item._id,
        year: item.year,
        role: item.role,
        company: item.company,
      }));
      setWorkData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWorkData();
  }, []);

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
    const items = Array.from(workData);
    const [moved] = items.splice(from, 1);
    items.splice(to, 0, moved);
    setWorkData(items);
    dragItem.current = null;
  }

  const saveOrder = async () => {
    try {
      await fetch('/api/Experience', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: workData.map(w => w.id) }),
      });
      console.log('Order saved');
    } catch (e) { console.log(e) }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("Submitted data:", formData);

    // Optional: Post data to your API endpoint here
    await fetch('/api/Experience', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // important!
      },
      body: JSON.stringify({
        year: formData.year,
        role: formData.role,
        company: formData.company,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Data posted successfully:", data);
        fetchWorkData(); // Refresh list after successful post
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });

    // Reset
    setFormData({ id: "", year: "", role: "", company: "" });
    setIsDialogOpen(false);
  };

  const handleDelete = async (id: string) => {
    try {
      fetch('/api/Experience', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
        .then(res => res.json())
        .then(data => {
          console.log("Data deleted successfully:", data);
          fetchWorkData();
        })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="px-3 py-1">Add Experience</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {workData.map((item, index) => (
          <div key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GripVertical className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                  <div className="font-semibold">{item.company}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-blue-600 font-medium">{item.year}</div>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                  <Trash />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-4 flex items-center justify-end gap-3'>
        <Button onClick={saveOrder} className='px-3 py-1'>Save Order</Button>
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Work Experience</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default Page;
