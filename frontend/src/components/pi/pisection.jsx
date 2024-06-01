import React from "react";
import RajanSir from "../../assets/images/pistar.webp"
import Star from "./stars.webp"
import "../../App.css"
const Pi=()=>{
    return (
        <>
            <div className="mt-16  w-[100%]  syne-fon static" >
                <div className="absolute lg:right-20  right-3 -mt-10">
                    <img src={Star} alt="stars" className="lg:h-32 h-20 w-auto   " />
                </div>
                <div className="bg-[#F06A75] mx-auto  px-5 md:px-16 py-8 w-[85%] border-[2.4px] border-black rounded-[2.5rem]">

                    <div className="flex md:flex-row flex-col items-center lg-justify-start">

                        <img src={RajanSir} alt="Rajan Sir" className="lg:h-28 lg:w-28 h-32 w-32 "  />
                        <div className=" flex flex-col justify-center pl-10 ">
                            <h1 className="text-white text-2xl lg:text-4xl  font-semibold " >Rajan Agarhari</h1>
                            <h1 className="text-white text-lg lg:text-lg mt-1">PI, Design Company NITP</h1>
                        </div>
                    </div>
                    <div className="bg-white mt-5 border-[2.0px] border-black rounded-3xl px-5 lg:px-20  py-5 text-center lg:text-2xl sm:text-lg">
                    Meet<span className="font-medium"> Dr. Rajan Agrahari</span>, assistant professor in ECE department. He is the <span className="font-medium">Professor Incharge </span>of the club. A young and enthusiastic personality, who have achieved remarkable feats in his field of research.
                    </div>
                </div>
            </div>
        </>
    );
}
export default Pi;