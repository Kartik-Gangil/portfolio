'use client'
import { motion, useInView } from 'framer-motion';
import { Code, CodeXml, Container, Database, GitBranchIcon } from "lucide-react"
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
      className="   group border flex flex-col justify-center items-center border-gray-300 rounded-lg p-5  hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-2">
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
  const [skills, setSkills] = useState<Skill[]>([{
    id: '1',
    domain: 'Frontend',
    icon: <Code className="w-6 h-6" />,
    skills: ['Material UI', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js']
  }, {
    id: '2',
    domain: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB', 'SQL', 'Supabase', 'Firebase', 'MariaDB', 'Postgres']
  },
  {
    id: '3',
    domain: 'Programming Languages',
    icon: <CodeXml className="w-6 h-6" />,
    skills: ['C++', 'JavaScript', 'TypeScript','Node js']
  },
  {
    id: '4',
    domain: 'Version Control',
    icon: <GitBranchIcon className="w-6 h-6" />,
    skills: ['Git', 'GitHub', 'GitBash']
  },
  {
    id: '5',
    domain: 'Deployement Tools',
    icon: <Container className="w-6 h-6" />,
    skills: ['AWS(S3, Lightsail)', 'Vercel', 'Netlify', 'Render', 'Railway', 'Docker']
  },
  ]);



  return (
    <section id="skill" className="min-h-screen scroll-mt-24 mb-5 md:px-20 px-5">
      <h1 className="text-3xl font-bold text-center mb-3">Skills & Technologies</h1>
      <p className="text-lg text-gray-500 text-center">I work with a diverse set of technologies to bring ideas to life</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-15">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <CardComponent
              key={index}
              id={skill.id}
              domain={skill.domain}
              icon={skill.icon}
              skills={skill.skills}
            />
          ))
        ) : (
          "No skills available"
        )}
      </div>
    </section>
  )
}

export default Skill

