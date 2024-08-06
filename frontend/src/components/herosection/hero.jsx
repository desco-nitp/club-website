import React, { useState } from "react";
import {  motion,useMotionValueEvent,useScroll } from "framer-motion"
import Domains from "./domains";
import Circle from "./circle.webp";
import D2 from "./D2.webp";
import Cross from "./cross.webp";

import rou from "./D1.webp";
const Hero=()=>{
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

    return <>
        <div className=" syne-fon ">
            <div className="md:grid md:grid-cols-2  h-[55vh] md:h-[45vh] lg:h-[80vh]">
                <div className=" h-full w-full flex flex-col justify-center px-16">
                    <div className="mt-10 absolute top-8 -left-14">                   
                            <img src={Circle} alt="" data-testid="testing-circle" className=" h-[20rem] md:h-[25rem] lg:h-[33rem] mt-10 md:mt-0"  />
                    </div>
                    <div className="text-[3rem] lg:text-[6rem]  lg:mt-24 w-[50%] font-semibold z-20" >
                        <div className="flex items-center">
                            <div>Design </div>
                            <img src={rou} alt="" className="h-3 ml-10 lg:h-10" />
                        </div>
                         <h1 className="-mt-6 lg:-mt-12">Company</h1>
                    </div>
                    <div className="flex z-20 w-full" >
                        <div className="lg:w-60 w-24"></div>
                        <div className="bg-[#FE3D4D] -rotate-3 lg:-rotate-6 font-sans w-32 lg:w-72 h-10 md:h-14 rounded-2xl flex justify-center items-center text-xl lg:text-[2.16rem] font-[700]">
                            WE DESIGN
                        </div>
                    </div>
                    <div><img src={D2} alt="" className="h-24 ml-[12rem] lg:ml-[17rem]  absolute z-20" /></div>
                    <div className=" mt-16 static ml-10 z-20">
                    <div className="z-20 hover:bg-[#fd6a77] absolute  w-36 h-12  lg:ml-[4rem] flex justify-center items-center bg-[#FF4B5A] rounded-full text-lg font-semibold   ">Explore Now</div>
                    <div className="ml-[0.3rem] lg:ml-[4.3rem] mt-[0.3rem] rounded-full absolute  w-36 h-12 bg-black z-10"></div>
                    </div>
                    
                </div>
                <div  className="lg:flex ml-28 mt-10 hidden">
                    <motion.div animate={{rotate:m}} transition={{repeatType:"loop", duration:"20",repeat:Infinity,ease:"linear",}}>

                        <img src={Cross} alt="" className="h-[32rem] w-auto" />
                    </motion.div>
                    
                </div>
            </div>
            <Domains />
            
        </div>
    </>
}
export default Hero;