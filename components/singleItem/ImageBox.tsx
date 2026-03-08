'use client';

import { ItemTypes } from '@/types/types';


const ImageBox = ({ data }: { data: ItemTypes[] }) => {
  const g = data[0]?.gallery;
  const newArr = [
    {
      n1: g && g[0],
      n2: g && g[1],
      n3: g && g[2],
    },
    {
      n1: g && g[3],
      n2: g && g[4],
      n3: g && g[5],
    },
    {
      n1: g && g[6],
      n2: g && g[7],
      n3: g && g[8],
    },
  ];

  const arr = newArr.map((v, k) => (
    <div key={k}>
      <div className="flex gap-1">
        <div
          className="flex-1 h-90"
          style={{
            backgroundImage: `url(${v.n1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div
          className="flex-1 h-90"
          style={{
            backgroundImage: `url(${v.n2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
      <div
        className="h-120 mt-1"
        style={{
          backgroundImage: `url(${v.n3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
    </div>
  ));

  return <div>{arr}</div>;
};

export default ImageBox;
