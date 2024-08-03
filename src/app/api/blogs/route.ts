import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET requests
export async function GET(request: NextRequest) {
  try {
    // Get the URL and search parameters
    const url = new URL(request.url);
    const limitParam = url.searchParams.get('limit');

    // Parse the limit parameter as a number
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;

    // Use Prisma to find the limited number of blogs
    const blogs = await prisma.blog.findMany({
      take: limit, // Limit the number of results
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// Handle POST requests 
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {title,content, summary} = body;
    const slug = title.toLowerCase().replace(/ /g, '_');
    // console.log(slug)
    
    const newBlog = await prisma.blog.create({
      data: {title,content,summary,slug}
    });
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}

// Handle DELETE requests (if needed)
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    await prisma.blog.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
