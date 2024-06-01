import React from "react";
import NavBar from "../components/navbar/navbar";
import Faq from "../components/faq/faq";
import Pi from "../components/pi/pisection";
import Hero from "../components/herosection/hero";

import GetInTouch from "../components/getInTouch/getInTouch";


import Provide from "../components/provide/provide";

function HomePage() {
  return (
    <main className="bg-[#FEB5B5] h-[500vh] pt-6 ">
      <NavBar />

      <Hero />

      {/* Vision */}

      <Provide />

      <Pi />

      <Faq />

      <GetInTouch />

      {/* footer */}
    </main>
  );
}

export default HomePage;
