import React from "react";

function Image({ images }) {
    return (
        <div className="flex flex-row items-center justify-center h-full  space-x-4 lg:space-x-6 xl:space-x-8 px-4 py-2 sm:px-6 sm:py-2 lg:px-12 lg:py-3 xl:px-16 xl:py-4">
            <div className="bg-[#D9D9D9] w-1/3 sm:w-1/5 h-4/5 rounded-xl">
                <img src={images.imgUrl1} alt="" className="rounded-xl" />
            </div>
            <div className="bg-[#D9D9D9] w-1/3 sm:w-1/5 h-4/5 rounded-xl">
                <img src={images.imgUrl2} alt="" className="rounded-xl" />
            </div>
            <div className="bg-[#D9D9D9] w-1/3 sm:w-1/5 h-4/5 rounded-xl">
                <img src={images.imgUrl3} alt="" className="rounded-xl" />
            </div>
            <div className="hidden sm:flex bg-[#D9D9D9] ww-1/3 sm:w-1/5 h-4/5 rounded-xl">
                <img src={images.imgUrl4} alt="" className="rounded-xl" />
            </div>
            <div className="hidden sm:flex bg-[#D9D9D9] w-1/3 sm:w-1/5 h-4/5 rounded-xl">
                <img src={images.imgUrl5} alt="" className="h-full object-cover rounded-xl" />
            </div>
        </div>
    );
}

export default Image;
