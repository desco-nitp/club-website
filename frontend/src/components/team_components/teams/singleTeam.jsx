import React from "react";
import Rec1 from "./rec1.svg";
import Rec2 from "./rec2.svg";
import TeamCard from "./teamCard";
import info from "./info.json";

const SingleTeam = (props) => {
  const truncateTitle = (title) => {
    return title.length > 16 ? `${title.slice(0, 16)}...` : title;
  };
  const getTitleFontSize = (title) => {
    const length = title.length;
    if (length <= 10) return "text-3xl";
    if (length <= 16) return "text-2xl";
    return "text-lg";
  };
  const truncatedTitle = truncateTitle(props.title);
  const titleFontSizeClass = getTitleFontSize(truncatedTitle);

  return (
    <div className="mt-10">
      <div className="m-auto relative w-1/4">
        <img src={Rec1} alt="" />
        <img src={Rec2} alt="" className="absolute top-4 left-9" />
        <h1
          className={`absolute top-8 left-[4.2rem] font-bold -rotate-3 text-white ${titleFontSizeClass}`}
        >
          {truncatedTitle}
        </h1>
      </div>
      <div className="team grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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
