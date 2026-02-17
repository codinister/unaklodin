'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const Featured = () => {
  const data = useGetQuery('featured', '/featured') || [];

  return (
    <div className="mb-7 w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {data.map(
            (
              v: { image: string; product: string; sub_title: string },
              k: number,
            ) => (
              <CarouselItem key={k} className="basis-full sm:basis-1/4">
                <div
                  className="h-75
            text-white
            p-6 
            border-2 border-primary 
            rounded-2xl
            flex  
            items-end 
            relative  
            z-2
            before:absolute 
            before:inset-0  
            before:bg-linear-to-t  
            before:from-black/70  
            before:to-transparent
            before:-z-1
            "
                  style={{
                    backgroundImage: `url(${v.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                >
                  <div>
                    <h6 className="font-extrabold">{v.product}</h6>
                    <p className="text-white/80">{v.sub_title}</p>
                  </div>
                </div>
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
