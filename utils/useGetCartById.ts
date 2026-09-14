'use client';

import useDispatchselector from '@/state/redux/useDispatchselector';
import { productsType } from '@/types/types';

const useGetCartById = (data: productsType[]) => {
  const { selector } = useDispatchselector();
  const cartState = selector((state) => state.cartSlice);
  const allCarts = cartState?.carts || {};
  const cart_id = data[0]?.id;
  return  allCarts?.[cart_id] || {} ;
};

export default useGetCartById;
