import { firestore } from '../firebase';
import { doc, getDoc } from '@firebase/firestore';

export const fetchBlogData = async () => {
  try {
    const blogDocRef = doc(firestore, 'blogs', 'blog');
    const blogDoc = await getDoc(blogDocRef);

    if (blogDoc.exists()) {
      const blogData = blogDoc.data();
  
      if (Array.isArray(blogData.blog_id)) {
        const blogs = blogData.blog_id;
        const featuredBlog = blogs.find(blog => blog.featured);

        console.log("Blogs:", blogs);
        console.log("Featured Blog:", featuredBlog);

        return { blogs, featuredBlog };
      } else {
        console.error("Unexpected blog data structure:", blogData);
        return { blogs: [], featuredBlog: null };
      }
    } else {
      console.error("No such document!");
      return { blogs: [], featuredBlog: null };
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { blogs: [], featuredBlog: null };
  }
};
