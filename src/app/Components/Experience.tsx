'use client';

import { Calendar, Briefcase, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface WorkExp {
    year: string;
    role: string;
    company: string;
}

const ExpCard = ({ year, role, company, index }: WorkExp & { index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass group p-8 rounded-[2rem] border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
        >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between relative z-10">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                        Professional
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {role}
                    </h2>
                    <h3 className="text-lg font-medium text-muted-foreground flex items-center gap-2">
                        {company}
                        <ChevronRight className="w-4 h-4 text-primary/40" />
                    </h3>
                </div>
                
                <div className="flex items-center gap-3 glass px-5 py-3 rounded-2xl border-white/5 shadow-inner">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground/80">{year}</span>
                </div>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-4 italic">
                Contributing to high-impact projects and collaborating with cross-functional teams to deliver scalable digital solutions.
            </p>
        </motion.div>
    );
}

const Experience = () => {
    const [workData, setWorkData] = useState<WorkExp[]>([]);

    const fetchData = async () => {
        try {
            const res = await fetch("/api/Experience");
            const data = await res.json();
            const formattedData = data.map((item: WorkExp) => ({
                year: item.year,
                role: item.role,
                company: item.company,
            }));
            setWorkData(formattedData.reverse());
        } catch (error) {
            console.log("Error fetching experience:", error);
            // Fallback for demonstration if API fails during build/preview
            if (workData.length === 0) {
                setWorkData([
                    { year: "2023 - Present", role: "Full Stack Developer", company: "Freelance / Creovateio" },
                    { year: "2022 - 2023", role: "Frontend Intern", company: "Tech Solutions Inc." }
                ]);
            }
        }
    }

    useEffect(() => { 
        fetchData(); 
    }, []);

    return (
        <section id="experience" className="relative py-24 px-5 md:px-20 scroll-mt-24 bg-background overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-primary text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                        <Briefcase className="w-4 h-4" /> Career Path
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional History</h1>
                    <p className="max-w-xl mx-auto text-muted-foreground">
                        A timeline of my journey through various technical roles and the organizations I&apos;ve contributed to.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {workData.length > 0 ? (
                        workData.map((data, index) => (
                            <ExpCard 
                                key={index} 
                                {...data} 
                                index={index} 
                            />
                        ))
                    ) : (
                        <div className="text-center py-20 opacity-50 italic">
                            No experience entries found.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Experience;
