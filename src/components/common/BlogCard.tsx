import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

// Define an interface for the props
interface BlogCardProps {
  bId: number;       // Assuming bId is a string, adjust the type if needed
  slug: string;      // Assuming slug is a string, adjust the type if needed
  title: string;     // Assuming title is a string, adjust the type if needed
  summary: string;   // Assuming summary is a string, adjust the type if needed
}

// Type the component with the props interface
const BlogCard: React.FC<BlogCardProps> = ({ bId, slug, title, summary }) => {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle> 
            </CardHeader>
            <CardContent>
                <CardDescription>{summary}</CardDescription>  
            </CardContent>
            <CardFooter>
                <Link href={`/1?blog=${slug}`}>Read more</Link>
            </CardFooter>
        </Card>
    </div>
  )
}

export default BlogCard
