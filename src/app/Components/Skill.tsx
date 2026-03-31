'use client';

import { motion } from 'framer-motion';
import { Code, CodeXml, Container, Database, GitBranchIcon, Cpu, Layout, Server, Cloud, LucideIcon } from "lucide-react"

interface SkillType {
  id: string;
  domain: string;
  icon: LucideIcon;
  skills: string[];
  size?: 'small' | 'medium' | 'large';
  color: string;
}

const SkillCard = ({ domain, icon: Icon, skills, size = 'small', color }: SkillType) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`glass group p-6 rounded-3xl border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden ${sizeClasses[size]}`}
    >
      {/* Background Accent Glow */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full ${color}`} />
      
      <div className="relative z-10 space-y-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 glass border-white/20 group-hover:border-primary/50 group-hover:scale-110 group-hover:shadow-[0_0_15px_-3px_primary] transition-all duration-500`}>
          <Icon className={`w-full h-full text-primary`} />
        </div>
        
        <div>
          <h3 className="font-bold text-xl mb-3 tracking-tight group-hover:text-primary transition-colors">{domain}</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <li 
                key={index} 
                className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-foreground/70 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Skill = () => {
  const skills: SkillType[] = [
    {
      id: '1',
      domain: 'Frontend Architecture',
      icon: Layout,
      skills: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'Framer Motion'],
      size: 'medium',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      domain: 'Backend & APIs',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Server Actions'],
      size: 'medium',
      color: 'bg-purple-500'
    },
    {
      id: '3',
      domain: 'Data Management',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma', 'Supabase'],
      size: 'small',
      color: 'bg-emerald-500'
    },
    {
      id: '4',
      domain: 'Development Ops',
      icon: Cloud,
      skills: ['AWS (S3, Lightsail)', 'Docker', 'Vercel', 'CI/CD Pipeline'],
      size: 'small',
      color: 'bg-orange-500'
    },
    {
      id: '5',
      domain: 'Version Control & Workflow',
      icon: GitBranchIcon,
      skills: ['Git', 'GitHub', 'Agile/Scrum', 'GitBash'],
      size: 'medium',
      color: 'bg-cyan-500'
    },
  ];

  return (
    <section id="skill" className="relative py-24 px-5 md:px-20 scroll-mt-24 bg-background overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase">Tech Stack</h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-glow">Expertise & Technologies</h1>
          <p className="max-w-xl mx-auto text-muted-foreground">
            A comprehensive set of tools and platforms I use to build scalable, high-performance web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              {...skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
