'use client';

import useGetQuery from '@/state/query/useGetQuery';
import PostCard from './PostCard';

const Posts = () => {
  const data = useGetQuery('post', '/v1/posts') || [];

  return (
    <>
      {data
        .sort(
          (a: { createdAt: string }, b: { createdAt: string }) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map(
          (
            v: { title: string; thumb: string; excerpt: string; id: string },
            k: number,
          ) => {
            return <PostCard key={k} v={v} />;
          },
        )}
    </>
  );
};

export default Posts;
