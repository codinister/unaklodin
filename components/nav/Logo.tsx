'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  width: number;
  height: number;
};

const Logo = ( { width, height, ...props }: Props) => {
  const sett = useGetQuery('settings', '/v1/settings') || [];


  return (
    <div>
      {sett[0] ? (
        <Link {...props} href="/"  >
        <Image src={sett[0]?.logo} alt="" width={width} height={height} />
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default Logo;
