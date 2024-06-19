import React from "react";
import html from '../assests/languages/html.png'
import css from '../assests/languages/css.png'
import js from '../assests/languages/javascript.png'
import mongodb from '../assests/languages/mongoDB.png'
import express from '../assests/languages/express.png'
import react from '../assests/languages/react.png'
import node from '../assests/languages/node.png'
import tailwind from '../assests/languages/tailwind.png'
import typescript from '../assests/languages/typescript.png'
import next from '../assests/languages/nextjs.png'
import git from '../assests/languages/git.png'


const Skills = () => {

    const techs = [
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
        <div name="skills" className="pt-20 bg-gradient-to-b from-gray-800 to-black w-full h-fit">
            <div className="max-w-screen-lg mx-auto p-5 flex flex-col justify-center text-white w-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto rounded" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;