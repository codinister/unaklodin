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

const SimilarItems = ({type}: {type: string}) => {
  const data = useGetQuery(type, `/${type}`) || [];

  return (
    <div className="mb-7 w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {data.map(
            (v: { thumbnail: string; product: string; id: string }, k: number) => (
              <CarouselItem key={k} className="basis-full sm:basis-1/6 pl-1">
                <Link href={`/item/${v.id}`}>
                  <div
                    className="h-75
                    text-white
                    flex  
                    items-end 
                    relative  
                    "
                    style={{
                      backgroundImage: `url(${v.thumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }}
                  ></div>
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

export default SimilarItems;
