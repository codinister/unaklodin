import { ItemTypes, stateTypes } from '@/types/types';

const filterLogic = (
  state: stateTypes,
  action: { payload: any; type: string },
) => {
  const { payload, type } = action.payload;
  if (type === 'sort') {
    let output: ItemTypes[] = [];

    if (payload === 'lowtohigh') {
      output =
        state.dupData.sort((a: { price: number }, b: { price: number }) => {
          if (a.price > b.price) return 1;
          else if (a.price < b.price) return -1;
          else return 0;
        }) || [];
    } else if (payload === 'hightolow') {
      output =
        state.dupData.sort((a: { price: number }, b: { price: number }) => {
          if (a.price > b.price) return -1;
          else if (a.price < b.price) return 1;
          else return 0;
        }) || [];
    } else if (payload === 'whatsnew') {
      output =
        state.dupData.sort(
          (a: { updatedAt: string }, b: { updatedAt: string }) => {
            if (a.updatedAt > b.updatedAt) return -1;
            else if (a.updatedAt < b.updatedAt) return 1;
            else return 0;
          },
        ) || [];
    }

    state.data = output;
  } else if (type === 'cat') {
    state.data = state.dupData.filter((v) => v.cat === payload);
  } else if (type === 'colour') {
    state.data = state.dupData
      .map((v) => ({
        ...v,
        colour: v.colour ? v.colour : [],
      }))
      .filter((v) => v.colour.map((vv) => vv.title).includes(payload));
  } else if (type === 'price') {
    const { max, min } = payload;

    state.data = state.dupData
      .map((v) => ({
        ...v,
        price: v.price || 0,
      }))
      .filter((v) => v.price >= min && v.price <= max);
  } else if (type === 'size') {
    state.data = state.dupData
      .map((v) => ({
        ...v,
        size: v.size ? v.size : [],
      }))
      .filter((v) => v.size.includes(payload));
  }
};

export default filterLogic;
