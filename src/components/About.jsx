import React from 'react'

const About = () => {
    return (
        <div name='about' className='md:pt-5 pb-5 pt-20 bg-gradient-to-b from-slate-900 to-slate-700 min-h-screen text-white'>
            <div className='max-w-screen-lg mx-auto flex justify-center flex-col h-full md:h-screen px-4 md:px-8'>
                <div className='pb-8 flex flex-col justify-center items-center '>
                    <h1 className='text-4xl font-bold border-b-4 border-gray-500 inline'>About</h1>
                </div>
                <div className=''>
                    <p className='text-lg md:text-xl'>
                        Hello, I'm Jatin Dhamija, a passionate software developer with a B.Tech in Computer Science and Engineering from Panipat Institute of Engineering and Technology, completed in 2023. My expertise includes JavaScript, the MERN stack (MongoDB, Express.js, React, Node.js), Tailwind CSS, and foundational knowledge of TypeScript and Next.js. Alongside my proficiency in web development technologies, I have a solid understanding of Data Structures and Algorithms (DSA), which enhances my problem-solving skills.
                    </p>
                    <br />
                    <p className='text-lg md:text-xl'>
                        As a fresher, I'm eager to apply my technical skills and innovative mindset to real-world projects. I am particularly excited about building efficient, scalable, and user-friendly web applications. I thrive in dynamic environments that challenge me to continually learn and grow. I am committed to contributing to a team that values creativity, collaboration, and the pursuit of excellence in software development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About