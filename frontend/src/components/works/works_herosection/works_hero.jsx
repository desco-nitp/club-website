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
import "./style.css";

const WorkHero = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-full relative -top-[3rem] md:-top-[1.5rem]">
                {/* Mobile Layout */}
                <div className="flex flex-col items-center w-full md:hidden relative">
                    <div className="w-1/2 absolute right-0 rotate-180">
                        <img src={Cross} alt="Cross" className="inset-0 z-10 h-[14rem] sm:h-[18rem]" />
                    </div>
                    <div className="flex flex-col items-center relative z-20 mt-24">
                        <div className="flex items-center">
                            <img src={V1} alt="Vector" className="h-[3.5rem] sm:h-[6rem] rotate-90 mr-4 sm:mr-8" />
                            <div className="text-center">
                                <div className="syne-fon text-[2rem] sm:text-[3rem] text-white font-extrabold text-shadow">
                                Our Works
                                </div>
                            </div>
                            <img src={Star} alt="Star" className="h-[2.5rem] sm:h-[4rem] ml-2 sm:ml-6" />
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex flex-row relative w-full">
                    <div className="w-1/3 relative">
                        <div className="absolute md:left-8 lg:left-10 md:top-[6.5rem] xl:top-[8rem] z-20">
                            <img src={Star} alt="Star" className="md:h-[3.5rem] lg:h-[4rem] xl:h-[6rem]" />
                        </div>
                        <div className="absolute md:left-8 md:top-[11rem] lg:left-10 lg:top-[13rem] xl:top-[18rem] z-20">
                            <img src={V1} alt="Vector" className="md:h-[6rem] lg:h-[7rem] xl:h-[9rem]" />
                        </div>
                        <div className="relative z-0">
                            <img src={Cross} alt="Cross" className="w-full md:h-[24rem] lg:h-[26rem] xl:h-[35rem]" />
                        </div>
                        <div className="absolute hidden md:block md:-right-9 xl:-right-16 md:top-[7rem] xl:top-[10rem] z-20">
                            <img src={V4} alt="Vector" className="md:h-[7rem] lg:h-[8rem] xl:h-[11rem]" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                        <div className="absolute left-[55%] hidden md:block md:top-[8rem] xl:top-[12rem]">
                            <img src={V6} alt="Vector" className="md:h-[2rem] lg:h-[2.5rem] xl:h-[3rem]" />
                        </div>
                        <div>
                            <div className="syne-fon text-[1.5rem] sm:text-6xl md:text-[2.5rem] lg:text-[3.65rem] xl:text-[4.5rem] text-white font-extrabold text-shadow relative z-20">
                                Our Works
                            </div>
                        </div>
                        <div className="absolute left-[39%] hidden md:block md:top-[12rem] lg:top-[13.5rem] xl:top-[18rem] z-0">
                            <img src={V5} alt="Vector" className="md:h-[2.5rem] lg:h-[3rem]" />
                        </div>
                    </div>
                    <div className="hidden md:block w-1/3 relative">
                        <div className="absolute z-10 md:-left-10 xl:-left-16 md:top-[7rem] xl:top-[10rem]">
                            <img src={V4} alt="Vector" className="md:h-[7rem] lg:h-[8rem] xl:h-[11rem]" />
                        </div>
                        <div className="absolute z-20 right-0 sm:right-10 top-[6.5rem] sm:top-28 xl:top-32">
                            <img src={V3} alt="Vector" className="h-[2rem] sm:h-[3.5rem] lg:h-[4rem] xl:h-[7rem]" />
                        </div>
                        <div className="absolute z-20 right-0 sm:right-4 lg:right-2 xl:right-0 top-40 sm:top-52 lg:top-56 xl:top-72">
                            <img src={V2} alt="Vector" className="h-[4rem] sm:h-[6rem] lg:h-[7rem] xl:h-[9rem]" />
                        </div>
                        <div className="relative z-0 w-full">
                            <img src={Circle} alt="Circle" className="w-full h-[18rem] sm:h-[24rem] lg:h-[26rem] xl:h-[35rem]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block relative md:px-[2rem] md:-top-20 xl:px-[3rem] xl:-top-28 w-full">
                <img src={GotImage} alt="" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default WorkHero;
