'use client';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const ItemGallery = ({ gallery, id, fn }: { gallery: string[]; id: string; fn: Function }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {gallery.map((v, k: number) => (
          <CarouselItem key={k} className="basis-full">
            <Link onClick={()=>fn(false)} href={`/item/${id}`}>
              <div
                className="sm:h-120 sm:py-0  py-80 sm:p-0"
                style={{
                  backgroundImage: `url(${v})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default ItemGallery;
