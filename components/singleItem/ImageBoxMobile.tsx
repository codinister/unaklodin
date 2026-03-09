'use client';

import { ItemTypes } from '@/types/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const ImageBoxMobile = ({ data }: { data: ItemTypes[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data[0]?.gallery.map((v, k: number) => (
          <CarouselItem key={k} className="basis-full pl-1">
            <div
              className="h-75
                    text-white
                    flex  
                    items-end 
                    relative  
                    "
              style={{
                backgroundImage: `url(${v})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default ImageBoxMobile;
