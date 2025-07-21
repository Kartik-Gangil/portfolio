import { Code } from "lucide-react"

const CardComponent = () => {
  return (
    <div className="w-200  group border flex flex-col justify-center items-center border-gray-300 rounded-lg p-5  hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-2">
      <Code className="inline-flex items-center justify-center w-15 h-15 text-blue-600 bg-blue-100 rounded-full text-xl font-bold group-hover:shadow-xl p-3 transition-all duration-300 transform group-hover:scale-105" />
      <h1 className="font-bold text-xl mb-5 mt-5">Frontend</h1>
      <ul className="flex flex-wrap gap-5 mb-5 ">
        <li className="bg-gray-500/10 px-2 rounded-2xl font-semibold text-sm">React</li>
        <li className="bg-gray-500/10 px-2 rounded-2xl font-semibold text-sm">React</li>
        <li className="bg-gray-500/10 px-2 rounded-2xl font-semibold text-sm">React</li>
        <li className="bg-gray-500/10 px-2 rounded-2xl font-semibold text-sm">React</li>
      </ul>
    </div>
  )
}


const Skill = () => {
  return (
    <section id="skill" className="min-h-screen scroll-mt-24 px-20">
      <h1 className="text-3xl font-bold text-center mb-3">Skills & Technologies</h1>
      <p className="text-lg text-gray-500 text-center">I work with a diverse set of technologies to bring ideas to life</p>
      <div className="flex justify-evenly mt-15 gap-5  ">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </section>
  )
}

export default Skill

