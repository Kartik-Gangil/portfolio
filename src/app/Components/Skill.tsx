'use client'
import { motion, useInView } from 'framer-motion';
import { Code } from "lucide-react"
import { useRef, useState, useEffect } from "react";

interface Skill {
  id: string;
  domain: string;
  icon: React.ReactNode;
  skills: string[];
}


const CardComponent = ({ id, domain, icon, skills }: Skill) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Trigger when near viewport
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className=" md:w-200  group border flex flex-col justify-center items-center border-gray-300 rounded-lg p-5  hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-2">
      <span className="inline-flex items-center justify-center w-15 h-15 text-blue-600 bg-blue-100 rounded-full text-xl font-bold group-hover:shadow-xl p-3 transition-all duration-300 transform group-hover:scale-105">
        {icon}
      </span>
      <h1 className="font-bold text-xl mb-5 mt-5">{domain}</h1>
      <ul className="flex flex-wrap gap-5 mb-5 ">{
        skills.map((skill, index) => (
          <li key={index} className="bg-gray-500/10 px-2 rounded-2xl font-semibold text-sm">{skill}</li>
        ))
      }
      </ul>
    </motion.div>
  )
}


const Skill = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        // Transform the data to match our interface
        const transformedSkills = data.map((skill: any) => ({
          ...skill,
          icon: <Code className="h-6 w-6" /> // Convert string icon to component
        }));
        setSkills(transformedSkills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skill" className="min-h-screen scroll-mt-24 md:px-20 px-5">
      <h1 className="text-3xl font-bold text-center mb-3">Skills & Technologies</h1>
      <p className="text-lg text-gray-500 text-center">I work with a diverse set of technologies to bring ideas to life</p>
      <div className="flex flex-col md:flex-row justify-evenly mt-15 gap-5  ">
        {skills.length > 0 ? skills.map((skill , index) => (
          <CardComponent
            key={index}
            id={skill.id}
            domain={skill.domain}
            icon={skill.icon}
            skills={skill.skills}
          />
        )) : "No skills available"}
      </div>
    </section>
  )
}

export default Skill

