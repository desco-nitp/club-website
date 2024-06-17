import React from "react";
import OfficeCard from "./officeCard";
import info from "./info.json";

const Office = () => {
  return (
    <div>
      <div className=" grid grid-cols-4 gap-4 m-auto">
        {info.map((item) => (
          <OfficeCard
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

export default Office;
