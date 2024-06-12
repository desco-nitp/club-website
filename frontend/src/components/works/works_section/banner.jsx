import React from "react";
import V1 from "./V1.webp";
import V2 from "./V2.webp";
import Arrow from "./Arrow.webp";
import Image from "./image";

function Banner({ title, detail, images }){
    return (
        <div className="bg-white relative p-2 sm:p-4 mb-20 mx-10 md:mb-32 md:mx-16 h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 rounded-2xl border-[3px] border-black border-b-[6px] border-r-[6px]">
            <div className=" bg-[#282828] text-white p-2 absolute -top-6 left-8 sm:-top-8 lg:-top-10 sm:left-12 h-9 w-32 sm:h-12 sm:w-44 lg:h-16 lg:w-52 -rotate-6 rounded-2xl flex items-center justify-center">
                <div className="bowlby-one text-sm sm:text-lg lg:text-2xl text-bold">{title}</div>
            </div>
            <Image images={images} />
            <img src={V2} alt="V2" className="absolute -bottom-2 -left-2 h-10 sm:h-16 md:h-20 lg:-bottom-6 lg:-left-6 lg:h-24" />
            <div className="bg-[#FE3D4D] p-2 absolute -bottom-8 -right-4 -rotate-6 h-9 w-32 sm:h-12 sm:w-44 lg:h-16 lg:w-56 rounded-xl border-[3px] border-black flex flex-row items-center justify-center">
                <div className=" text-[0.7rem] sm:text-sm lg:text-lg p-2">{detail}</div>
                <div className="p-2">
                    <img src={Arrow} alt="Arrow" className=" w-8 sm:w-14"/>
                </div>
            </div>
            <img src={V1} alt="V1" className="absolute w-14 sm:w-16 md:w-20 lg:w-28 top-0 -right-2" />
        </div>
    );
}
export default Banner;
