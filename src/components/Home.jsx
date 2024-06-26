import React from 'react'
import heroImage from '../assets/HeroImage.jpg'
const Home = () => {
    return (
        <div name='home' className='bg-gradient-to-b from-slate-900 to-slate-700 h-screen'>
            <div className=' max-w-screen-lg flex flex-col justify-center items-center md:flex-row md:px-20 h-full mx-auto pt-20 md:pt-0'>
                <div className='text-center py-10 md:text-left md:w-1/2'>
                    <h1 className='text-5xl md:text-6xl font-bold text-white'>I,m Jatin Dhamija</h1>
                    <p className='text-gray-400 max-w-md mx-auto text-sm py-5 sm:text-base md:text-lg'>I'm Web Devloper, I build things for web. I love to work on web application using technologies like MongoDB, Express.js, React, Node.js, Tailwind, Next.js</p>
                </div>
                <div className=' py-10 md:w-1/2'>
                    <img className='rounded-lg mx-auto w-5/6 md:w-full' src={heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home