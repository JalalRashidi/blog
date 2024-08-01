import { Metadata } from "next";
import axios from "axios";
import MaxContainer from "@/components/common/MaxContainer";
import Link from "next/link";

// Define the type for the blog data
type Blog = {
  title: string;
  content: string;
  summary: String;
  slug: String;
};

// Fetch blog data on the server side
async function fetchBlog(id: string): Promise<Blog> {
  const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
  return response.data;
}

// Generate metadata for the blog page
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const blog = await fetchBlog(params.id);
    return {
      title: blog.title,
      description: `Read the blog titled ${blog.title}`,
    };
  } catch {
    return {
      title: "Blog Not Found",
      description: "This blog does not exist.",
    };
  }
}

// Server component to render the blog post
const BlogPage = async ({ params }: { params: { id: string } }) => {
  try {
    const blog = await fetchBlog(params.id);

    return (
      <div>
        <MaxContainer>
          <div className="text-center bg-zinc-700 text-white my-4 p-4 rounded-md">
            <h1 className="text-5xl py-4">{blog.title}</h1>
          </div>
          <article>
            <h1 className="text-3xl">{blog.title}</h1>
            <div className="mt-2">{blog.content}</div>
            <div className="border bg-zinc-50 mt-4 p-2 sm:p-4">
              <h2 className="text-xl font-bold">summary</h2>
              <p>{blog.summary}</p>
            </div>
          </article>
          <div className="flex justify-center my-8">
          <Link href={'/'} className="border px-4 py-2 rounded-full hover:bg-zinc-700 hover:text-white">Find More blog</Link>
          </div>
        </MaxContainer>
      </div>
    );
  } catch (error) {
    return <p>Error: {error.message}</p>;
  }
};

export default BlogPage;
