'use client';

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

interface WorkExp {
  year: string;
  role: string;
  company: string;
}

interface WorkExpData {
  id: string;
  year: string;
  role: string;
  company: string;
}

const Page = () => {
  const [workData, setWorkData] = useState<WorkExpData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
    <div className="bg-gray-50 p-6 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
        >
          Add Experience
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {workData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between py-4 text-sm text-gray-800"
          >
            <span className="text-black font-bold">{item.company}</span>
            <span className="ml-4">{item.role}</span>
            <span className="text-blue-600 font-medium">{item.year}</span>
            <Button onClick={() => handleDelete(item.id)}><Trash /></Button>
          </div>
        ))}
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
