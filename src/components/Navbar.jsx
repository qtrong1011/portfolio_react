import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {FiMail} from 'react-icons/fi'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div
            className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#435334] text-white shadow-md'>
            <div>
                <Link to='home' smooth={true} duration={500} className='hover:cursor-pointer'>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '200px',
                            marginLeft: '-50px'
                        }}></img>
                </Link>
                
            </div>
            {/* Menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hambuger */}
            <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
                {
                    !nav
                        ? <FaBars/>
                        : <FaTimes/>
                }
            </div>
            {/* Mobile Menu */}
            <ul
                className={!nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-[#435334] flex flex-col justify-cente' +
                            'r items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li
                        className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
                        <a className='flex justify-between items-center w-full text-[#FAF1E4]' href='https://linkedin.com/in/trong-luu' target='_blank' rel="noreferrer">Linkedin
                            <FaLinkedin size={30}/></a>
                    </li>
                    <li
                        className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
                        <a className='flex justify-between items-center w-full text-[#FAF1E4]' href='https://github.com/qtrong1011' target='_blank' rel='noreferrer'>Github
                            <FaGithub size={30}/></a>
                    </li>
                    <li
                        className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
                        <a className='flex justify-between items-center w-full text-[#FAF1E4]' href='/'>Email
                            <FiMail size={30}/></a>
                    </li>
                    <li
                        className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
                        <a className='flex justify-between items-center w-full text-[#FAF1E4]' href='/'>Resume
                            <HiOutlineUserCircle size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar