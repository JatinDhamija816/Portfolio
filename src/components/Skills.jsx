import React from "react";
import html from '../assets/languages/html.png'
import css from '../assets/languages/css.png'
import js from '../assets/languages/javascript.png'
import mongodb from '../assets/languages/mongoDB.png'
import express from '../assets/languages/express.png'
import react from '../assets/languages/react.png'
import node from '../assets/languages/node.png'
import tailwind from '../assets/languages/tailwind.png'
import typescript from '../assets/languages/typescript.png'
import next from '../assets/languages/nextjs.png'
import git from '../assets/languages/git.png'


const Skills = () => {

    const techs = [
        {
            id: 3,
            src: js,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: node,
            title: "Node.js",
            style: "shadow-green-600",
        },
        {
            id: 5,
            src: react,
            title: "React",
            style: "shadow-blue-400",
        },
        {
            id: 6,
            src: express,
            title: "Express.js",
            style: "shadow-white",
        },
        {
            id: 7,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-400",
        },
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 8,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-gray-400",
        },
        {
            id: 9,
            src: typescript,
            title: "Typescript",
            style: "shadow-blue-400",
        },
        {
            id: 10,
            src: next,
            title: "Next JS",
            style: "shadow-white",
        },
        {
            id: 11,
            src: git,
            title: "Git",
            style: "shadow-white",
        },
    ];

    return (
        <div name="skills" className="pt-20 pb-5 bg-gradient-to-b from-slate-900 to-slate-700 min-h-screen text-white">
            <div className="max-w-screen-xl mx-auto flex justify-center flex-col h-full md:min-h-screen px-4">
                <div className="pb-8 flex flex-col justify-center items-center">
                    <p className="text-center md:text-left text-4xl font-bold border-b-4 border-gray-500 p-2 md:inline w-fit mx-auto">Skills</p>
                    <p className="text-center md:text-left py-6">These are the technologies I've worked with</p>
                </div>

                <div className="flex justify-center flex-wrap gap-5">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md bg-gray-900 hover:scale-105 md:w-1/6 w-1/3 duration-500 py-3  m-5 px-4 rounded-lg ${style}`}>
                            <img src={src} alt={title} className="w-20 mx-auto rounded" />
                            <p className="mt-4 text-center">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;