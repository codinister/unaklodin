'use client';
import useGetQuery from '@/state/query/useGetQuery';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Link from 'next/link';
import { Button } from './ui/button';

const Featured = () => {
  const data = useGetQuery('featured', '/v1/featured') || [];

  return (
    <div className="mb-7 w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {data.map(
            (
              v: { image: string; product: string; sub_title: string; id: string },
              k: number,
            ) => (
              <CarouselItem key={k} className="basis-full sm:basis-1/4 pl-1">
                <Link href={`/item/${v.id}`}>
                  <div
                    className="sm:h-110
                    h-140
                    text-white
                    flex  
                    items-end 
                    relative  

                    overflow-hidden
                    "
                    style={{
                      backgroundImage: `url(${v.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }}
                  >
                    <div className="p-8 sm:p-4 bg-linear-to-t from-black to-transparent w-full">
                      <p className="font-extrabold">{v.product}</p>
                      <p className="mb-4 text-white/80">{v.sub_title}</p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default Featured;
