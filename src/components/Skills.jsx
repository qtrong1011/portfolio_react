import React from 'react'
import HTML from '../assets/html.png'
import Tailwind from '../assets/tailwind.png'
import Python from '../assets/python.png'
import JS from '../assets/javascript.png'
import Node from '../assets/node.png'
import reactJS from '../assets/react.png'
import Power from '../assets/power_logo.webp'
import MongoDB from '../assets/mongo.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#435334] text-[#FAF1E4]'>
        {/* Container */}
        <div className='max-w-[1000px] px-8 mx-auto flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#9EB384]'>
                    Skills
                </p>
                <p className = 'py-4'>
                    These are technologies I've worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={HTML} alt='HTML icon'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={reactJS} alt='ReactJS icon'></img>
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={JS} alt='JS icon'></img>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={Tailwind} alt='Tailwind icon'></img>
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={Node} alt='NodeJS icon'></img>
                    <p className='my-4'>Node JS</p>
                </div>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={Power} alt='Power Platform icon'></img>
                    <p className='my-4'>Power Platform</p>
                </div>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={MongoDB} alt='MongoDB icon'></img>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-1' src={Python} alt='Python icon'></img>
                    <p className='my-4'>Python</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills