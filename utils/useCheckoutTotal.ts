'use client';

import useDispatchselector from '@/state/redux/useDispatchselector';
import format_number from '@/utils/format_number';
import useCurrency from '@/utils/useCurrency';

const useCheckoutTotal = () => {
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

  // const amount = currency === 'GHS' ? gh : us;
  // return amount;
  return gh
};

export default useCheckoutTotal;
