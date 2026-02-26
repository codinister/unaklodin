'use client';

import { ItemTypes } from '@/types/types';

const getSizes = (data: ItemTypes[]) => {
  const sizes = [
    ...new Set(
      data
        .map((v) => v.size)
        .filter(Boolean)
        .flat(2),
    ),
  ];

  return sizes;
};

export default getSizes;
