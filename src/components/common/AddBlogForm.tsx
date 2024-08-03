"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
  title: z.string().min(4, {
    message: "title must be at least 4 characters.",
  }),
  content: z.string().min(50, {
    message: "content must be at least 50 characters.",
  }),
  summary: z.string().min(20, {
    message: "summary must be at least 20 characters.",
  }),
});

const AddBlogForm: React.FC = () => {

  const [message, setMessage] = useState('');
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit =async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/api/blogs', data);
      setMessage('Blog posted successfully!');
      console.log(response.data);
      toast({
        variant: "sucess",
        description: "Blog posted successfully!",
      })
    } catch (error:any) {
      setMessage('Error posting blog.');
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request.${error?.message}`,

      })
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title *</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter the title of blog"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content *</FormLabel>
              <FormControl>
                <Textarea placeholder="enter your blog content" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary *</FormLabel>
              <FormControl>
                <Textarea placeholder="enter your blog content" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Publish your blog</Button>
      </form>
    </Form>
  );
};

export default AddBlogForm;
