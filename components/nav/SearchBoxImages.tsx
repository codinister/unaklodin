'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';
import { useState } from 'react';

type SearchBoxImgType = React.AnchorHTMLAttributes<HTMLAnchorElement>;
const SearchBoxImages = ({ ...props }: SearchBoxImgType) => {
  const data = useGetQuery('maincategories', '/v1/maincategories') || [];

  return (
    <div className="space-y-4">
      <div
        className="flex items-start   relative
        before:content-[' ']
        before:absolute
        before:inset-0 
        before:bg-black/20
        before:-z-1
        z-2
        "
        style={{
          backgroundImage: `url(${data ? data[0]?.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="text-white p-4 mt-25">
          <strong>{data[0]?.title}</strong>
          <br />
          <Link {...props} href="/men">
            Shop Now
          </Link>
        </div>
      </div>
      <div
        className="flex items-start   relative
        before:content-[' ']
        before:absolute
        before:inset-0 
        before:bg-black/20
        before:-z-1
        z-2"
        style={{
          backgroundImage: `url(${data ? data[1]?.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="text-white p-4 mt-25">
          <strong>{data[1]?.title}</strong>
          <br />
          <Link {...props} href="/women">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBoxImages;
