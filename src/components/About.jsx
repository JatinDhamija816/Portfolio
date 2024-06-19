import React from "react";

const About = () => {

    return (
        <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="flex flex-col h-auto justify-center md:w-5/6 p-5 mx-auto md:h-screen">
                <div className="py-5">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl ">
                    Hello, I'm Jatin Dhamija, a passionate software developer with a B.Tech in Computer Science and Engineering from Panipat Institute of Engineering and Technology, completed in 2023. My expertise includes JavaScript, the MERN stack (MongoDB, Express.js, React, Node.js), Tailwind CSS, and foundational knowledge of TypeScript and Next.js. Alongside my proficiency in web development technologies, I have a solid understanding of Data Structures and Algorithms (DSA), which enhances my problem-solving skills.
                </p>
                <br />
                <p className="text-xl">
                    As a fresher, I'm eager to apply my technical skills and innovative mindset to real-world projects. I am particularly excited about building efficient, scalable, and user-friendly web applications. I thrive in dynamic environments that challenge me to continually learn and grow. I am committed to contributing to a team that values creativity, collaboration, and the pursuit of excellence in software development.
                </p>
            </div>
        </div>
    );
};

export default About;