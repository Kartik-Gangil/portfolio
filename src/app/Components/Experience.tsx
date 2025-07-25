'use client'
import { Calendar } from "lucide-react"
import { useEffect, useState } from "react";

interface WorkExp {
    year: string;
    role: string;
    company: string;
}


const ExpCard = ({ year, role, company }: WorkExp) => {
    return (
        <div className="bg-white max-w-full hover:shadow-xl transition-all duration-300 border border-gray-500/10 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4 justify-between">
                <h1 className="text-lg md:text-2xl  font-bold">
                    {role}
                </h1>
                <p className="flex gap-2 items-center text-gray-600 text-sm md:text-lg"><Calendar />{year}</p>
            </div>
            <h3 className="text-lg md:text-xl text-blue-600 mb-4 font-semibold">{company}</h3>
            {/* <p className="text-gray-600 text-sm">Lead development of enterprise web applications, mentoring junior developers, and implementing DevOps practices.</p> */}
        </div>
    )
}




const Experience = () => {
    const [workData, setWorkData] = useState<WorkExp[]>([]);

    const fetchData = async () => {
        try {
            const res = await fetch("/api/Experience");
            const data = await res.json();
            const formattedData = data.map((item: any) => ({
                year: item.year,
                role: item.role,
                company: item.company,
            }));
            console.log(formattedData)
            setWorkData(formattedData);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { fetchData() }, [])

    return (
        <section id="experience" className="min-h-screen bg-gray-100 md:p-20 p-5 md:mt-0 mt-10">
            <h1 className="text-3xl font-bold text-center mb-3">Work Experience</h1>
            <p className="text-lg text-gray-500 text-center">My professional journey and key achievements</p>
            <div className="mt-10 flex flex-col gap-5">
                {workData.map((data, index) => (<ExpCard key={index} year={data.year} role={data.role} company={data.company} />))}
            </div>
        </section>
    )
}

export default Experience
