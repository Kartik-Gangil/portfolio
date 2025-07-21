'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skill' },
        { label: 'Project', href: '#project' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50">
            <div className="flex justify-between items-center mx-4 md:mx-10 mt-3 px-5 py-2 rounded-xl bg-white/50 shadow-xl backdrop-blur-md">
                {/* Logo + Name */}
                <div className="flex items-center gap-2 ">
                    <Image alt="logo" src="/apple-touch-icon.png" height={40} width={40} />
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl font-bold"
                    >
                        Kartik Gangil
                    </motion.h1>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-base md:text-lg font-medium hover:text-blue-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon (Mobile Only) */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white/90 shadow-xl rounded-xl mx-4 mt-2 py-4 px-6 backdrop-blur-md"
                >
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="block text-lg font-medium text-gray-800 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)} // Close on click
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
