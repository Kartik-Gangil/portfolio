'use client'

import { Github, Linkedin, Mail, MapPin, Send, MessageSquareText } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface formData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [data, SetData] = useState<formData>({ name: '', email: '', message: '' });

    return (
        <section id="contact" className="relative min-h-screen py-24 px-5 md:px-20 scroll-mt-24 bg-background overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,oklch(0.65_0.25_260_/_0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-primary text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                        <MessageSquareText className="w-4 h-4" /> Get in Touch
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let&apos;s Build Something Incredible</h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        Have an idea or a project that needs a technical co-pilot? Reach out and let&apos;s discuss how we can work together.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto'>
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='space-y-8'
                    >
                        <div className="space-y-6">
                            <h3 className='text-2xl font-bold'>Contact Information</h3>
                            <div className="space-y-4">
                                <div className='flex items-center gap-4 group'>
                                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary group-hover:border-primary/50 transition-all duration-300">
                                        <Mail className='w-5 h-5' />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Email</p>
                                        <p className='text-lg font-medium'>Kartikgangil@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className='flex items-center gap-4 group'>
                                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary group-hover:border-primary/50 transition-all duration-300">
                                        <MapPin className='w-5 h-5' />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Location</p>
                                        <p className='text-lg font-medium'>Gwalior (M.P.) , India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className='text-xl font-bold tracking-tight'>Social Connectivity</h3>
                            <div className='flex gap-4'>
                                {[
                                    { icon: Github, href: "https://github.com/Kartik-Gangil", color: "hover:text-white" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/kartik-gangil/", color: "hover:text-blue-400" },
                                    { icon: Mail, href: "mailto:Kartikgangil@gmail.com", color: "hover:text-primary" },
                                ].map((social, i) => (
                                    <motion.a 
                                        key={i}
                                        href={social.href}
                                        whileHover={{ y: -5 }}
                                        className={`w-12 h-12 glass rounded-2xl flex items-center justify-center text-muted-foreground ${social.color} hover:border-primary/40 transition-all duration-300 shadow-lg`}
                                    >
                                        <social.icon className='w-5 h-5' />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Status Card */}
                        <div className="p-6 glass rounded-3xl border-primary/20 bg-primary/5 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-bold uppercase tracking-wider">Fast Response</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Typically responds within 24 hours.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='row'
                    >
                        <form
                            className="glass p-8 rounded-[2.5rem] border-white/10 shadow-2xl flex flex-col gap-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log(data)
                            }}
                        >
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-foreground/80 ml-1">
                                    Full Name
                                </label>
                                <input
                                    value={data.name}
                                    onChange={(e) => SetData({ ...data, name: e.target.value })}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/30"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-foreground/80 ml-1">
                                    Email Address
                                </label>
                                <input
                                    value={data.email}
                                    onChange={(e) => SetData({ ...data, email: e.target.value })}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@email.com"
                                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/30"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-foreground/80 ml-1">
                                    Project Details
                                </label>
                                <textarea
                                    value={data.message}
                                    onChange={(e) => SetData({ ...data, message: e.target.value })}
                                    name="message"
                                    id="message"
                                    placeholder="Briefly describe your project or inquiry..."
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none placeholder:text-muted-foreground/30"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="h-14 mt-2 w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all duration-500 shadow-lg shadow-primary/20 group"
                            >
                                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Launch Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
