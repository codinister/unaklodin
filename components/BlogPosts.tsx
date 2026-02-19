'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Link from 'next/link';

const BlogPosts = () => {
  const data = useGetQuery('post', '/post') || [];

  return (
    <div className="container mx-auto pt-6 pb-10  px-6 sm:px-0">

      <div className="text-center mb-10">
        <div className='flex justify-center items-center gap-1'>
          <div className='border-b-2 border-b-primary w-20'></div> <p>UNA Klodin Blog</p> <div className='border-2 border-b-primary w-20'></div>
        </div>
        <h3>Our Blog</h3>
        </div>

        <div className="flex-col sm:flex-row flex gap-6">
          {data
            .slice(0, 3)
            .map(
              (
                v: { title: string; thumb: string; excerpt: string },
                k: number,
              ) => {
                return (
                  <div key={k} className="flex-1">
                    <div
                      className="p-40 sm:p-0 h-55 rounded-2xl mb-6"
                      style={{
                        backgroundImage: `url(${v.thumb})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                      }}
                    ></div>
                    <div className="bg-white">
                      <h6>{v.title}</h6>
                      <p className="my-6">{v.excerpt}</p>
                      <Link href="">
                        <Button>Read more</Button>
                      </Link>
                    </div>
                  </div>
                );
              },
            )}
        </div>
      
    </div>
  );
};

export default BlogPosts;
