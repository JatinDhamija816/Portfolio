import React from 'react'
import blog from '../assets/Projects/blogs.jpg'
import dribble from '../assets/Projects/dribble.jpg'
import quiz from '../assets/Projects/QuizApp.jpg'
import todo from '../assets/Projects/todo.jpg'
import finance from '../assets/Projects/financeApp.jpg'

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
        <div name="projects" className="pt-20 pb-5 bg-gradient-to-b from-slate-900 to-slate-700 min-h-screen text-white">
            <div className="max-w-screen-xl mx-auto flex justify-center flex-col md:min-h-screen px-4">
                <div className='pb-8 flex flex-col justify-center items-center'>
                    <p className="text-center md:text-left text-4xl font-bold border-b-4 border-gray-500 p-2 md:inline w-fit mx-auto">Projects</p>
                    <p className="text-center md:text-left py-6">Check out some of my work right here</p>
                </div>
                <div className="flex justify-center flex-wrap gap-5">
                    {projects.map(({ id, src, demoLink, codeLink, alt, name }) => (
                        <div key={id} className="shadow-md shadow-gray-300 bg-gray-900 rounded-lg  sm:w-1/3 md:w-1/3 lg:w-1/4 mx-2 my-4">
                            <img src={src} alt={alt} className="rounded-t-lg duration-200 hover:scale-105 w-full h-40 " />
                            <div className="p-4">
                                <p className="text-center font-bold mb-4">{name}</p>
                                <div className="flex justify-between">
                                    <a href={demoLink} target="_blank" className="w-full text-center py-2 border border-blue-500 text-white rounded-lg hover:bg-blue-600 mx-1 transition-transform transform hover:scale-105">Demo</a>
                                    <a href={codeLink} target="_blank" className="w-full text-center py-2 border border-green-500 text-white rounded-lg hover:bg-green-600 mx-1 transition-transform transform hover:scale-105">Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects