'use client';

import { ItemTypes } from '@/types/types';

const ItemBanner = ({ data }: { data: ItemTypes[] }) => {
  const imgs = data.map((v) => v.thumbnail).slice(0, 2);

  return (
    <div className="cont">
      <div className="shadow-xl flex">
      {imgs.map((v, k) => (
        <div
          key={k}
          className="flex-1 h-100 "
          style={{
            backgroundImage: `url(${v})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
          }}
        ></div>
      ))}
    </div>
    </div>
  );
};

export default ItemBanner;
