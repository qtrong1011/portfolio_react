import React from 'react'
import WeatherImg from '../assets/weather-bg.jpg'
import ChatImg from '../assets/chat-bg.jpg'



const Work = ({ref}) => {
    return (
        <div name='work' className='w-full md:h-screen bg-[#435334] text-[#FAF1E4]'>
            {/* Container */}
            <div
                className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9EB384]'>
                        Work
                    </p>
                    <p className='py-4'>
                        Check out some of my recent work
                    </p>
                </div>
                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Items */}
                    <div
                        style={{
                            backgroundImage: `url(${WeatherImg})`
                        }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather Application
                            </span>
                            <p className='text-[#d3d3d3] text-center italic font-light'>ReactJS + NodeJS</p>
                            <div className='pt-8 text-center'>
                                <a href='https://qtrong1011.github.io/weather-app-UI/' target='_blank' rel="noopener noreferrer">
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/qtrong1011/weather-app-UI' target='_blank' rel="noopener noreferrer" >
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${ChatImg})`
                        }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Chat Room Application

                            </span>
                            <p className='text-[#d3d3d3] text-center italic font-light'>NodeJS with SocketIO</p>
                            <div className='pt-8 text-center'>
                                <a href='https://luu-node-v1-chat-app-e4d54bbed24e.herokuapp.com/' target='_blank' rel="noopener noreferrer" >
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/qtrong1011/chat-application' target='_blank' rel="noopener noreferrer" >
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div> 
                    {/* <div
                        style={{
                            backgroundImage: `url(${WorkImg})`
                        }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        Hover Effects
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div> */}
                    {/* <div
                        style={{
                            backgroundImage: `url(${realEstate})`
                        }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        Hover Effects 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div> */}
                    {/* <div
                        style={{
                            backgroundImage: `url(${WorkImg})`
                        }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        Hover Effects 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div> */}
                    {/* <div
                        style={{
                            backgroundImage: `url(${realEstate})`
                        }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        Hover Effects
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Work