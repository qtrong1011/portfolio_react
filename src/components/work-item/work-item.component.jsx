
const WorkItem = ({item}) =>{
    const {title, description, image,github,live,tech} = item
    return(
        <div
        style={{
            backgroundImage: `url(${image})`
        }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <div className='text-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        {title}
                    </span>
                    <p className='text-[#d3d3d3] text-center italic font-light'>{description}</p>
                    <p className='text-[#d3d3d3] text-center italic font-light'>{tech}</p>
                </div>
                
                <div className='pt-8 text-center'>
                    <a href={live} target='_blank' rel="noopener noreferrer">
                        <button
                            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href={github} target='_blank' rel="noopener noreferrer">
                        <button
                            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
    
}

export default WorkItem