'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Link from 'next/link';
import PostCard from './post/PostCard';

const BlogPosts = () => {
  const data = useGetQuery('post', '/post') || [];

  return (
    <div className="cont  pt-6 pb-10 ">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-1">
          <div className="border-b-2 border-b-primary w-20"></div>{' '}
          <p>UNA Klodin Blog</p>{' '}
          <div className="border-2 border-b-primary w-20"></div>
        </div>
        <h3>Our Blog</h3>
      </div>

      <div className="flex-col sm:flex-row flex gap-10">
        {data
          .slice(0, 3)
          .map(
            (
              v: { title: string; thumb: string; excerpt: string; id: string },
              k: number,
            ) => {
              return <PostCard key={k} v={v} />;
            },
          )}
      </div>

      <Link
        href="/blog"
        className="mt-12 mx-auto block w-max text-primary  border-b border-b-primary"
      >
        <h6>View All</h6>
      </Link>
    </div>
  );
};

export default BlogPosts;
