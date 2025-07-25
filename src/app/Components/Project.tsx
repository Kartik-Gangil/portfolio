'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react'; // Assuming you're using lucide

interface Project {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubLink: string;
    liveLink?: string;
}[]

const AnimatedCard = ({ title, description, techStack, image, githubLink, liveLink }: Project) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' }); // Trigger when near viewport

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-sm group border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt={title}
                    className="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        <Link href={githubLink} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                            <Github className="h-5 w-5 text-xl" />
                        </Link>
                        <Link href={liveLink} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                            <ExternalLink className="h-5 w-5 text-xl" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h1 className="font-bold text-xl mb-3 text-gray-800">{title}</h1>
                <p className="text-gray-600 mb-4 text-sm">
                    {description}
                </p>
                <ul className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (<li key={index} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">{tech}</li>))}
                </ul>
            </div>
        </motion.div>
    );
}



const Project = () => {

    const [projects, setProjects] = useState<Project[]>([{
        title: '',
        description: '',
        techStack: [],
        image: '',
        githubLink: '',
        liveLink: ''
    }]);

    const fetchProjects = async () => {
        try {
            fetch('/api/Project')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    const formattedProjects = data.map((project: any) => ({
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

        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchProjects();

    }, [])

    return (
        <section id="project" className="min-h-screen scroll-mt-24 md:px-20 px-5 md:mt-0 mt-10">
            <h1 className="text-3xl font-bold text-center mb-3">Featured Projects</h1>
            <p className="text-lg text-gray-500 text-center">Here are some of my recent works that I&apos;m proud of</p>
            <div className="flex flex-wrap justify-evenly mt-15 gap-5">
                {projects.map((project, index) => (
                    <AnimatedCard key={index} title={project.title} description={project.description} techStack={project.techStack} githubLink={project.githubLink} liveLink={project.liveLink} image={project.image} />
                )
                )
                }
            </div>

        </section>
    )
}

export default Project
