import React from 'react'
import HeroImage from '../assests/HeroImage.jpg'

const Home = () => {

    return (
        <div name='home' className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl md:text-7xl font-bold text-white">I,m Jatin Dhamija</h1>
                    <p className="text-gray-500 py-4 max-w-md">I'm Web Devloper, I build things for web. I love to work on web application using technologies like MongoDB, Express.js, React, Node.js, Tailwind, Next.js</p>
                </div>
                <div className='my-5'>
                    <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default Home