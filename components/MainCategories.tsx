'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import useGetQuery from '@/state/query/useGetQuery';

const MainCategories = () => {
  const data = useGetQuery('maincategories', '/maincategories') || [];

  return (
    <div className=" flex my-7">
      <div
        className="flex-1 h-100
      p-15
      relative 
      z-2
      before:absolute 
      before:inset-0
      before:bg-linear-to-t
      before:from-black/20 
      before:to-transparent
      before:-z-1

      flex 
      items-end
      "
        style={{
          backgroundImage: `url(${data ? data?.menImg : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className=" text-white">
          <h6 className="font-extrabold text-shadow-lg">Ready For What Comes Your Way</h6>
          <p className="text-shadow-lg mb-4">invest in your appearance</p>

          <div className="flex gap-6">
            <Link href="/men">
              <Button size="lg">Shop men</Button>
            </Link>
            <Link href="/women">
              <Button size="lg">Shop women</Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex-1 h-100
      p-15
      relative 
      z-2
      before:absolute 
      before:inset-0
      before:-z-1
      before:bg-linear-to-t
      before:from-black/20 
      before:to-transparent
      "
        style={{
          backgroundImage: `url(${data ? data?.womenImg : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
    </div>
  );
};

export default MainCategories;
