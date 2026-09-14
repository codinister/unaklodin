'use client';

import { productsType } from '@/types/types';

const productData1 = ({ ...param }) => {
  const { paramId, type, dupData } = param;

  return paramId === 'undefined'
    ? dupData.filter((v: productsType) => v.type.toLowerCase() === type)
    : dupData.filter((v: productsType) => v.cat === paramId);
};

export default productData1;
