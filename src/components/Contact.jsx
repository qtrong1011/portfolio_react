import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#435334] text-[#FAF1E4]'>
            <div
                className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9EB384]'>
                        Contact
                    </p>
                    <p className='py-4'>
                        Send me a message
                    </p>
                    <form action='https://getform.io/f/154a9b8b-9f0f-4f3f-ad03-739a630f3d5c'method='POST' className='flex flex-col max-w-[600px] w-full text-black'>
                      <input className='p-2' type='text' placeholder='Name' name='name'></input>
                      <input className='my-4 p-2' type='email' placeholder='Email' name='email'></input>
                      <textarea className='p-2' type='text' placeholder='Message' rows={10}></textarea>
                      <button className='text-2xl text-[#FAF1E4] border-2 hover:bg-[#9EB384] hover:border-[#9EB384] mx-auto my-8 p-2 '>Let's Collaborate</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact