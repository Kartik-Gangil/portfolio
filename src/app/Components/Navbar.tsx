'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skill' },
        { label: 'Project', href: '#project' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
                style={{ scaleX }}
            />

            <div className={`mx-4 md:mx-10 px-6 py-3 rounded-2xl glass transition-all duration-300 flex justify-between items-center ${scrolled ? 'bg-card/80 shadow-2xl' : 'bg-transparent border-transparent shadow-none'}`}>
                {/* Logo + Name */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/20 group-hover:border-primary/50 transition-colors">
                        <Image
                            alt="logo"
                            src="/apple-touch-icon.png"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:from-primary group-hover:to-accent transition-all duration-300"
                    >
                        Kartik Gangil
                    </motion.h1>
                </Link>

                {/* Desktop Navigation + Theme Toggle */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-foreground/70 hover:text-primary hover:text-glow transition-all duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Divider */}
                    <div className="h-5 w-px bg-border" />

                    {/* Theme Toggle (desktop) */}
                    <button
                        id="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-lg glass text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                        <motion.div
                            key={theme}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.div>
                    </button>
                </div>
                {/* Mobile: Theme Toggle + Hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-lg glass text-foreground/80 hover:text-primary transition-all duration-300"
                    >
                        <motion.div
                            key={theme}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.div>
                    </button>
                    <button
                        className="p-2 text-foreground/80 hover:text-primary transition-colors glass rounded-lg"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? { opacity: 1, y: 0, display: 'block' } : { opacity: 0, y: -20, transitionEnd: { display: 'none' } }}
                className="md:hidden glass mx-4 mt-2 py-6 px-8 rounded-2xl overflow-hidden"
            >
                <ul className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
