'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

const PostCard = ({
  v,
}: {
  v: {
    thumb: string;
    title: string;
    excerpt: string;
    id: string;
  };
}) => {
  return (
    <div className="sm:basis-82 grow   mb-6">
      <Link href={`/post/${v.id}`}>
        <div
          className="py-40 sm:py-0 h-55 mb-6"
          style={{
            backgroundImage: `url(${v.thumb})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div className="bg-white">
          <h6>{v.title}</h6>
          <p className="my-6">{v.excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
