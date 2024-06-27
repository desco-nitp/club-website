import React from "react";
import OfficeCard from "./officeCard";
import info from "./info.json";

const Office = () => {
  return (
    <div>
      <div className=" mt-6 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-3 m-auto px-2 md:px-4 lg:px-8">
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
