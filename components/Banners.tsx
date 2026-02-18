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
    <div className="mb-7 w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {data.map(
            (
              v: string,
              k: number,
            ) => (
              <CarouselItem key={k} className="basis-full sm:basis-1/3 pl-1">
                <div
                  className="h-80
            text-white
            p-6 
 
            flex  
            items-end 
            relative  
            
            "
                  style={{
                    backgroundImage: `url(${v})`,
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
