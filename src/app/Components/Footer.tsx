'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skill' },
        { label: 'Project', href: '#project' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ];



    return (
        <footer className='bg-blue-950 text-white py-8 mt-10'>
            <div className="grid grid-cols-2 items-center ">
                <div className='px-5'>
                    <div className='row flex items-center gap-2'>
                        <Link href="#">
                            <Image alt="logo" src="/apple-touch-icon.png" className='rounded-full' height={40} width={40} />
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-2xl font-bold"
                        >
                            Kartik Gangil
                        </motion.h1>
                    </div>
                    <p className="text-preety text-xs md:text-lg ml-12 text-gray-400">Full Stack Developer</p>
                    <ul className='flex gap-5 ml-10 mt-5 '>
                        <li className='  cursor-pointer hover:text-blue-400 inline-flex items-center justify-center rounded-full text-white'><Link href="https://github.com/Kartik-Gangil"><Github /></Link></li>
                        <li className='  cursor-pointer hover:text-blue-400 inline-flex items-center justify-center rounded-full text-white'><Link href="https://www.linkedin.com/in/kartik-gangil/"><Linkedin /></Link></li>
                        <li className='  cursor-pointer hover:text-blue-400 inline-flex items-center justify-center rounded-full text-white'><Link href="kartikgangil@gmail.com"><Mail /></Link></li>
                    </ul>
                </div>
                <div className='px-5 mt-5 md:mt-0'>

                    <ul className="flex flex-col items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm md:text-lg font-extralight text-gray-400 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            <div className='mt-5 text-center'>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-preety text-sm md:text-lg"
                >
                    © {new Date().getFullYear()} Kartik Gangil. All rights reserved.
                </motion.p>

            </div>
        </footer>
    )
}

export default Footer
