import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroBlogs from "../components/blogs/hero";

function BlogsPage() {
  return (
    <main className="bg-[#FEB5B5] h-[200vh] pt-6 ">
      <NavBar />
      <HeroBlogs />
      <Footer />
    </main>
  );
}

export default BlogsPage;
