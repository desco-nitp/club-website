import React from 'react';
import "../../App.css"
import spheres from './spheres.png';
import Sparkles from './Sparkles.png';
import Card from './cards.jsx';
import Services from './Services.png';

const Provide = () => {
    return (
      <div className="syne-fon">
        <div className="flex items-center justify-center w-full px-10">
        <img src={spheres} alt="Sphere"/>
        <h1 className="text-lg lg:text-6xl lg:mt-24 w-[50%] font-extrabold z-20 text-center">
        <span className="block">We provide design</span>
        <img src={Services} alt="Services" className="inline h-auto lg:h-[3.5em]" />
      <span >for you</span>
        </h1>
        <img src={Sparkles} alt="Star"/>
        </div>
        <div className="text-center mt-8">
    <p className="text-lg lg:text-4xl font-semibold">" Vision without action is a daydream</p>
    <p className="text-lg lg:text-4xl font-semibold">and action without vision is a nightmare "</p>
  </div >
  <div className="mt-10">
        <Card />
      </div>
      </div>
    );
  };
  
  export default Provide;