import React from "react";
import Instagram from "./Ig.svg";
import Linkedin from "./LinkedIn.svg";
// import Star from "./corner.svg";

const TeamCard = (props) => {
  return (
    <div>
      <div className=" h-[16rem]  w-52 md:h-[18rem] md:w-56 lg:h-[22rem] lg:w-64 bg-[#FE3D4D] relative flex flex-col p-3 pb-6 rounded-[1.7rem] overflow-hidden m-auto my-3 hover:opacity-90 hover:scale-105 transition-all">
        {/* Absolute 
        <div className="absolute top-0 -right-5">
          <img src={Star} className=" w-4/5" />
        </div> */}
        {/* Non-Absolute */}
        <div className=" m-auto">
          <img
            src={props.img}
            alt={props.altText}
            className="   m-auto rounded-full h-28 w-28 md:h-32 md:w-32 lg:h-44 lg:w-44 border-[3.0px] border-black "
          />
        </div>
        <div className="flex flex-col m-auto">
          <h1 className=" font-bold text-lg lg:text-xl text-center">
            {props.name}
          </h1>
          <h2 className=" font-semibold text-base lg:text-lg text-center">
            {props.designation}
          </h2>
        </div>
        <div className="flex flex-row justify-between px-8 md:px-12 lg:px-16">
          <a href={props.ig} target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="" className="lg:w-max w-2/3" />
          </a>
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="" className="lg:w-max w-2/3" />
          </a>
        </div>
        {/* <div className=" h-[26rem] w-72 bg-[#000000] absolute rounded-[2rem] -bottom-4 -right-4 -z-10"></div> */}
      </div>
    </div>
  );
};

export default TeamCard;
