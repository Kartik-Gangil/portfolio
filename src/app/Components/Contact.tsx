'use client'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface formData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [data, SetData] = useState<formData>({ name: '', email: '', message: '' });

    return (
        <section id="contact" className="min-h-screen scroll-mt-24 md:px-40 px-10 mt-48">
            <h1 className="text-4xl font-bold text-center mb-3">Let&apos;s Work Together</h1>
            <p className="text-lg text-gray-500 text-center">Have a project in mind? I&apos;d love to hear from you!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
                <div className='row'>
                    <h1 className='text-2xl font-bold mb-4'>Get in Touch</h1>
                    <p className='flex gap-2 items-center mb-2'><Mail className='text-blue-600' />Kartikgangil@gmail.com</p>
                    <p className='flex gap-2 items-center mb-4'><MapPin className='text-blue-600' />Gwalior (M.P.) , India</p>
                    <h1 className='text-xl font-semibold mb-4'>Follow Me</h1>
                    <ul className='flex gap-5'>
                        <li className='h-10 w-10 bg-blue-600/20 cursor-pointer hover:bg-blue-800/20 inline-flex items-center justify-center rounded-full text-blue-600'><Link href="https://github.com/Kartik-Gangil"><Github /></Link></li>
                        <li className='h-10 w-10 bg-blue-600/20 cursor-pointer hover:bg-blue-800/20 inline-flex items-center justify-center rounded-full text-blue-600'><Link href="https://www.linkedin.com/in/kartik-gangil/"><Linkedin /></Link></li>
                        <li className='h-10 w-10 bg-blue-600/20 cursor-pointer hover:bg-blue-800/20 inline-flex items-center justify-center rounded-full text-blue-600'><Link href="kartikgangil@gmail.com"><Mail /></Link></li>
                    </ul>

                </div>
                <div className='row '>
                    <form
                        className="flex flex-col gap-4 border border-gray-300 rounded-2xl p-6 shadow-sm bg-white w-full max-w-lg"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Call your submit function here
                            console.log(data)

                        }}
                    >
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                value={data.name}
                                onChange={(e) => SetData({ ...data, name: e.target.value })}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                value={data.email}
                                onChange={(e) => SetData({ ...data, email: e.target.value })}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="your.email@example.com"
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                value={data.message}
                                onChange={(e) => SetData({ ...data, message: e.target.value })}
                                name="message"
                                id="message"
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="mt-2 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
                        >
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact
