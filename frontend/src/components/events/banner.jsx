import React from "react";
import pastevents from "./pastevents.png";
import Sparkles from "./Sparkles.png";

function EventBanner({ imageCount }) {
  return (
    <div className="mt-32 relative bg-[#FE3D4D] py-12 px-4 mb-20 mx-10 md:mb-32 md:mx-16 rounded-2xl border-[3px] border-black border-b-[10px] border-r-[10px] flex flex-col items-center">
         <div className="absolute top-[-84px] right-[-32px]">
        <img
          src={Sparkles}
          alt="Sparkles"
          className="mt-0 ml-0 w-12 h-12 md:w-32 md:h-32 z-10"
        />
      </div>
         <div className="mt-8">
        <img
        src={pastevents}
        alt="Past Events"
        className="absolute top-0 left-52 transform -translate-x-1/2 -translate-y-1/2 mt-4 ml-4 w-12 h-12 md:w-8/12 md:h-48 z-10"
      />
        </div>
      {Array.from({ length: imageCount }).map((_, index) => (
        <div key={index} className="h-80 w-11/12 bg-gray-300 my-4 flex items-center justify-center rounded-xl">
          <div className="h-full w-11/12 bg-gray-300 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
}

export default EventBanner;
