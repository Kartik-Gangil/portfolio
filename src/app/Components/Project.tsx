'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowUpRight, FolderCode } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProjectType {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubLink: string;
    liveLink: string;
}

const ProjectCard = ({ title, description, techStack, image, githubLink, liveLink }: ProjectType) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:max-w-[45%] group glass rounded-[2.5rem] overflow-hidden border-white/10 hover:border-primary/40 shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
            <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                    src={image || "/apple-touch-icon.png"}
                    fill
                    alt={title}
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Glassy Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <Link href={githubLink} target="_blank">
                        <Button className="w-12 h-12 glass rounded-2xl p-0 hover:bg-white/20 transition-all duration-300">
                            <Github className="w-6 h-6 text-white" />
                        </Button>
                    </Link>
                    <Link href={liveLink} target="_blank">
                        <Button className="w-12 h-12 glass rounded-2xl p-0 hover:bg-white/20 transition-all duration-300">
                            <ExternalLink className="w-6 h-6 text-white" />
                        </Button>
                    </Link>
                </div>

                {/* Tech Badge */}
                <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full border-white/20 shadow-xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Case Study</span>
                </div>
            </div>

            <div className="p-8 space-y-6">
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors flex items-center gap-2">
                        {title}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <span key={index} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-tighter text-white/60 group-hover:text-primary/80 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const Project = () => {
    const projects: ProjectType[] = [
        {
            title: "ReadmeUp",
            description: "Advanced AI-powered documentation engine that analyzes repository structures to generate professional, SEO-optimized README files. Built with a focus on ease-of-use and developer productivity.",
            techStack: ["Next.js", "GPT-4", "TailwindCSS", "Node.js", "TypeScript"],
            image: "https://readmeup.creovateio.in/favicon.ico",
            githubLink: "https://github.com/Kartik-Gangil/AI-based-GITHUB-readme-generator",
            liveLink: "https://readmeup.creovateio.in"
        },
        {
            title: "Varsha Research",
            description: "A comprehensive digital platform for a research organization, featuring dynamic paper indexing, researcher profiles, and a high-performance publication management system.",
            techStack: ["React", "Material UI", "Express", "AWS Lightsail", "TypeScript"],
            image: "https://www.creovateio.in/Varsha_research_org_banner.webp",
            githubLink: "https://varsharesearchorganization.com/",
            liveLink: "https://varsharesearchorganization.com/"
        },
        {
            title: "AutoPodder",
            description: "Cutting-edge podcast automation platform that leverages AI for speech-to-text, synthesis, and thematic generation. Provides a seamless end-to-end workflow for podcast creators.",
            techStack: ["Next.js 14", "ElevenLabs", "Deepgram", "GenAI", "PostgreSQL"],
            image: "/Autopodder.png",
            githubLink: "https://github.com/Kartik-Gangil/AutoPodder.git",
            liveLink: "https://github.com/Kartik-Gangil/AutoPodder.git"
        },
        {
            title: "JARVIS AI",
            description: "A sophisticated personal assistant integrated with modern APIs to manage tasks, retrieve real-time data, and provide an interactive terminal interface for workflow optimization.",
            techStack: ["Python", "OpenAI API", "SQLite", "Speech Recognition"],
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png",
            githubLink: "https://github.com/Kartik-Gangil/jarvis-using-pyton",
            liveLink: "https://github.com/Kartik-Gangil/jarvis-using-pyton"
        },
    ];

    return (
        <section id="project" className="relative py-24 px-5 md:px-20 scroll-mt-24 bg-background overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[150px] translate-y-1/2" />

            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
                        <FolderCode className="w-4 h-4" /> Portfolio
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Featured Projects</h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-pretty">
                        A curated selection of my most challenging and impactful engineering projects.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
