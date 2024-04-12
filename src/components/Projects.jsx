import React from 'react'
import { ExternalLink } from 'react-external-link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { projects } from '../project';
const Projects = () => {
    return (
        <div className='border min-h-screen'>
            <div>
                <h1 className='text-4xl text-center py-1 font-bold font-mono shadow-lg shadow-slate-500 uppercase' >projects</h1>
            </div>
            <div>
                <div className='m-5 justify-center'>
                    {
                        projects.map((project) => (
                            <div className='w-5/6 m-auto bg-slate-100 p-5 rounded-2xl drop-shadow-2xl my-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-x-110' key={project.heading}>
                                <div className='w-2/3'>
                                    <h1 className='text-center text-2xl text-blue-500 font-semibold m-3'>{project.heading}</h1>
                                    <p className='m-3 p-5 text-center text-gray-500'>{project.desc}</p>
                                    <div className='flex justify-center' >
                                        <ul className='flex flex-wrap justify-center'>
                                            {
                                                project.tech.map((data, index) => (
                                                    <li className='m-2 border bg-blue-300 px-5 rounded-xl py-1' key={data}>{data}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className='flex justify-center m-3'>
                                        <ExternalLink href={project.github} className='mx-2'>{project.github ? <GitHubIcon /> : ''}</ExternalLink>
                                        <ExternalLink href={project.live} className='mx-2'>{project.live ? <LanguageOutlinedIcon /> : ''}</ExternalLink>
                                    </div>
                                </div>
                                <div className='w-1/3'>
                                    <img src={project.img} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Projects
