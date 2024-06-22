import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiLeetcode } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

const Footer = () => {
    const links = [
        {
            id: 1,
            child: (
                <><FaLinkedin size={30} /></>
            ),
            href: 'https://www.linkedin.com/in/jatin-dhamija-971309252/',
        },
        {
            id: 2,
            child: (
                <><FaGithub size={30} /></>
            ),
            href: 'https://github.com/JatinDhamija816',
        },
        {
            id: 3,
            child: (
                <><SiLeetcode size={30} /></>
            ),
            href: 'https://leetcode.com/u/JatinDhamija816/',
        },
        {
            id: 4,
            child: (
                <><HiOutlineMail size={30} /></>
            ),
            href: 'mailto:jatindamija025@gmail.com',
        },
        {
            id: 5,
            child: (
                <><FaFilePdf size={30} /></>
            ),
            href: '/Resume.pdf',
            download: true
        },

    ]
    return (
        <div className='bg-gradient-to-b bg-gray-800 to-black text-white'>
            <div className='h-fit bg-black '>
                <ul className='flex justify-center'>
                    {
                        links.map(({ id, child, href, style, download }) => (
                            <li key={id} className={"flex justify-between items-center px-5 py-5"}>
                                <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank"
                                >{child}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Footer