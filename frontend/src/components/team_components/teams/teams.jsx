import React from "react";
import SingleTeam from "./singleTeam";

const Teams = () => {
  return (
    <div className="pt-8">
      <SingleTeam title="UI/UX" />
      <SingleTeam title="Graphics" />
      <SingleTeam title="Digital Art" />
      <SingleTeam title="VFX" />
      <SingleTeam title="Photography & Videography" />
      <SingleTeam title="Creative Writing" />
      <SingleTeam title="Influencers" />
      <SingleTeam title="Public Relation" />
    </div>
  );
};

export default Teams;
