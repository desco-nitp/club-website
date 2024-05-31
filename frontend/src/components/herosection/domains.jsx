import React from 'react'
import star from "./star.webp";

import {motion} from "framer-motion";
function Domains() {
  return (
    <div className=" mt-10 lg:mt-40 w-[99.5%] h-20 bg-gradient-to-r from-[#FE3D4D] to-[#FEB5B5] -rotate-3">
                <motion.div>
                <ul className="flex justify-around items-center text-3xl lg:text-[3rem] align-middle">
                    <li>Graphics</li>
                    <li><img src={star} alt=""  className="lg:h-7 h-3"/></li>
                    <li>Digital</li>
                    <li><img src={star} alt=""  className="lg:h-7 h-3"/></li>
                    <li>UI/UX</li>
                    <li><img src={star} alt=""  className="lg:h-7 h-3"/></li>
                    <li>3D</li>
                    <li><img src={star} alt=""  className="lg:h-7 h-3"/></li>
                </ul>
                </motion.div>
            </div>
  )
}

export default Domains