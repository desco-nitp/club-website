import React from "react";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Hero from "../components/team_components/hero/hero";
import Office from "../components/team_components/office/office";
import Teams from "../components/team_components/teams/teams";
function TeamPage() {
  return (
    <main className="bg-[#FEB5B5] h-[600vh] pt-6 -z-20">
      <NavBar className="my-3" />
      <Hero />
      <Office />
      <Teams />
    </main>
  );
}

export default TeamPage;
