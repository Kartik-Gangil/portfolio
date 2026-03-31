'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
    const navLinks = [
        { label: 'About Experience', href: '#about' },
        { label: 'Tech Stack', href: '#skill' },
        { label: 'Case Studies', href: '#project' },
        { label: 'Professional History', href: '#experience' },
        { label: 'Get in Touch', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/Kartik-Gangil", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/kartik-gangil/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:Kartikgangil@gmail.com", label: "Email" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='relative bg-background border-t border-white/5 pt-20 pb-12 overflow-hidden'>
            {/* Background Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 glass rounded-2xl overflow-hidden border-white/10 group">
                                <Image 
                                    alt="logo" 
                                    src="/apple-touch-icon.png" 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight">Kartik Gangil</h2>
                        </div>
                        <p className="max-w-md text-muted-foreground leading-relaxed text-sm">
                            Building high-performance, modular web applications with a focus on premium user experiences and robust technical architectures.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors border-white/5"
                                    aria-label={link.label}
                                >
                                    <link.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Navigation</h3>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact CTA */}
                    <div className="col-span-1 space-y-6">
                        <h3 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Work with me</h3>
                        <p className="text-sm text-muted-foreground italic">
                            Available for freelance projects and technical consultations.
                        </p>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            className="bg-primary/10 p-3 rounded-2xl border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300"
                        >
                            <ArrowUpCircle className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs font-medium">
                        © {new Date().getFullYear()} Kartik Gangil. Crafted with Next.js & Framer Motion.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Open to Remote Opportunities</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
