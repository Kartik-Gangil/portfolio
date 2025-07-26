'use client';

import { Button } from "@/components/ui/button";
import { Code, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

interface SkillData {
  id: string;
  icon: string;
  domain: string;
  skills: string[];
}

const Page = () => {
  const [skillData, setSkillData] = useState<SkillData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<SkillData>({
    id: "",
    icon: "",
    domain: "",
    skills: []
  });

  const fetchSkillData = async () => {
    try {
      const res = await fetch("/api/skills");
      const data = await res.json();
      const formattedData = data.map((item: any) => ({
        id: item._id,
        icon: item.icon,
        domain: item.domain,
        skills: item.skills,
      }));
      setSkillData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkillData();
  }, []);

  const capitalizeString = (str: string) => {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'skills') {
      // Split the comma-separated string into an array and capitalize each skill
      setFormData({
        ...formData,
        skills: e.target.value.split(',').map(skill => capitalizeString(skill.trim()))
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: capitalizeString(e.target.value),
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          icon: formData.icon,
          domain: formData.domain,
          skills: formData.skills,
        }),
      });
      const data = await response.json();
      console.log("Data posted successfully:", data);
      fetchSkillData(); // Refresh list after successful post

      // Reset form
      setFormData({ id: "", icon: "", domain: "", skills: [] });
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/skills', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      console.log("Data deleted successfully:", data);
      fetchSkillData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Skills Management</h2>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
        >
          Add Skill
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {skillData.map((item, index) => (
          <div
            key={index}
            className="flex justify-evenly items-center py-4 text-sm gap-3 text-gray-800"
          >
            <span className="inline-flex items-center justify-center w-15 h-15 text-blue-600 bg-blue-100 rounded-full text-xl font-bold group-hover:shadow-xl p-3 transition-all duration-300 transform group-hover:scale-105">
              <Code className="h-6 w-6"/>
            </span>
            <span className="text-black font-bold">{item.domain}</span>
            <span className="ml-4 flex-1 px-4">{item.skills.join(", ")}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(item.id)}
              className="ml-2"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Skill Domain</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Icon</label>
                <input
                  type="text"
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  placeholder="e.g., code"
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Domain</label>
                <input
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="e.g., Frontend Development"
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Skills (comma-separated)</label>
                <textarea
                  name="skills"
                  value={formData.skills.join(", ")}
                  onChange={handleChange}
                  placeholder="e.g., React, Next.js, TypeScript"
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
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
