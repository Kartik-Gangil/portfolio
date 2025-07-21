'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react'; // Assuming you're using lucide

const AnimatedCard = () => {
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
                    src="/apple-touch-icon.png"
                    width={1000}
                    height={1000}
                    alt="E-Commerce Platform"
                    className="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                            <Github className="h-5 w-5 text-xl" />
                        </Link>
                        <Link href="#" className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                            <ExternalLink className="h-5 w-5 text-xl" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h1 className="font-bold text-xl mb-3 text-gray-800">E-Commerce Platform</h1>
                <p className="text-gray-600 mb-4 text-sm">
                    Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.
                </p>
                <ul className="flex flex-wrap gap-2">
                    <li className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">React</li>
                </ul>
            </div>
        </motion.div>
    );
}



const Project = () => {
    return (
        <section id="project" className="min-h-screen scroll-mt-24 md:px-20 px-5 md:mt-0 mt-10">
            <h1 className="text-3xl font-bold text-center mb-3">Featured Projects</h1>
            <p className="text-lg text-gray-500 text-center">Here are some of my recent works that I&apos;m proud of</p>
            <div className="flex flex-wrap justify-evenly mt-15 gap-5">
                <AnimatedCard />
                <AnimatedCard />
                <AnimatedCard />


            </div>

        </section>
    )
}

export default Project
