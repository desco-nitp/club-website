import React from 'react'
import DescoLogo from "../../assets/images/Desco_logo.webp"
import { Link } from 'react-router-dom'
const NavBar=()=>{
    return <nav className='z-20 h-16 mx-10 absolute top-6  bg-[#FE3D4D] rounded-xl px-10 grid grid-cols-3 items-center'>
        <div className='w-56 h-auto flex items-center gap-5 justify-self-start'>
            <img src={DescoLogo} alt="Desco" className='h-9' />
            <p className='text-white text-xl'>Design Company</p>
        </div>
        <div className="lg:w-[35rem] sm:w-[25rem] h-12 bg-transparent border text-white border-white rounded-full flex justify-around items-center">
            <Link to="/" data-testid="testing">Home</Link>
            <Link to="/works" alt="/">Works</Link>
            <Link to="/events" alt="/">Events</Link>
            <Link to="/team" alt="/">Team</Link>
            <Link to="/" alt="/">Contact Us</Link>
            <Link to="/" alt="/">FAQs</Link>
        </div>
    </nav>
}

export default NavBar