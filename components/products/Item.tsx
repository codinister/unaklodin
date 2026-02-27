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
        <p>{title}</p>
        <p className="py-2">{totalColours} {totalColours === 1 ? 'colour' : 'colours'}</p>
        <p>
          {currency} {price}.00
        </p>
      </div>
    </>
  );
};

export default Item;
