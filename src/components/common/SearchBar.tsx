"use client"
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
// import { IoClose } from 'react-icons/io5'
import { X, Search } from 'lucide-react';
import Link from 'next/link';

// Define an interface for the blog post
interface BlogPost {
  id: number;
  title: string;
  slug: string;
}

const SearchBar: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
       
        const response = await axios.get<BlogPost[]>('http://localhost:3000/api/blogs', {
          params: { limit: 5 } // Adjust this based on your API specification
        });
        const data = response.data;
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      const filteredProducts = blogs.filter(blog =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
    
      setSearchResults(filteredProducts.slice(0, 5));
    }, 1000); // 1-second delay

    
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [query, blogs]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <Search onClick={() => setDisplay(true)} />
      <div className={`fixed top-0 left-0 w-screen h h-[100vh] bg-black/70 text-black z-50 ${display ? '' : "hidden"}`}>
        <div className='w-full bg-white py-5'>
          <div className='w-[90%] md:w-4/5 mx-auto max-w-7xl flex justify-between items-center'>
            <div className='w-4/5'>
              <input
                type="search"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black w-full"
                placeholder="Search..."
                value={query}
                onChange={handleSearch}
              />
            </div>
            <X className='text-black' color='black' onClick={() => setDisplay(false)} />
          </div>
        </div>
        {query.length > 0 &&
          <div className='bg bg-white max-h-[80vh] max-w-7xl w-[90%] md:w-4/5 mx-auto p-4 overflow-y-auto'>
            <h3 className='uppercase font-extralight'>Blogs</h3>
            <div className='flex flex-col gap-4'>
              {searchResults.length < 1 &&
                <div className='text-center'><p>NOT FOUND for &quot;{query}&quot;</p></div>
              }
              {searchResults.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={`/${item.id}?blog=${item.slug}`}
                    className='border-b p-4 hover:bg-gray-100 hover:text-blue-800'
                    onClick={() => setDisplay(false)}
                  >
                    <p>{item.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default SearchBar;
