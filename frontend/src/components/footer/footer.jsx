import React from 'react'
import DescoLogo from "../../assets/images/Desco_logo.webp"
import Linkedin from "../../assets/images/Linkedin.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
const Footer = () => {
  return (
    <div className='footer h-20 flex bg-[#171717] text-white syne-fon justify-evenly items-center pr-14 '  >
        <div className=' lg:w-[20rem] sm:w-[25rem] text-[0.9rem]'>&copy; 2023 DesignCompany. All rights reserved</div>
        <div className=' text-xl h-10 flex'><img src={DescoLogo} alt="" /> <span className='mx-2 p-1'>Design Company</span></div>
        <div className=' flex  '>
            <div><img className='h-14 p-1 mx-3' onClick={() => window.location.href = "https://www.linkedin.com/company/desco-nitp/mycompany/"} src={Linkedin} alt="" /></div>
            <div> <img className='h-14 p-1 mx-3' onClick={()=>{window.location.href="https://www.instagram.com/desco.nitp/"}} src={Instagram} alt="" /> </div>
            <div><img className='h-14 p-1 mx-3' src={Facebook} alt="" /> </div>
        </div>
    </div>
  )
}

export default Footer