import { NextResponse,NextRequest } from "next/server";
const GET= ()=>{
    const blog = [
        {
          id: 1,
          title: "Introduction to Web Development",
          summary: "Learn the basics of web development.",
          content: "Web development is the process of creating websites and applications for the internet. It involves using technologies like HTML, CSS, and JavaScript to build the structure, design, and functionality of web pages.",
        },
        {
          id: 2,
          title: "Understanding JavaScript Closures",
          summary: "An in-depth look at closures in JavaScript.",
          content: "Closures are a fundamental concept in JavaScript that allow functions to access variables from an outer function even after the outer function has completed. This is a powerful feature that can be used to create private variables and more.",
        },
        {
          id: 3,
          title: "Mastering CSS Flexbox",
          summary: "A guide to using Flexbox for layout design.",
          content: "CSS Flexbox is a layout model that provides an efficient way to arrange items within a container. It allows for responsive design by distributing space along a single axis, either horizontally or vertically, and is great for building complex layouts.",
        },
        {
          id: 4,
          title: "Building RESTful APIs with Node.js",
          summary: "Learn how to create RESTful APIs using Node.js.",
          content: "RESTful APIs are a popular way to enable communication between clients and servers. With Node.js, you can build scalable and efficient APIs using frameworks like Express to handle HTTP requests and manage routes.",
        },
        {
          id: 5,
          title: "A Deep Dive into React Hooks",
          summary: "Explore the power of hooks in React development.",
          content: "React Hooks are functions that let you use state and lifecycle features within functional components. Hooks like `useState` and `useEffect` simplify component logic and make code more readable and reusable.",
        },
        {
          id: 6,
          title: "Getting Started with TypeScript",
          summary: "An introduction to TypeScript for JavaScript developers.",
          content: "TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors during development and makes code more robust. TypeScript can be integrated into existing JavaScript projects to enhance maintainability.",
        },
        {
          id: 7,
          title: "Exploring GraphQL for Modern APIs",
          summary: "Understand how GraphQL can improve API development.",
          content: "GraphQL is a query language for APIs that allows clients to request only the data they need. It provides more flexibility than traditional REST APIs and can lead to more efficient data fetching, reducing over-fetching and under-fetching issues.",
        },
        {
          id: 8,
          title: "Implementing Authentication in Web Apps",
          summary: "Learn various methods of adding authentication to your web applications.",
          content: "Authentication is a crucial aspect of web security. Methods like JWT (JSON Web Tokens), OAuth, and session-based authentication can be used to verify user identities and protect sensitive data in web applications.",
        },
        {
          id: 9,
          title: "Building Responsive Websites with Tailwind CSS",
          summary: "Utilize Tailwind CSS to create responsive designs.",
          content: "Tailwind CSS is a utility-first CSS framework that enables developers to build responsive websites quickly. Its modular design allows for customization and flexibility, making it easy to adapt designs for different screen sizes.",
        },
        {
          id: 10,
          title: "Deploying Web Applications with Docker",
          summary: "Learn how to containerize and deploy web applications using Docker.",
          content: "Docker is a platform that allows you to automate the deployment of applications inside lightweight containers. These containers ensure consistency across different environments, making deployment more reliable and efficient.",
        },
      ];
      
    return NextResponse.json({"message":"hello world"})
}
export {GET};