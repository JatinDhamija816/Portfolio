import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='shadow-lg w-full px-5 py-2 flex justify-between items-center bg-black sm:flex-col'>
            <div className=''>
                <Link to='/'>
                    <h1 className='text-4xl font-mono text-white ml-5 italic hover:not-italic hover:cursor-pointer'>JD</h1>
                </Link>
            </div>
            <div className=''>
                <ul className='flex mr-5'>
                    <Link to='/'>
                        <li className='mx-2 text-white font-serif hover:cursor-pointer hover:bg-white hover:text-black px-3 py-1 italic hover:not-italic hover:rounded-3xl '>Home</li>
                    </Link>
                    <Link to='/skills'>
                        <li className='mx-2 text-white font-serif hover:cursor-pointer hover:bg-white hover:text-black px-3 py-1 italic hover:not-italic hover:rounded-3xl '>Skills</li>
                    </Link>
                    <Link to='/education'>
                        <li className='mx-2 text-white font-serif hover:cursor-pointer hover:bg-white hover:text-black px-3 py-1 italic hover:not-italic hover:rounded-3xl '>Education</li>
                    </Link>
                    <Link to='projects'>
                        <li className='mx-2 text-white font-serif hover:cursor-pointer hover:bg-white hover:text-black px-3 py-1 italic hover:not-italic hover:rounded-3xl  '>Projects</li>
                    </Link>
                    <Link to='https://leetcode.com/JatinDhamija816/' target='_blank'>
                        <li className='mx-2 text-white font-serif hover:cursor-pointer hover:bg-white hover:text-black px-3 py-1 italic hover:not-italic hover:rounded-3xl  '>Leetcode</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
