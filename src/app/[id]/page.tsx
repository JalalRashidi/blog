import { Metadata } from 'next';
import axios from 'axios';
import MaxContainer from '@/components/common/MaxContainer';

// Define the type for the blog data
type Blog = {
  title: string;
  content: string;
  slug:String;
};

// Fetch blog data on the server side
async function fetchBlog(id: string): Promise<Blog> {
  const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
  return response.data;
}

// Generate metadata for the blog page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const blog = await fetchBlog(params.id);
    return {
      title: blog.title,
      description: `Read the blog titled ${blog.title}`,
    };
  } catch {
    return {
      title: 'Blog Not Found',
      description: 'This blog does not exist.',
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
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        {/* Render other blog details as needed */}
        </MaxContainer>
      </div>
    );
  } catch (error) {
    return <p>Error: {error.message}</p>;
  }
};

export default BlogPage;
