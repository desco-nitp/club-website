import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroBlogs from "../components/blogs/hero";
import Latest from '../components/blogs/latest';
import Part1 from "../components/blogs/part1";
import { fetchBlogData } from "../controller/blogs"; // Adjust the path to your blogs controller

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      const { blogs, featuredBlog } = await fetchBlogData();
      setBlogs(blogs);
      setFeaturedBlog(featuredBlog);
    };

    getBlogs();
  }, []);

  return (
    <main className="bg-[#FEB5B5] h-[280vh] pt-6">
      <NavBar />
      <HeroBlogs />
      <Part1 featuredBlog={featuredBlog} />
      <Latest data={blogs} />
      <Footer />
    </main>
  );
}

export default BlogsPage;
