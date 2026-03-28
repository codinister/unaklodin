'use client';

import getDollarRate from '@/lib/getDollarRate';
import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { ItemTypes } from '@/types/types';
import format_number from '@/utils/format_number';
import useCurrency from '@/utils/useCurrency';

const CartTotal = () => {
  const { selector } = useDispatchselector();

  const cartData = selector((state) => state.cartSlice);

  const { currency } = useCurrency();

  const ghArr = Object.values(cartData.carts).map((v: any) => {
    const calc = Number(v.cediPrice) * Number(v.qty);
    return { total: calc };
  });

  const usArr = Object.values(cartData.carts).map((v: any) => {
    const calc = Number(v.dollarPrice) * Number(v.qty);
    return { total: calc };
  });

  const gh = [...ghArr].reduce((a, b) => {
    return a + b.total;
  }, 0);

  const us = [...usArr].reduce((a, b) => {
    return a + b.total;
  }, 0);

  const amount = currency === 'GHS' ? gh : us;
  return (
    <>
      {currency}
      {format_number(String(amount))}
    </>
  );
};

export default CartTotal;
