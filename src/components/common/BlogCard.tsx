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
  bId: number;       
  slug: string;      
  title: string;    
  summary: string;  
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
                <Link href={`/${bId}?blog=${slug}`} className="border px-4 py-2 rounded-full hover:bg-zinc-700 hover:text-white">Read more</Link>
            </CardFooter>
        </Card>
    </div>
  )
}

export default BlogCard
