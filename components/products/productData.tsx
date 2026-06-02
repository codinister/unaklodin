'use client';

import { ItemTypes } from '@/types/types';

const productData = (data: ItemTypes[], paramId: string, type: string) => {

  return paramId === 'undefined'
    ? data.filter((v) => v.type.toLowerCase() === type)
    : data.filter((v) => v.cat === paramId);

};

export default productData;
