import React, { useEffect } from 'react';
import './cards.css';
import VanillaTilt from 'vanilla-tilt';


const Card = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  return (
    <div className="container syne-fon flex justify-center items-center flex-wrap z-10 mx-auto mt-10">
      <div class="card " id="card1">
  <div class="content">
    <h2>01</h2> 
    <h3 className="font-bold text-4xl text-black-500">Graphic Design 
    </h3>
    <p  className='font-medium text-lg mt-2'>We create visual concepts, for applications such as advertisements, brochures, magazines and reports</p>
  </div>
</div>

<div class="card" id="card2">
  <div class="content">
    <h2>02</h2>
    <h3 className="font-bold text-4xl text-white">Digital Art</h3>
    <p className='font-medium text-white text-lg mt-2'>We combine technology and imagination to create media like animation, interactive elements, or 2-D or 3-D models</p>
  </div>
</div>

<div class="card" id="card3">
  <div class="content">
    <h2>03</h2>
    <h3 className="font-bold text-4xl text-black-500">UI/UX</h3>
    <p  className='font-medium text-lg mt-2'>We collaborate and create user interface for apps, websites or other interactive media</p>
  </div>
</div>
</div>
  );
};

export default Card;