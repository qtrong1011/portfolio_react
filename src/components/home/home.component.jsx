import React from 'react'
import {HiArrowNarrowRight, HiArrowNarrowDown} from 'react-icons/hi'
import {useState} from 'react'
import {Link} from 'react-scroll'
import MyPic from '../../assets/my-pic.png'
import { TypeAnimation } from 'react-type-animation'


const Home = () => {
    const [arrowRight, setArrowRight] = useState(true)
    const handleHover = () => setArrowRight(!arrowRight)

    return (
        <div name='home' className='w-full h-screen bg-[#435334] flex'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                {/* <p className='text-[#FAF1E4]'>Hi, my name is</p>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#9EB384]'>I'm a Software Developer.</h2>
                <p className='text-[#FAF1E4] py-4 max-w-[700px]'>I'm a software developer
                    specializing in building exceptional digital experiences. Currently, I am focus
                    on building website application.
                </p> */}
                <div className='flex gap-1 items-center'>
                    <div>
                        <img width="80" height="80" src="https://img.icons8.com/?size=256&id=dlN23b953qvQ&format=png" alt="waving-hand-emoji"/>
                    </div>
                    <div>
                        <p className='text-[#FAF1E4]'>Hi, My name is</p>
                        <h1 className='text-4xl sm:text-7xl text-[#CEDEBD] font-bold'>
                            <TypeAnimation 
                            sequence={[
                                'Trong Luu',
                                3000,
                                ''
                            ]}
                            speed={50}
                            repeat={Infinity}
                            
                            />
                        </h1>
                    </div>
                </div>
                <p className='text-[#FAF1E4] py-4 max-w-[700px]'>I'm a software developer
                    specializing in building exceptional digital experiences. Currently, I am focus
                    on building website application.
                </p>
                <div>

                    <button
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                        className=' text-white border-2 px-6 py-2 my-2 rounded-2xl  hover:bg-[#9EB384] hover:border-[#9EB384]  '>
                        <Link
                            className='flex justify-between items-center'
                            to='skills'
                            smooth={true}
                            duration={500}>
                            View My Skills
                            <span>
                                {
                                    arrowRight
                                        ? <HiArrowNarrowRight className='ml-2'/>
                                        : <HiArrowNarrowDown className='ml-2'/>
                                }

                            </span>
                        </Link>

                    </button>

                </div>

                
            </div>
            
            

        </div>
    )
}

export default Home