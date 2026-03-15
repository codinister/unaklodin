'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from '../ui/button';
import Link from 'next/link';

const AboutWidget = () => {
  const about = useGetQuery('about', '/about') || [];

  return (
    <div
      className=" sm:mx-6 my-10  p-10 relative z-2 flex justify-center items-center text-white before:content-[''] before:absolute    before:inset-0 before:-z-1 before:bg-black/40"
      style={{
        backgroundImage: `url(${about[1]?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="text-center">
        <h6 className="mb-2">{about[1]?.title}</h6>
        <p className="my-10">{about[1]?.excerpt}</p>
        <Link href="/about">
        <Button variant="outline">About Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutWidget;
