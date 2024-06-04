import React from 'react'
import DescoLogo from "../../assets/images/Desco_logo.webp"
import Linkedin from "../../assets/images/Linkedin.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
const Footer = () => {
  return (
    <div className='footer h-20 flex bg-[#171717] text-white syne-fon justify-evenly items-center sm:pr-14 pr-3 '  >
        <div className='pl-5 w-[9rem] pr-5 text-xs lg:w-[20rem] sm:w-[25rem] sm:text-[0.9rem]'><span>&copy; 2023 DesignCompany. All rights reserved</span></div>
        <div className='sm:w-[20rem] text-xs px-1 mx-2 sm:text-xl h-8 sm:h-10 flex'><img src={DescoLogo} alt="" /> <span className='mx-2 sm:mx-0 sm:p-1'>Design Company</span></div>
        <div className=' flex  '>
            <div><img className=' sm:h-14 h-[2.5rem] p-1 sm:mx-3 mx-1' src={Facebook} alt="" /> </div>
            <div><img className=' sm:h-14 h-[2.5rem] p-1 sm:mx-3 mx-1' onClick={() => window.location.href = "https://www.linkedin.com/company/desco-nitp/mycompany/"} src={Linkedin} alt="" /></div>
            <div> <img className=' sm:h-14 h-[2.5rem] p-1 sm:mx-3 mx-1' onClick={()=>{window.location.href="https://www.instagram.com/desco.nitp/"}} src={Instagram} alt="" /> </div>
        </div>
    </div>
  )
}

export default Footer