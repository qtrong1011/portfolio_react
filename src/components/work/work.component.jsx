import React from 'react'
import { workItems } from '../../data/work-data'
import WorkItem from '../work-item/work-item.component'



const Work = () => {
    return (
        <div name='work' className='w-full h-full bg-[#435334] text-[#FAF1E4]'>
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
                    {
                        workItems.map(item=><WorkItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Work