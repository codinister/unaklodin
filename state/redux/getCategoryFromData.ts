'use client';

import { stateTypes } from '@/types/types';

const getCategoryFromData = (state: stateTypes) => {
  const cat = [...new Set(state.data.map((v) => v.cat))];
  const catData =
    cat.length > 1
      ? state.dupData
      : state.dupData.filter((v) => v.cat === cat[0]);

  return catData;
};

export default getCategoryFromData;
