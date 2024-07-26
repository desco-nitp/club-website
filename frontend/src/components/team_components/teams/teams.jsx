import React from "react";
import SingleTeam from "./singleTeam";
import {useState,useEffect} from "react"
import fetchTeamData from "../../../controller/teams";
const Teams = () => {
  const [UiUxData,setUiUxData]=useState([]);
  const [DigitalArtData,setDigitalArtData]=useState([]);
  const [CreativeWritingData,setCreativeWritingData]=useState([]);
  const [GraphicsData,setGraphicsData]=useState([]);
  const [VFXData,setVFXData]=useState([]);
  const [PhotographyNVideographyData,setPhotographynVideoGraphyData]=useState([]);
  const [PRData,setPRData]=useState([]);
  useEffect(()=>{
    async function getData(){
      const uiux=await fetchTeamData("teams","ui_ux");
      const digital_art=await fetchTeamData("teams","digitalArt");
      const creativewriting=await fetchTeamData("teams","creative_writing_social_media");
      const graphics=await fetchTeamData("teams","graphics");
      const vfx=await fetchTeamData("teams","motion");
      const photography= await fetchTeamData("teams","photography_videography");
      const PR=await fetchTeamData("teams","PR");
      console.log(digital_art);
      setUiUxData(uiux);
      setCreativeWritingData(creativewriting);
      setDigitalArtData(digital_art);
      setGraphicsData(graphics);
      setPRData(PR);
      setPhotographynVideoGraphyData(photography);
      setVFXData(vfx);
    }
    getData()
   
  },[]

  )
  useEffect(()=>{
    console.log(DigitalArtData);
  },[DigitalArtData]);
  // console.log(UiUxData.length);
  return (
    <div className="pt-8">
      {UiUxData.length>0 && <SingleTeam title="UI/UX" data={UiUxData}/>}
      {GraphicsData.length>0 && <SingleTeam title="Graphics" data={GraphicsData} /> }
      {DigitalArtData.length>0 && <SingleTeam title="Digital Art" data={DigitalArtData} /> }
      {VFXData.length>0 && <SingleTeam title="VFX" data={VFXData} /> }
      {PhotographyNVideographyData.length>0 && <SingleTeam title="Photography & Videography" data={PhotographyNVideographyData} /> }
      {CreativeWritingData.length>0 && <SingleTeam title="Creative Writing" data={CreativeWritingData} /> }
      {/* <SingleTeam title="Influencers" /> */}
      {PRData.length>0 && <SingleTeam title="Public Relation" data={PRData} /> }
    </div>
  );
};

export default Teams;
