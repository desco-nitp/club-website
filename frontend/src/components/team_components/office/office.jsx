import React, { useEffect,useState } from "react";
import OfficeCard from "./officeCard";
import info from "./info.json";
import fetchTeamData from "../../../controller/teams";
const Office = () => {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    async function getData(){
      const d=await fetchTeamData("teams","office");
      setdata(d);
      
    }
    getData()
   
  },[]

  )
  useEffect(()=>{
    // console.log(data);
  },[data]);
  console.log(data.length);
  return (
    <div>
      <div className=" mt-6 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-3 m-auto px-2 md:px-4 lg:px-8">
        {(data.length>0) && data.map((item) => (
          <OfficeCard
            key={item.id}
            name={item.name}
            designation={item.position}
            img={item.imageURL}
            altText={`Image ${item.id}`}
            ig={item.instaID}
            linkedin={item.linkedinID}
          />
        ))}
      </div>
    </div>
  );
};

export default Office;
