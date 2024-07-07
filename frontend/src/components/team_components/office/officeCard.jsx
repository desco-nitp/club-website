import React from "react";
import Instagram from "./Ig.svg";
import Linkedin from "./LinkedIn.svg";
import Star from "./corner.svg";

const OfficeCard = (props) => {
  return (
    <div>
      <div className=" h-[26rem] w-72 bg-[#FE3D4D] relative flex flex-col p-4 pb-8 rounded-[2rem] overflow-hidden m-auto my-0 lg:my-4 hover:opacity-85 md:hover:scale-95 lg:hover:scale-105 transition-all lg:scale-100 md:scale-90 scale-75">
        {/* Absolute  */}
        <div className="absolute top-0 -right-5">
          <img src={Star} alt="" className=" w-4/5" />
        </div>
        {/* Non-Absolute */}
        <div className=" m-auto">
          <img src={props.img} alt={props.altText} />
        </div>
        <div className="flex flex-col m-auto">
          <h1 className=" font-bold text-2xl text-center">{props.name}</h1>
          <h2 className=" font-semibold text-xl text-center">
            {props.designation}
          </h2>
        </div>
        <div className="flex flex-row justify-between px-20">
          <a href={props.ig} target="_blank" rel="noopener noreferrer">
            <img alt="" src={Instagram} />
          </a>
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <img alt="" src={Linkedin} />
          </a>
        </div>
        {/* <div className=" h-[26rem] w-72 bg-[#000000] absolute rounded-[2rem] -bottom-4 -right-4 -z-10"></div> */}
      </div>
    </div>
  );
};

export default OfficeCard;
