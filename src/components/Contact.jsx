import React from 'react'
import { ExternalLink } from 'react-external-link'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-evenly p-2 sm:flex sm:justify-between'>
                <div className='flex justify-center'>
                    <h1 className='p-2 text-4xl underline font-mono'>Follow me</h1>
                </div>
                <div className='flex justify-center'>
                    <ExternalLink className='m-2 p-2' href='https://www.linkedin.com/in/jatin-dhamija-971309252/'> <LinkedInIcon /></ExternalLink>
                    <ExternalLink className='m-2 p-2' href='https://github.com/JatinDhamija816'> <GitHubIcon /></ExternalLink>
                    <Link className='m-2 p-2' to='mailto:jatindhamija025@gmail.com'><EmailIcon /></Link>
                </div>
            </div >
            <hr className='text-white w-2/3 m-auto sm:w-full' />
            <div className='flex justify-evenly w-2/3 m-auto min-h-fit py-2 sm:flex-col sm:w-full'>
                <div className='sm:hidden md:hidden'>
                    <h1 className='p-2 text-4xl sm:text-center'>JD</h1>
                </div>
                <div>
                    <ul className='p-2 flex sm:justify-center'>
                        <Link to='./'><li className='text-lg p-3 text-serif'>Home</li></Link>
                        <Link to='./skills'><li className='text-lg p-3 text-serif'>Skills</li></Link>
                        <Link to='./education'><li className='text-lg p-3 text-serif'>Education</li></Link>
                        <Link to='./projects'><li className='text-lg p-3 text-serif'>Projects</li></Link>
                        <Link to='https://leetcode.com/JatinDhamija816/' target='_blank'>
                            <li className='text-lg p-3 text-serif'>Leetcode</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact
