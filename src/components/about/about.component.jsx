import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <div name='about' className='w-full h-full pb-[100px] bg-[#435334] text-[#FAF1E4]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#9EB384]'>
                            About Me
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                    <TypeAnimation 
                            sequence={[
                                'Hi. I\'m Trong, nice to meet you. Please take a look around.',
                            ]}
                            speed={50}
                    />
                        

                    </div>
                    <div>
                        <p>
                            I graduated at California State University of San Marcos in Computer Science. I'm mainly focused on website development.
                            I have a strong knowledge of HTML, CSS, and modern JS library such as ReactJS. Moreover, I have a strong knowledge of NodeJS and Python.
                            My main goal is to become full-stack website developer in the next five year.
                            
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About