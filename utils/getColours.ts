'use client';

import { colourType, productsType } from '@/types/types';

const getColours = (data: productsType[]) => {
  const colours: colourType[] = Object.values(data
    .map((v) => v.colour)
    .filter(Boolean)
    .flat(2).reduce((a: any, b: any) => {
    if (a[b.title]) {
      a[b.title] = b;
    }
    else{
      a[b.title] = b
    }

    return a;
  }, {}));



  return colours;
};

export default getColours;
