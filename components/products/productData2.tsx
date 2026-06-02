'use client';

import { ItemTypes } from '@/types/types';

const productData2 = ({ ...param }) => {
  
  const { data, paramId, type, dupData } = param;
  const dataType = data[0].type === type;
  const dataRes = dataType ? data : dupData;

  return paramId === 'undefined'
    ? dataRes.filter((v: ItemTypes) => v.type.toLowerCase() === type)
    : dataRes.filter((v: ItemTypes) => v.cat === paramId);
};

export default productData2;
