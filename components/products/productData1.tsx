'use client';

import { ItemTypes } from '@/types/types';

const productData1 = ({ ...param }) => {
  const { paramId, type, dupData } = param;

  return paramId === 'undefined'
    ? dupData.filter((v: ItemTypes) => v.type.toLowerCase() === type)
    : dupData.filter((v: ItemTypes) => v.cat === paramId);
};

export default productData1;
