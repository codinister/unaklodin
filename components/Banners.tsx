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
  const data = useGetQuery('featured', '/featured') || [];

  return (
    <div className="mb-7 w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {data.map(
            (
              v: { image: string },
              k: number,
            ) => (
              <CarouselItem key={k} className=" basis-1/3">
                <div
                  className="h-max
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

export default Banners
