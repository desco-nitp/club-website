import React from "react";
import Blogs from "./blogs.webp";
import Sparkles from "./Sparkles.webp";
import Circles from "./circles.webp";

const HeroBlogs = () => {
  return (
    <div className="bg-[#FEB5B5] h-[70vh] pt-48 px-32 font-[Syne] margin-auto flex flex-row justify-center">
      <div className="font-extrabold flex text-center flex-col md:flex-row text-2xl md:text-4xl lg:text-5xl md:place-items-end h-14 md:h-20 lg:h-28 ">
        Read our
        <p className="h-14 md:h-20 lg:h-28 w-max font-extrabold md:hidden text-2xl md:text-4xl lg:text-5xl flex flex-row md:place-items-end margin-auto text-center">
          Blogs
        </p>
      </div>
      <div className=" md:w-56 lg:w-72"> </div>
      <img
      alt={""}
        src={Blogs}
        className="hidden md:block absolute h-1/4 md: lg:h-1/3 right-32 lg:right-[21rem] md:top-[11.5rem] lg:top-40"
      ></img>
      <img
      alt={""}
        src={Circles}
        className="hidden lg:block absolute h-[14%] left-[4rem] top-[16rem] mt-10 md:mt-0"
      ></img>
      <img
      alt={""}
        src={Sparkles}
        className="hidden lg:block absolute h-1/3 right-[4.5rem] top-44"
      ></img>
    </div>
  );
};

export default HeroBlogs;