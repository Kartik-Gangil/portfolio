'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code2, Rocket } from 'lucide-react';

const Aboutme = () => {
    const stats = [
        { label: 'Projects Completed', value: '10+', icon: Rocket, color: 'text-primary' },
        { label: 'Years Experience', value: '3+', icon: Briefcase, color: 'text-accent' },
        { label: 'Production Shipped', value: '2', icon: Rocket, color: 'text-primary' },
    ];

    return (
        <section id='about' className='relative min-h-screen py-24 px-5 md:px-20 scroll-mt-24 bg-background overflow-hidden'>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">About Me</h2>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The Person Behind the Code</h1>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-pretty leading-relaxed">
                        I&apos;m a dedicated <span className="text-foreground font-semibold">Full Stack Developer</span> with a passion for building high-performance web applications. I bridge the gap between complex backend logic and pixel-perfect frontend experiences.
                    </p>
                </motion.div>

                <div className='flex flex-col lg:flex-row justify-center items-center gap-12 xl:gap-20'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='relative w-full max-w-lg'
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />

                        <div className='relative aspect-[4/5] w-full rounded-2xl overflow-hidden glass border-white/20 shadow-2xl'>
                            <Image
                                className='object-cover hover:scale-105 transition-transform duration-700'
                                src="https://cdn.jsdelivr.net/gh/Kartik-Gangil/portfolio@main/public/microsoft_kartik.jpg"
                                fill
                                alt="Kartik"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 lg:-right-10 glass p-5 rounded-2xl border-white/10 shadow-2xl space-y-1"
                        >
                            <Award className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-xl font-bold">3+ Years</h3>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='flex-1 max-w-2xl space-y-8'
                    >
                        <div className="space-y-4">
                            <h2 className='text-3xl font-bold flex items-center gap-3'>
                                <Code2 className="text-primary" />
                                Why I Love Development
                            </h2>
                            <p className='text-lg text-muted-foreground leading-relaxed text-pretty'>
                                To me, coding isn&apos;t just about syntax; it&apos;s about architectural craftsmanship. I thrive on the challenge of transforming complex requirements into elegant, scalable solutions that provide real value to users.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className='glass p-6 rounded-2xl border-white/10 hover:border-primary/30 transition-all duration-300'
                                >
                                    <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                                    <h3 className='font-bold text-3xl mb-1'>{stat.value}</h3>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-6 glass rounded-2xl border-white/10 bg-primary/[0.03]">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Fun Fact
                            </h4>
                            <p className="text-sm text-muted-foreground italic">
                                I believe in writing code that is not only functional but also a joy for other developers to read and maintain.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Aboutme;
