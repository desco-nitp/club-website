import React from "react";
import Rec1 from "./rec1.svg";
import Rec2 from "./rec2.svg";
import TeamCard from "./teamCard";
import info from "./info.json";

const SingleTeam = (props) => {
  return (
    <div className="mt-10">
      <div className="m-auto relative w-1/4">
        <img src={Rec1} />
        <img src={Rec2} className="absolute top-4 left-9" />
        <h1 className="absolute top-7 left-24 text-4xl font-bold -rotate-3 text-white">
          {props.title}
        </h1>
      </div>
      <div className="team grid grid-cols-5 gap-5">
        {info.map((item) => (
          <TeamCard
            key={item.id}
            name={item.name}
            designation={item.designation}
            img={require(`${item.img}`)}
            altText={`Image ${item.id}`}
            ig={item.ig}
            linkedin={item.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleTeam;
