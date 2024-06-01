import React from "react";
import NavBar from "../components/navbar/navbar";
import Faq from "../components/faq/faq";
import Pi from "../components/pi/pisection";
import Hero from "../components/herosection/hero";
import Footer from "../components/footer/footer";
import Vision from "../components/vision/vision";
function HomePage() {
  return (
    <main className="bg-[#FEB5B5] h-[500vh] pt-6">
      <NavBar />

      <Hero />

      {/* Vision */}

      {/* provide */}

      {/* <Pi /> */}

      {/* <Faq /> */}

      {/* get in touch */}
      <Vision/>

      <Footer />
    </main>
  );
}

export default HomePage;
