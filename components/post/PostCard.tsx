'use client';

import Link from "next/link";
import { Button } from "../ui/button";

const PostCard = ({v}: {v: {
  thumb: string; 
  title: string; 
  excerpt: string;
  id: string;
}}) => {
  return (
    <div className="sm:basis-82   mb-8">
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
        <Link href={`/post/${v.id}`}>
          <Button>Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
