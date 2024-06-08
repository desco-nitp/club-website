// import React from 'react'
import React, { useState } from "react";
import {  motion,useMotionValueEvent,useScroll } from "framer-motion"
// import Domains from "./domains";
import Circle from "./circle.webp";
import D2 from "./D2.webp";
import Cross from "./cross.webp";
import vector from "./Vector.png";
import left from "./left.png";
import right from "./right.png";
import rou from "./D1.webp";
const Hero = () => {
    const {scrollY}=useScroll();
    const [m,setm]=useState(360);
    const [s,sets]=useState(0);
    useMotionValueEvent(scrollY,"change",(lat)=>{
        if(lat>=s){
            setm(-360);
        }else{
            setm(360);
        }
        sets(lat);
    });
  return (
    <div className=' h-[80vh] '>
        {/* animation from home page */}
        <div >
            <div className=" syne-fon">
            <div className="md:grid md:grid-cols-2  h-[55vh] md:h-[45vh] lg:h-[80vh]">
                <div className=" h-full w-full flex flex-col justify-center px-16">
                    <div className="absolute top-8 -left-14">                   
                            <img src={Circle} alt="" className="h-[20rem] md:h-[25rem] lg:h-[33rem] "  />
                    </div>
                    <div className="text-[3rem] lg:text-[6rem]  lg:mt-24 w-[50%] font-semibold z-20" >
                        
                         
                    </div>
                    <div className="flex z-20 w-full" >
                        <div className="lg:w-60 w-24"></div>
                        
                    </div>
                    
                    <div className=" mt-16 static ml-10 z-20">
                    
                    
                    </div>
                    
                </div>
                <div  className="lg:flex ml-28 mt-10 hidden">
                    <motion.div animate={{rotate:m}} transition={{repeatType:"loop", duration:"20",repeat:Infinity,ease:"linear",}}>

                        <img src={Cross} alt="" className="h-[32rem] w-auto" />
                    </motion.div>
                    
                </div>
            </div>
            
            
            </div>
        </div>
        <div className="z-30 absolute syne-fon top-24 sm:h-[52vh]  w-[100%] flex flex-row"> 
            <div className="flex justify-center items-center  w-[25%]"><img className="h-14 sm:h-28" src={left} alt="" /> </div>
            <div className=" w-[50%] flex flex-col items-center h-[100%] justify-center "> 
                <div className="pr-0 sm:pr-20">
                    <h1 className="syne-fon text-2xl sm:text-6xl font-extrabold">This is our </h1>
                    <div>
                    <img src={vector} alt="" className="absolute ml-[2vh] sm:ml-[22vh] mt-6 sm:mt-[13vh] h-14 sm:h-32"/>

                    </div>
                </div>
                {/* margin-left: 30vh;
                margin-top: 16vh; */}
                <div className="w-[auto] px-7 sm:px-14 sm:py-2 rounded-3xl text-white bg-[#282828] my-2 sm:my-4  ml-12 sm:ml-52 transform rotate-351" style={{"transform": "rotate(355deg)"}}>
                
                <h1 className="bowlby-one text-xl sm:text-6xl font-extrabold tracking-wide leading-relaxed">TEAM </h1>

                </div>
            </div>
            <div className=" flex justify-center items-center  w-[25%]"> <img className=" h-20 sm:h-48" src={right} alt="" /></div>
        </div>

    </div>
  )
}

export default Hero