import React from "react";
import Circle from "./Circle.webp";
import Cross from "./Cross.webp";
import Star from "./Star.png";
import V1 from "./V1.webp";
import V2 from "./V2.webp";
import V3 from "./V3.webp";
import V4 from "./V4.webp";
import V5 from "./V5.webp";
import V6 from "./V6.webp";
import GotImage from "./GotaProjectImage.webp";
import "./style.css"

const WorkHero = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row relative -top-[1.5rem] ">
                <div className="w-1/3 relative">
                    <div className="absolute left-4 sm:left-8 lg:left-10 top-[5.5rem] sm:top-[6.5rem] xl:top-[8rem] z-20">
                        <img src={Star} alt="Star" className="h-[2rem] sm:h-[3.5rem] lg:h-[4rem] xl:h-[6rem]" />
                    </div>
                    <div className="absolute left-4 sm:left-8 top-[8.5rem] sm:top-[11rem] lg:left-10 lg:top-[13rem] xl:top-[18rem] z-20">
                        <img src={V1} alt="Vector" className="h-[4rem] sm:h-[6rem] lg:h-[8rem] xl:h-[11rem]" />
                    </div>
                    <div className="relative z-0 ">
                        <img src={Cross} alt="Cross" className=" h-[18rem] sm:h-[24rem] lg:h-[28rem] xl:h-[38rem]" />
                    </div>
                    <div className="absolute -right-3 sm:-right-9 xl:-right-16 top-[7rem] sm:top-[9rem] xl:top-[12rem] z-20">
                        <img src={V4} alt="Vector" className="h-[3rem] sm:h-[5rem] lg:h-[8rem] xl:h-[11rem]"/>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center">   
                    <div className="absolute left-[55%] top-[7rem] sm:top-[9rem] lg:top-[10rem] xl:top-[14rem]">
                        <img src={V6} alt="Vector" className="h-[1rem] sm:h-[1.5rem] lg:h-[2rem] xl:h-[3rem]"/>
                    </div>
                    <div>
                        <div className="syne-fon text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] text-white font-extrabold  text-shadow  relative z-20">
                            Our Works
                        </div>
                    </div>
                    
                    <div className="absolute left-[39%] top-[9.3rem] sm:top-[12.5rem] lg:top-[14.5rem] xl:top-[19.5rem] z-0">
                        <img src={V5} alt="Vector" className="h-[1.5rem] sm:h-[2rem] xl:h-[3rem]"/>
                    </div>
                </div>
                <div className="w-1/3 relative">
                    <div className="absolute z-10 -left-4 sm:-left-10 xl:-left-16 top-[7rem] sm:top-[9rem] xl:top-[12rem]">
                        <img src={V4} alt="Vector" className="h-[3rem] sm:h-[5rem] lg:h-[8rem] xl:h-[11rem]"/>
                    </div>
                    <div className="absolute z-20 right-6 sm:right-10 top-[6.5rem] sm:top-28 xl:top-32">
                        <img src={V3} alt="Vector" className="h-[2rem] sm:h-[3.5rem] lg:h-[5rem] xl:h-[7rem]"/>
                    </div>
                    <div className="absolute z-20 right-2 sm:right-4 lg:right-2 xl:right-0 top-40 sm:top-52 lg:top-56 xl:top-72">
                        <img src={V2} alt="Vector" className="h-[4rem] sm:h-[6rem] lg:h-[8rem] xl:h-[10rem]"/>
                    </div>
                    <div className="relative z-0  lg:-right-14 xl:-right-5 lg:top-4 xl:top-2 ">
                        <img src={Circle} alt="Circle" className="h-[18rem] sm:h-[24rem] lg:h-[26rem] xl:h-[35rem]"/>
                    </div>
                </div>
            </div>
            <div className="relative px-[1.5rem] -top-16 sm:-top-20 xl:px-[3rem] xl:-top-28">
                <img
                src={GotImage}
                alt="">   
                </img>
            </div>
        </div>
    );
};

export default WorkHero;