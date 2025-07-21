import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <section id="main" className="min-h-screen grid md:grid-cols-2 grid-cols-1 py-10 md:px-20 px-5 items-center h-full bg-gradient-to-br from-blue-50 to-purple-50" >
            <div className="row p-5">
                <h1 className="text-4xl md:text-6xl md:text-balance font-bold mb-3">Hi, Im <span className="text-blue-600">Kartik Gangil</span></h1>
                <p className="text-preety text-xl md:text-3xl ">Full Stack Developer passionate about creating innovative digital solutions that make a difference</p>
                <Button className="mt-5 p-5 mx-3 rounded-full cursor-pointer "><Link href="#project">View My Work</Link></Button>
                <Button variant={"outline"} className="mt-5 p-5 mx-3 rounded-full cursor-pointer "><Link href="#contact">Get in Touch</Link></Button>
                <ul className='flex gap-5 mt-5 justify-center md:justify-start'>
                    <li className='h-10 w-10 bg-blue-600/20 cursor-pointer hover:bg-blue-800/20 inline-flex items-center justify-center rounded-full text-blue-600'><Link href="https://github.com/Kartik-Gangil"><Github /></Link></li>
                    <li className='h-10 w-10 bg-blue-600/20 cursor-pointer hover:bg-blue-800/20 inline-flex items-center justify-center rounded-full text-blue-600'><Link href="https://www.linkedin.com/in/kartik-gangil/"><Linkedin /></Link></li>
                    <li className='h-10 w-10 bg-blue-600/20 cursor-pointer hover:bg-blue-800/20 inline-flex items-center justify-center rounded-full text-blue-600'><Link href="kartikgangil@gmail.com"><Mail /></Link></li>
                </ul>
            </div>
            <div className="row flex justify-center ">
                <div className="hover:scale-110 transition-all duration-500 ease-in-out md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full border-[6px] border-white shadow-[0_0_25px_5px_rgba(139,92,246,0.6)] overflow-hidden">
                    <Image
                        src="/kartik.jpg"
                        alt="photo"
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full "
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
