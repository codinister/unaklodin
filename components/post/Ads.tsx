'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';

const Ads = () => {
  const data = useGetQuery('ads', '/v1/ads') || [];

  return (
    <>
      {data.length > 0
        ? data.map(
            (v: { image: string; title: string; link: string }, k: number) => (
              <a  key={k} href={v.link} target="_blank" className="block mb-4">
                <Image src={v.image} width={700} height={900} alt="" />
              </a>
            ),
          )
        : ''}
    </>
  );
};

export default Ads;
