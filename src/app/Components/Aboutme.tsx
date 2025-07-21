import Image from 'next/image'
const Aboutme = () => {
    return (
        <section id='about' className='min-h-screen scroll-mt-24 mt-20 mb-18 p-5'>
            <h1 className="text-center  text-3xl font-bold">About Me</h1>
            <p className="text-xl text-gray-700 text-center text-balance">I'm a passionate full-stack developer with over 2 years of experience building web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.</p>
            <div className='mt-20  flex flex-col md:flex-row justify-center items-center gap-5 '>
                <div className='flex-1 flex items-center justify-center'>
                    <Image
                        className='max-w-full max-h-full rounded-2xl h-100 w-120 object-cover'
                        src="/microsoft_kartik.jpg" height={1000} width={1000} alt='/apple-touch-icon.png' />
                </div>
                <div className='flex-1 max-w-5xl'>
                    <h2 className='text-2xl font-bold mb-5'>Why I Love Development</h2>
                    <p className='text-lg text-gray-600 text-pretty'>Every line of code is an opportunity to solve problems and create meaningful experiences. I specialize in building scalable applications that not only look great but perform exceptionally.</p>
                    <div className='flex justify-center items-center gap-5 mt-4'>
                        <div className='text-center bg-blue-600/10 rounded-2xl p-3 w-full'>
                            <h1 className='font-bold text-2xl text-blue-600'>10+</h1>
                            <p>Project Completed</p>
                        </div>
                        <div className='text-center bg-purple-600/10 rounded-2xl p-3 w-full'>
                            <h1 className='font-bold text-2xl text-purple-600'>2+</h1>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme
