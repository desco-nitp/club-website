import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroBlogs from "../components/blogs/hero";
import Latest from '../components/blogs/latest'
import TempImage from '../components/blogs/temp.jpg'; 
function BlogsPage() {
  let data = [
    {src: TempImage, title: "1lorem ipsum"},
    {src: TempImage, title: "2lorem ipsum"},
    {src: TempImage, title: "3orem ipsum"},
    {src: TempImage, title: "4orem ipsum"},
    {src: TempImage, title: "5lorem ipsum"},
    {src: TempImage, title: "6lorem ipsum"},
    {src: TempImage, title: "7lorem ipsum"},
    {src: TempImage, title: "8lorem ipsum"},
    {src: TempImage, title: "9lorem ipsum"}
  ];
  return (
    <>
        <main className="bg-[#FEB5B5] h-[200vh] pt-6 ">
      <NavBar />
      <HeroBlogs />
      <Latest data={data}/>
      
    </main>
    <Footer/>
    </>
    
  );
}

export default BlogsPage;
