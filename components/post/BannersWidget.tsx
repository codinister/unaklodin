'use client';
import useGetQuery from '@/state/query/useGetQuery';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const BannersWidget = () => {
  const data = useGetQuery('banners', '/banners') || [];

  return (
    <div className="sm:w-90 w-80 mx-auto mb-10 ">
      <Carousel  className="w-full">
        <CarouselContent>
          {data.map(
            (
              v: string,
              k: number,
            ) => (
              <CarouselItem key={k} className="basis-full ">
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

export default BannersWidget
