'use client';

import { ItemCard } from '@/types/types';
import ItemImage from './ItemImage';
import ItemGallery from './ItemGallery';

const Item = ({
  title,
  price,
  totalColours,
  img,
  gallery,
  currency,
}: ItemCard) => {
  return (
    <>
      <div>
        {gallery.length > 0 ? (
          <ItemGallery gallery={gallery} />
        ) : (
          <ItemImage img={img} />
        )}
      </div>
      <div className="p-6">
        <h6>{title}</h6>
        <p className="py-4">{totalColours} {totalColours === 1 ? 'colour' : 'colours'}</p>
        <h6 className="font-bold">
          {currency} {price}.00
        </h6>
      </div>
    </>
  );
};

export default Item;
