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
  const data = useGetQuery('banners', '/banners') || [];

  return (
    <div className="mb-7 flex gap-1 sm:flex-row flex-col">
      {data.slice(0, 2).map((v: { image: string; link: string }, k: number) => (
        <a
          href={v.link}
          key={k}
          className="h-100 p-1 flex-1"
          style={{
            backgroundImage: `url(${v.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></a>
      ))}
    </div>
  );
};

export default Banners;
