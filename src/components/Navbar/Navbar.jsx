import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='h-[90px] w-screen flex justify-evenly gap-10 items-center bg-black  md:justify-between px-4 md:px-0 md:shadow-sm shadow-gray-500'>
                <div className='h-[90px] w-[400px]  flex items-center justify-center '>
                    <h1 className='text-2xl md:text-3xl font-bold text-white flex justify-center items-center gap-2 cursor-pointer'><p className='text-4xl md:text-5xl font-bold text-blue-500'><i className="fa-brands fa-github"></i></p>GitFinder</h1>
                </div>

                <div className='h-[90px] w-[400px]  flex items-center justify-center gap-4 md:gap-20'>
                    <Link to='/' className='  text-[18px] font-bold text-white'>Home</Link>
                    <button className='h-[40px]  w-[100px] md:h-[45px] md:w-[130px] bg-gradient-to-b from-blue-500 to-purple-600 text-white text-lg md:text-[20px] font-bold rounded-[10px] flex justify-center items-center gap-2 shadow-sm shadow-blue-500 hover:bg-blue-500 hover:text-blue-100 cursor-pointer'><i className="fa-solid fa-right-to-bracket"></i>LogIn</button>

                </div>
            </div>
        </>
    )
}

export default Navbar
