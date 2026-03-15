'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from '../ui/button';
import Link from 'next/link';
import PostCard from './PostCard';

const Posts = () => {
  const data = useGetQuery('post', '/post') || [];

  return (
    <>
      {data.map(
        (v: { title: string; thumb: string; excerpt: string; id: string }, k: number) => {
          return <PostCard key={k} v={v} />;
        },
      )}
    </>
  );
};

export default Posts;
