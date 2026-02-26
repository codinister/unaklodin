'use client';

import { ItemTypes } from '@/types/types';

const getColours = (data: ItemTypes[]) => {
  const colours = [
    ...new Set(
      data
        .map((v) => v.colour)
        .filter(Boolean)
        .flat(2),
    ),
  ];

  return colours;
};

export default getColours;
