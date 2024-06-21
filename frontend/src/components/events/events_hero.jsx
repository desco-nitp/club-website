import React from "react";
import Ellipse from "./Ellipse.png";
import Ellipse2 from "./Ellipse2.png";
import Circle from "./Circle.png";
import Ellipse3 from "./Ellipse3.png";
import Cross from "./Cross.png";
import Eventstext from "./Eventstext.png";
import Sparkle from "./Sparkle.png";
import sphere1 from "./sphere1.png";
import sphere2 from "./sphere2.png";

const Events = () => {
    return (
        <div className="flex flex-col mt-14 md:mt-0">
            <div className="flex flex-row relative -top-[1.5rem] ">
                <div className="w-1/3 relative">
                    <div className="absolute left-4 top-[3.5rem] sm:left-8 lg:left-10 top-[6.5rem] sm:top-[6.5rem] xl:top-[8rem] z-20">
                        <img src={Ellipse} alt="Ellipse" className="h-[2rem] sm:h-[3.5rem] lg:h-[4rem] xl:h-[6rem]" />
                    </div>
                    <div className="absolute left-4 top-[7.5rem] sm:left-8 top-[8.5rem] sm:top-[11rem] lg:left-10 lg:top-[13rem] xl:top-[18rem] z-20">
                        <img src={Ellipse2} alt="Ellipse2" className="h-[2rem] sm:h-[3.5rem] lg:h-[4rem] xl:h-[6rem]" />
                    </div>
                    <div className="relative z-0 ">
                        <img src={Circle} alt="Circle" className=" h-[18rem] sm:h-[24rem] lg:h-[28rem] xl:h-[38rem] " />
                    </div>
                    <div className="absolute left-4 sm:left-8 top-[12rem] sm:top-[18rem] lg:left-10 lg:top-[23rem] xl:top-[30rem] z-20">
                        <img src={sphere1} alt="sphere1" className="h-[3rem] sm:h-[3.5rem] lg:h-[5rem] xl:h-[8rem]" />
                    </div>
    
                </div>
                <div className="flex flex-col items-center justify-center mb-4 lg:mb-0 col-span-1 lg:col-span-4">
                <h1 className="syne-fon text-2xl md:text-4xl lg:text-5xl lg:mt-24 font-extrabold z-20 text-center">
                <span className="inline-block w-full lg:w-auto relative">
                            <div className="inline-block relative">
                                <img src={Sparkle} alt="Sparkle" className="absolute top-[-1.0rem] left-[5.5rem] sm:left-[6rem] md:left-[10rem] lg:left-[12rem] h-10 lg:h-14" /> {/* Adjust the position and size as needed */}
                                Great 
                                <img src={Eventstext} alt="Events" className="inline h-16 lg:h-[2.5em]" />
                                for
                            </div>
                        </span>
                        <span className="inline-block w-full lg:w-auto">great experiences</span>
                        
                    </h1>
                </div>
                <div className="w-1/3 relative">
                    <div className="absolute z-20 right-6 top-[3.5rem] sm:right-10 sm:top-[6.5rem] lg:right-12 top-[5.5rem] xl:top-[8rem]">
                        <img src={Ellipse} alt="Vector" className="h-[2rem] sm:h-[3.5rem] lg:h-[5rem] xl:h-[7rem]"/>
                    </div>
                    <div className="absolute z-20 right-6 top-[7.5rem] sm:right-10 top-[8.5rem] sm:top-[11rem] lg:top-[13rem] xl:top-[18rem]">
                        <img src={Ellipse3} alt="Vector" className="h-[2rem] sm:h-[3.5rem] lg:h-[5rem] xl:h-[7rem]"/>
                    </div>
                    <div className="relative z-0  lg:-right-14 xl:-right-5 lg:top-4 xl:top-2 ">
                        <img src={Cross} alt="Circle" className="h-[18rem] sm:h-[24rem] lg:h-[26rem] xl:h-[35rem]"/>
                    </div>
                    <div className="absolute z-20 right-6 sm:right-10 top-[12rem] sm:top-[17rem] lg:top-[21rem] xl:top-[28rem]">
                        <img src={sphere2} alt="Vector" className="h-[4rem] sm:h-[5.5rem] lg:h-[8rem] xl:h-[11rem]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;