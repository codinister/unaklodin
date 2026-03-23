'use client';

import { ItemTypes } from '@/types/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Modal from '../modal/Modal';
import { useState } from 'react';

const ImageBoxMobile = ({ data }: { data: ItemTypes[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState('');

  const handleClick = (val: string) => {
    setShowModal(true);
    setImg(val);
  };

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {data[0]?.gallery.map((v, k: number) => (
            <CarouselItem key={k} className="basis-full pl-1">
              <div
                className="h-100
                    text-white
                    flex  
                    items-end 
                    relative  
                    "
                onClick={() => handleClick(v)}
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

      <Modal img={img} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default ImageBoxMobile;
