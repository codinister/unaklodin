'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import useGetQuery from '@/state/query/useGetQuery';

const MainCategories = () => {
  const data = useGetQuery('maincategories', '/v1/maincategories') || [];

  return (
    <div className="flex-col  sm:flex-row flex my-7">
      <div
        className="flex-1 h-150  relative  flex  items-end"
        style={{
          backgroundImage: `url(${data ? data[0]?.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className=" text-white mt-60 sm:mt-0 pl-15 w-full bg-linear-to-t from-black to-transparent">
          <div className="  mb-2 py-4 w-80">
            <h6 className="font-extrabold text-shadow-lg">
              Ready For What Comes Your Way
            </h6>
            <p className="text-shadow-lg">invest in your appearance</p>
          </div>

          <div className="flex gap-6 mb-4">
            <Link href="/men">
              <Button size="lg">Shop men</Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex-1 h-150  relative  flex  items-end"
        style={{
          backgroundImage: `url(${data ? data[1]?.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className=" text-white mt-60 sm:mt-0 pl-15  w-full bg-linear-to-t from-black to-transparent">
          <div className="  mb-2 py-4 w-80">
            <h6 className="font-extrabold text-shadow-lg">
              Dress with intention
            </h6>
            <p className="text-shadow-lg">your style your life</p>
          </div>

          <div className="flex gap-6 mb-4">
            <Link href="/women">
              <Button size="lg">Shop women</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
