import React from 'react'
import blog from '../assests/Projects/blogs.jpg'
import dribble from '../assests/Projects/dribble.jpg'
import quiz from '../assests/Projects/QuizApp.jpg'
import todo from '../assests/Projects/todo.jpg'
import finance from '../assests/Projects/financeApp.jpg'

const Projects = () => {

    const projects = [
        {
            id: 1,
            src: dribble,
            demoLink: 'https://dribble-smoky.vercel.app/',
            codeLink: 'https://github.com/JatinDhamija816/dribble',
            alt: 'Dribble Project Screenshot',
            name: 'Dribble Clone App'
        },
        {
            id: 2,
            src: blog,
            demoLink: 'https://blogs-xi-six.vercel.app/',
            codeLink: 'https://github.com/JatinDhamija816/blogs',
            alt: 'Blog Project Screenshot',
            name: 'Blog App'
        },
        {
            id: 3,
            src: quiz,
            demoLink: 'https://quiz-app-two-orcin.vercel.app/',
            codeLink: 'https://github.com/JatinDhamija816/quizApp',
            alt: 'Quiz Project Screenshot',
            name: 'Quiz'
        },
        {
            id: 4,
            src: todo,
            demoLink: 'https://todo-app-ashy-six-26.vercel.app/',
            codeLink: 'https://github.com/JatinDhamija816/todo_app',
            alt: 'Todo Project Screenshot',
            name: 'Todo'
        },
        {
            id: 5,
            src: finance,
            demoLink: 'https://finance-app-landing-page.vercel.app/',
            codeLink: 'https://github.com/JatinDhamija816/finance_app_landing_page',
            alt: 'finance Project Screenshot',
            name: 'Figma Page'
        },
    ];

    return (
        <div name="portfolio" className="h-fit bg-gradient-to-b from-black to-gray-800 w-full text-white md: py-10">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, src, demoLink, codeLink, alt, name }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt={alt} className="rounded-md duration-200 hover:scale-105 w-full h-40" />
                            <div>
                                <p className='text-center pt-2 font-bold'>{name}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 p-1 m-4 duration-200 hover:scale-105 text-center">Demo</a>
                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 p-1 m-4 duration-200 hover:scale-105 text-center">Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects