'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const ItemGallery = ({ gallery }: { gallery: string[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {gallery.map((v, k: number) => (
          <CarouselItem key={k} className="basis-full">
            <div
              className="sm:h-75 lg:h-80 sm:py-0  py-50 sm:p-0"
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

export default ItemGallery;
