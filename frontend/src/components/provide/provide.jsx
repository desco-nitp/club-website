import React from 'react';
import "../../App.css";
import spheres from './spheres.png';
import Sparkles from './Sparkles.png';
import Card from './cards.jsx';
import Services from './Services.png';

const Provide = () => {
    return (
        <div className="syne-fon">
            <div className="grid grid-cols-1 lg:grid-cols-8 items-center justify-items-center w-full px-4 lg:px-10">
                <div className="flex justify-center mb-8 lg:mb-0 col-span-1 lg:col-span-2">
                    <img src={spheres} alt="Sphere" className="w-30 h-16 lg:w-64 lg:h-32" />
                </div>
                <div className="flex flex-col items-center justify-center mb-4 lg:mb-0 col-span-1 lg:col-span-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl lg:mt-24 font-extrabold z-20 text-center">
                        <span className="inline-block w-full lg:w-auto">We provide design</span>
                        <span className="inline-block w-full lg:w-auto">
                            <img src={Services} alt="Services" className="inline h-24 lg:h-[3.5em]" /> for you
                        </span>
                    </h1>
                </div>
                <div className="flex justify-center col-span-1 lg:col-span-2">
                    <img src={Sparkles} alt="Star" className="w-24 h-24 lg:w-48 lg:h-48 " />
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-xl lg:text-4xl font-semibold">" Vision without action is a daydream</p>
                <p className="text-xl lg:text-4xl font-semibold">and action without vision is a nightmare "</p>
            </div>
            <div className="mt-10">
                <Card />
            </div>
        </div>
    );
};

export default Provide;
