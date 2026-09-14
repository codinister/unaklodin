'use client';

import { productsType } from '@/types/types';

const getSizes = (data: productsType[]) => {
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
