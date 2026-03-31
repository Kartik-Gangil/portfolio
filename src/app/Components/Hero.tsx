'use client';

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section id="main" className="relative min-h-screen flex items-center justify-center py-20 px-5 md:px-20 overflow-hidden bg-background">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 z-0 mesh-gradient opacity-60" />

            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="container relative z-10 grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-medium animate-float">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Hi, I&apos;m <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent animate-gradient-x">
                            Kartik Gangil
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                        A <span className="text-foreground font-semibold">Full Stack Developer</span> crafting modular, high-performance digital experiences with a focus on modern UI aesthetics.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link href="#project">
                            <Button className="h-12 px-8 rounded-xl glass-hover bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-300 shadow-lg shadow-primary/20 group">
                                View My Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button variant="outline" className="h-12 px-8 rounded-xl glass border-white/10 hover:border-primary/50 text-foreground transition-all duration-300">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        {[
                            { icon: Github, href: "https://github.com/Kartik-Gangil" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/kartik-gangil/" },
                            { icon: Mail, href: "kartikgangil@gmail.com" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center"
                >
                    <div className="relative group">
                        {/* Image Backdrop Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-full" />

                        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 glass shadow-2xl transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/Kartik-Gangil/portfolio@main/public/kartik.jpg"
                                alt="Kartik Gangil"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                            {/* Overlay Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/10 shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-bold">3+ Years Exp.</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
