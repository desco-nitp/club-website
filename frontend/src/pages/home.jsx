import React,{useEffect} from "react";
import { firestore } from "../firebase";
import {getDocs, collection,doc} from "@firebase/firestore"
// // import env from "react-dotenv";
import NavBar from "../components/navbar/navbar";
import Faq from "../components/faq/faq";
import Pi from "../components/pi/pisection";
import Hero from "../components/herosection/hero";
import Footer from "../components/footer/footer";
import Vision from "../components/vision/vision";
import GetInTouch from "../components/getInTouch/getInTouch";
import Provide from "../components/provide/provide";



function HomePage() {
  const r=collection(firestore,"users");
  // const docRef=doc(firestore,"users","1");
  useEffect(()=>{

    async function main(){

      try{

      const docSnap=await getDocs(r);
      // const docSnap2 = await getDoc(docRef);
      if(docSnap!=null){
        docSnap.forEach((doc)=>{
            console.log(doc.id, " => ", doc.data().name);
        })
      }else{
        console.log("data not exists");
      }
      }catch(e){
        console.log("catch block says:")
        console.log(e);
      }
  }
  main();
  },[]);

  return (
    <main className="bg-[#FEB5B5] h-[578vh] sm:h-[600vh] pt-6 ">
      <NavBar />
      
      <Hero />

      <Vision />

      <Provide />

      <Pi />

      <Faq />

      <GetInTouch />

      <Footer />
    </main>
  );
}

export default HomePage;
