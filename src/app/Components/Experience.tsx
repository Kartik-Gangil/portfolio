import { Calendar } from "lucide-react"

const ExpCard = () => {
    return (
        <div className="bg-white hover:shadow-xl transition-all duration-300 border border-gray-500/10 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4 justify-between">
                <h1 className="text-2xl font-bold">
                    Senior Full Stack Developer
                </h1>
                <p className="flex gap-2 items-center text-gray-600"><Calendar/>2022 - Present</p>
            </div>
            <h3 className="text-xl text-blue-600 mb-4 font-semibold">TechCorp Solutions</h3>
            <p className="text-gray-600 ">Lead development of enterprise web applications, mentoring junior developers, and implementing DevOps practices.</p>
        </div>
    )
}



const Experience = () => {
    return (
        <section id="experience" className="min-h-screen bg-gray-100 p-20">
            <h1 className="text-3xl font-bold text-center mb-3">Work Experience</h1>
            <p className="text-lg text-gray-500 text-center">My professional journey and key achievements</p>
            <div className="mt-10 flex flex-col gap-5">
                <ExpCard />
                <ExpCard />
                <ExpCard />
            </div>
        </section>
    )
}

export default Experience
