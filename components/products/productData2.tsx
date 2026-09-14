'use client';

import { productsType } from '@/types/types';

const productData2 = ({ ...param }) => {
  const { data, paramId, type, dupData } = param;

  let dataRes;
  if (paramId === 'undefined') {
    const dataType = data[0]?.type === type;
    dataRes = dataType ? data : dupData;
  } else {
    const cat = [...new Set(data.map((v: productsType) => v.cat).filter(Boolean))].filter(v => v === paramId)
    const dataType = cat[0] === paramId
    dataRes = dataType ? data : dupData;
  }

  return paramId === 'undefined'
    ? dataRes.filter((v: productsType) => v.type.toLowerCase() === type)
    : dataRes.filter((v: productsType) => v.cat === paramId);
};

export default productData2;
