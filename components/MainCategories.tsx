'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import useGetQuery from '@/state/query/useGetQuery';

const MainCategories = () => {
  const data = useGetQuery('maincategories', '/maincategories') || [];

  return (
    <div className="flex-col sm:flex-row flex my-7">
      <div
        className=" flex-1 h-100  relative  flex  items-end"
        style={{
          backgroundImage: `url(${data ? data?.menImg : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className=" text-white  pl-15 w-full bg-linear-to-t from-black to-transparent">
          <div className="  mb-2 p-4 w-80">
            <h6 className="font-extrabold text-shadow-lg">
              Ready For What Comes Your Way
            </h6>
            <p className="text-shadow-lg">invest in your appearance</p>
          </div>

          <div className="flex gap-6 mb-4">
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
      sm:p-0
      p-50
      relative 
    
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
