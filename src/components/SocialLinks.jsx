import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFilePdf } from 'react-icons/fa';
import Resume from '../assets/Resume.pdf'
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/jatin-dhamija-971309252/',
            style: 'rounded-tr-md',
            ariaLabel: 'LinkedIn Profile'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/JatinDhamija816',
            ariaLabel: 'GitHub Profile'
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:jatindamija025@gmail.com',
            ariaLabel: 'Email'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <FaFilePdf size={30} />
                </>
            ),
            href: Resume,
            style: 'rounded-br-md',
            download: true,
            ariaLabel: 'Download Resume'
        },
    ];

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style = '', download, ariaLabel }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={ariaLabel}
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
