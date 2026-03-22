'use client';

import { ItemCard } from '@/types/types';
import ItemImage from './ItemImage';
import ItemGallery from './ItemGallery';




const Item = ({
  id,
  title,
  price,
  totalColours,
  img,
  gallery,
  currency,
  closeOpenFn
}: ItemCard) => {


  return (
    <>
      <div>
        {gallery?.length > 0 ? (
          <ItemGallery fn={closeOpenFn} id={id} gallery={gallery} />
        ) : (
          <ItemImage fn={closeOpenFn}  id={id} img={img} />
        )}
      </div>
      <div className="p-6">
        <p>{title}</p>
        <p className="py-2">
          {totalColours} {totalColours === 1 ? 'colour' : 'colours'}
        </p>
        <p>
          {currency} {price}.00
        </p>
      </div>
    </>
  );
};

export default Item;
