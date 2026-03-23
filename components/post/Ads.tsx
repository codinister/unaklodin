'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

const Ads = () => {
  const data = useGetQuery('ads', '/ads') || [];

  return (
    <>
      {data.length > 0
        ? data.map(
            (v: { image: string; title: string; link: string }, k: number) => (
              <Link key={k} href={v.link} className="block mb-4">
                <Image src={v.image} width={700} height={900} alt="" />
              </Link>
            ),
          )
        : ''}
    </>
  );
};

export default Ads;
