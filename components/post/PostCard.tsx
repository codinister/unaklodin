'use client';

import Link from 'next/link';

const PostCard = ({
  v,
}: {
  v: {
    thumb: string;
    title: string;
    excerpt: string;
    id: string;
    slug: string;
  };
}) => {
  return (
    <div className="sm:basis-[48%]  mb-6">
      <Link href={`/post/${v.slug}`}>
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
          <p className="mt-6">{v.excerpt}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
