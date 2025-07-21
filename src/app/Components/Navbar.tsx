'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

const Navbar = () => {

    return (
        <nav className="fixed w-full top-0 z-50">
            <div className="flex justify-between items-center mx-10 rounded-xl mt-3 px-5 py-1 bg-white/50 shadow-xl ">
                <div className="flex items-center gap-1">
                    <Image alt="logo" src='/apple-touch-icon.png' height={50} width={50} ></Image>
                    <motion.h1 initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-2xl font-bold">Kartik Gangil</motion.h1>
                </div>
                <div >
                    <ul className="flex items-center gap-5 ">
                        <li className="text-lg hover:cursor-pointer hover:text-blue-600 p-2 "><Link href="#about">About</Link></li>
                        <li className="text-lg hover:cursor-pointer hover:text-blue-600 p-2 "><Link href="#skill" >Skills</Link></li>
                        <li className="text-lg hover:cursor-pointer hover:text-blue-600 p-2 "><Link href="#project" >Project</Link></li>
                        <li className="text-lg hover:cursor-pointer hover:text-blue-600 p-2 "><Link href="#experience" >Experience</Link></li>
                        <li className="text-lg hover:cursor-pointer hover:text-blue-600 p-2 "><Link href="#contact" >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
