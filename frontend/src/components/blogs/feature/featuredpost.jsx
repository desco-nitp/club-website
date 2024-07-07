import React from "react";
import "../../../App.css"
import circles from "./3circle.png";

import flower from "./flower.png"
import post from "./post.png"
import conCircle from "./conccircle.png"
const Feature=()=>{
    // const postImg="";
    return(
        
           
                
            <div  style={{boxShadow:"10px 10px  black "}} className="  h-max mb-20 lg:mb-0 lg:ml-24 z-20 w-[88%] md:w-[90%] xl:w-[95%]  bg-[#FE3D4D]  p-5 rounded-3xl border-[2.5px] border-black md:px-10" >
                <div className="flex flex-col gap-5 justify-between">
                    <h1 className="syne-fon text-3xl md:text-[2.4rem] font-extrabold "><span className="text-white">Featured</span> posts</h1>
                    <div className=" w-full h-48 md:h-80 mt-2 bg-rose-200 rounded-xl border-[2.3px] border-black " style={{backgroundImage:`url(${post})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                        <img src={circles} alt="" className="h-32 absolute hidden xl:flex ml-[31rem] -mt-14"  />
                        <img src={flower} alt="" className="hidden xl:flex h-16 absolute  mt-[17.8rem] -ml-8"  />
                        {/* <img src={post} alt="" className="object-fill h-full "/> */}
                    </div>
                    <div className="w-full syne-fon h-[10rem] md:h-max mt-2 bg-[#f4f5ee] rounded-xl border-[2.3px] border-black mb-5 p-4  text-ellipsis overflow-hidden text-md md:text-xl md:px-8 text-justify" >
                        <img src={conCircle} alt="" className="h-14 absolute hidden xl:flex mt-[11rem] -ml-14 " />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis voluptates aspernatur, ipsum fugit esse, placeat odit neque ducimus in laboriosam illum corporis incidunt! Nesciunt commodi illo dolorum et quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae dignissimos iure ex quaerat, nesciunt beatae? Eos alias aut ut ipsam nesciunt, qui praesentium .
                    </div>
                    
                
                </div>
                
            </div>
        
    );
}
export default Feature;