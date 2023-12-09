
const SkillsItem = ({item}) =>  {
    const {title, imagePath} = item
    return(
        <div className= 'shadow-sm shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto py-1' src={imagePath} alt={title}></img>
            <p className='my-4'>{title}</p>
        </div>
    )
}
export default SkillsItem