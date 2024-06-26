import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="pt-20 pb-5 bg-gradient-to-b from-slate-900 to-slate-700 h-fit md:min-h-screen text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center md:min-h-screen px-4">
                <div className="pb-8 flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6 text-center md:text-left">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/paqgxooa" method="POST" className="flex flex-col w-full md:w-1/2 px-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-200"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-200"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-200"
                        />
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 transition duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;