'use client';

import Link from "next/link";

const ItemImage = ({ img, id, fn }: { img: string; id: string ; fn: Function}) => {
  return (
     <Link onClick={()=>fn(false)} href={`/item/${id}`}>
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="sm:h-75 lg:80  p-50 sm:p-0"
    ></div>
    </Link>
  );
};

export default ItemImage;
