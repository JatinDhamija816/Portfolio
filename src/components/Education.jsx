import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact'

const Education = () => {
    return (
        <div className=' flex flex-col h-screen justify-between bg-gray-100'>
            <Navbar />
            <div className='mb-auto'>
                <div className=''>
                    <h1 className='uppercase text-4xl text-center py-1 font-mono font-bold text-slate-500 bg-gray-100 shadow-lg drop-shadow-2xl '>Education</h1>
                </div>
                <div className='mt-10 sm:mt-5'>
                    <div className='px-10 py-5'>
                        <h1 className='font-mono font-semibold text-2xl mb-3'>Bachelor's Degree in Computer Science & Engineering</h1>
                        <p className='text-slate-500'>Panipat Institute of Engineering and Technology</p>
                        <p className='text-slate-500'>CGPA - 7.2</p>
                        <p className='font-semibold mt-1 font-serif'>2019-2023</p>
                    </div>
                    <div className='px-10 py-5'>
                        <h1 className='font-mono font-semibold text-2xl mb-3'>High School, Central Board of Secondary Education</h1>
                        <p className='text-slate-500'>Scored 61.4% in PCM(Non-Medical) with Information Practices</p>
                        <p className='font-semibold mt-1 font-serif'>2017-2018</p>
                    </div>
                    <div className='px-10 py-5'>
                        <h1 className='font-mono font-semibold text-2xl mb-3'>Secondary School, Central Board of Secondary Education</h1>
                        <p className='text-slate-500'>Scored 6.6 CGPA</p>
                        <p className='font-semibold mt-1 font-serif'>2015-2016</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Education
