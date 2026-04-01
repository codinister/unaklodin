'use client';
import useGetQuery from '@/state/query/useGetQuery';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const Banners = () => {
  const data = useGetQuery('banners', '/v1/banners/home-page') || [];

  return (
    <div className="mb-7 flex gap-1 sm:flex-row flex-col">
      {data[0] ? data[0]?.images.slice(0, 2).map((v: string, k: number) => (
        <div
          key={k}
          className="h-100 py-50 sm:py-0 flex-1"
          style={{
            backgroundImage: `url(${v})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      )) : ''}
    </div>
  );
};

export default Banners;
