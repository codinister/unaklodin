'use client';

import { colourType } from '@/types/types';

const getColour = (data: colourType[]) => {
  const colours: colourType[] = Object.values(data
    .map((v) => ({hex: v.hex, title: v.title}))
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

export default getColour;
