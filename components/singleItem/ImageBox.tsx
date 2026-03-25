'use client';

import { ItemTypes } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';

const ImageBox = ({ data }: { data: ItemTypes[] }) => {
  const g = data[0]?.gallery;

  const arr = g.map((v, k) => (
    <div key={k} className="mb-1">
      <Image src={v} alt="" width={1000} height="2000" />
    </div>
  ));

  return <div>{arr}</div>;
};

export default ImageBox;
