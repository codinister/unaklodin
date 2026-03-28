'use client';

import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';
import format_number from '@/utils/format_number';
import useCurrency from '@/utils/useCurrency';

const CartTotal = () => {
  const { selector } = useDispatchselector();

  const cartData = selector((state) => state.cartSlice);

  const { currency } = useCurrency();

  const amount = Object.values(cartData.carts).reduce((a, b) => {
    return a + b.total;
  }, 0);

  return (
    <>
      {currency}
      {format_number(String(amount))}
    </>
  );
};

export default CartTotal;
