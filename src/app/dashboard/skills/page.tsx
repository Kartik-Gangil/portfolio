'use client';

import { Button } from "@/components/ui/button";
import { Code, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

interface SkillData {
  id: string;
  icon: string;
  domain: string;
  skills: string[];
  size?: string;
}

const Page = () => {
  const [skillData, setSkillData] = useState<SkillData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<SkillData>({
    id: "",
    icon: "",
    domain: "",
    skills: [],
    size: 'small'
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
        size: item.size || 'small',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    if (name === 'skills') {
      // Split the comma-separated string into an array and capitalize each skill
      setFormData({
        ...formData,
        skills: value.split(',').map(skill => capitalizeString(skill.trim()))
      });
    } else if (name === 'size') {
      // sizes should be stored as lowercase values
      setFormData({
        ...formData,
        size: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: capitalizeString(value),
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        icon: formData.icon,
        domain: formData.domain,
        skills: formData.skills,
        size: formData.size || 'small',
      } as any;

      // If editing existing item, call PUT with id
      if (formData.id) {
        payload.id = formData.id;
        const response = await fetch('/api/skills', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log('Updated skill:', data);
      } else {
        const response = await fetch('/api/skills', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log('Created skill:', data);
      }

      await fetchSkillData(); // refresh list
      setFormData({ id: "", icon: "", domain: "", skills: [], size: 'small' });
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error saving skill:', error);
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

  const handleEdit = (item: SkillData) => {
    setFormData({ id: item.id, icon: item.icon, domain: item.domain, skills: item.skills, size: item.size || 'small' });
    setIsDialogOpen(true);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Skills Management</h2>
        <Button onClick={() => setIsDialogOpen(true)} className="px-3 py-1">Add Skill</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-4">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-blue-50 rounded-full">
              <Code className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{item.domain}</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{item.skills.join(', ')}</p>
            </div>
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

              <div>
                <label className="block text-sm font-medium">Size</label>
                <select
                  name="size"
                  value={formData.size || 'small'}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
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
