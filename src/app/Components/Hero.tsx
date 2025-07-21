import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
    return (
        <section id="main" className="min-h-screen grid md:grid-cols-2 grid-cols-1 py-10 px-20 items-center h-full bg-gradient-to-br from-blue-50 to-purple-50" >
            <div className="row p-5">
                <h1 className="text-6xl text-balance font-bold mb-3">Hi, I'm <span className="text-blue-600">Kartik Gangil</span></h1>
                <p className="text-preety text-3xl">Full Stack Developer passionate about creating innovative digital solutions that make a difference</p>
                <Button className="mt-5 p-5 mx-3 rounded-full cursor-pointer ">View My Work</Button>
                <Button variant={"outline"} className="mt-5 p-5 mx-3 rounded-full cursor-pointer ">Get in Touch</Button>
            </div>
            <div className="row flex justify-center ">
                <div className="hover:scale-110 transition-all duration-500 ease-in-out w-[400px] h-[400px] rounded-full border-[6px] border-white shadow-[0_0_25px_5px_rgba(139,92,246,0.6)] overflow-hidden">
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
