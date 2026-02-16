'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ width, height }: { width: number; height: number }) => {
  const sett = useGetQuery('settings', '/settings') || [];

  return (
    <div>
      {sett[0] ? (
        <Link href="/">
        <Image src={sett[0]?.logo} alt="" width={width} height={height} />
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default Logo;
