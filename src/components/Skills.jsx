import React from 'react'

const Skills = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <h1 className='text-4xl py-1 font-bold font-mono shadow-lg shadow-zinc-500 text-center' >SKILLS</h1>
            </div>
            <div className='flex m-5 md:flex-col'>
                <div className='md:w-fit border w-1/3 m-10 p-10 bg-slate-200 drop-shadow-2xl rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
                    <h1 className='text-blue-800 font-semibold text-3xl text-center mb-5'>Web Design</h1>
                    <p className='text-center text-lg'>I love designs and it's the first step before creating any website as I can give layout to my imagination</p>
                </div>
                <div className='md:w-fit border w-1/3 m-10 p-10 bg-slate-200 drop-shadow-2xl rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
                    <h1 className='text-blue-800 font-semibold text-3xl text-center mb-5'>Web Development</h1>
                    <p className='text-center text-lg'>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well</p>
                </div>
                <div className='md:w-fit border w-1/3 m-10 p-10 bg-slate-200 drop-shadow-2xl rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
                    <h1 className='text-blue-800 font-semibold text-3xl text-center mb-5'>Problem Solving</h1>
                    <p className='text-center text-lg'>I love solving problems whether programming problems or real life problems</p>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <h1 className='text-center font-semibold text-xl tracking-widest mt-5'>TECH I'M FAMILIAR WITH</h1>
                </div>
                <div className='w-2/3 m-auto mt-5'>
                    <ul className='flex flex-wrap justify-center'>
                        <li className='bg-yellow-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>JavaScript</li>
                        <li className='bg-yellow-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>TypeScript</li>
                        <li className='bg-green-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>Tailwind CSS</li>
                        <li className='bg-yellow-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>NextJs</li>
                        <li className='bg-neutral-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>ReactJs</li>
                        <li className='bg-amber-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>Node.js</li>
                        <li className='bg-lime-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>Express.js</li>
                        <li className='bg-emerald-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>MonogoDB</li>
                        <li className='bg-teal-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>Redux</li>
                        <li className='bg-red-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>HTML5</li>
                        <li className='bg-orange-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>CSS3</li>
                        <li className='bg-blue-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>Material UI</li>
                        <li className='bg-cyan-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>Git</li>
                        <li className='bg-sky-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>C/C++</li>
                        <li className='bg-purple-700 text-white mx-5 my-3 border px-5 py-1 rounded-2xl '>MySQL</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Skills
