import React from "react";

const Education = () => {
    const education = [
        {
            school: 'Panipat Institute of Engineering and Technology, Haryana',
            course: 'Bachelor of Technology (Computer Science and Engineering',
            marks: 'CGPA: 7.2',
            year: '(2019-2023)'
        },
        {
            school: 'Arya Bal Bharti Public School, Panipat ',
            course: 'Class 12th (CBSE)',
            marks: 'Percentage: 61.4%',
            year: '(2017-2018)'
        },
        {
            school: 'Arya Bal Bharti Public School, Panipat ',
            course: 'Class 10th (CBSE)',
            marks: 'CGPA: 6.6',
            year: '(2015-2016)'
        },
    ]
    return (
        <div name="education" className="md:pt-12 pt-20 pb-5 bg-gradient-to-b from-slate-900 to-slate-700 min-h-screen text-white">
            <div className="max-w-screen-lg mx-auto flex justify-center flex-col md:min-h-screen px-4">
                <div className="pb-8 flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Education</p>
                </div>
                <div className="space-y-5">
                    {education.map(({ school, course, marks, year }, index) => (
                        <div key={index} className="w-full sm:w-4/5 md:w-3/4 lg:w-4/5 mx-auto shadow-md shadow-gray-600 bg-gray-900 rounded-lg duration-200 hover:scale-105 px-6 py-4">
                            <div className="flex flex-col sm:flex-row justify-between">
                                <h1 className="font-bold text-lg">{school}</h1>
                                <p className="text-gray-400">{year}</p>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-base md:text-lg">{course}</h2>
                                <p className="text-gray-400">{marks}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;