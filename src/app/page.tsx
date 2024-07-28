//home page

import axios from "axios";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  try {
    // Use axios to fetch data
    const response = await axios.get<Blog[]>("http://localhost:3000/api/blogs");
    return response.data; 
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <div>
      <h1>Blog Posts</h1>
      <div className="grid grid-cols-4 gap-4">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
            <Link className="" href={`/${blog.slug}`}>read more</Link>
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
      </div>
    </div>
  );
}
