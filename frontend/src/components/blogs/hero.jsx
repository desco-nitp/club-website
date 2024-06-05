import React from "react";
import Blogs from "./blogs.webp";
import Sparkles from "./Sparkles.webp";
import Circles from "./circles.webp";

const HeroBlogs = () => {
  return (
    <div className="bg-[#FEB5B5] h-[200vh] pt-48 px-32 font-[Syne] margin-auto flex flex-col md:flex-row justify-center">
      <div className="font-extrabold flex flex-row text-2xl md:text-3xl lg:text-5xl place-items-end h-14 md:h-20 lg:h-28">
        Read our
      </div>
      <div className="h-14 md:h-20 lg:h-28 w-60 lg:w-80">
        <p className="h-14 md:h-20 lg:h-28 font-extrabold lg:hidden text-2xl md:text-3xl lg:text-5xl flex flex-row place-items-end">
          Blogs
        </p>
      </div>
      {/*  */}
      <img
        src={Blogs}
        className="hidden lg:block absolute h-1/3 right-[21rem] top-40"
      ></img>
      <img
        src={Circles}
        className="hidden lg:block absolute h-[14%] left-[4rem] top-[16rem]"
      ></img>
      <img
        src={Sparkles}
        className="hidden lg:block absolute h-1/3 right-[4.5rem] top-44"
      ></img>
    </div>
  );
};

export default HeroBlogs;
