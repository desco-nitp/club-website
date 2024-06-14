import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroBlogs from "../components/blogs/hero";
import Part1 from "../components/blogs/part1";
function BlogsPage() {
  return (
    <main className="bg-[#FEB5B5]  pt-6 ">
      
      <NavBar />
      
      <HeroBlogs />
      
      <Part1 />

      <Footer />
    </main>
  );
}

export default BlogsPage;
