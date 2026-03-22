'use client';

import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';
import format_number from '@/utils/format_number';

const CartTotal = () => {
  const { selector } = useDispatchselector();

  const cartData = selector((state) => state.cartSlice);

  const sett = useGetQuery('settings', '/settings');

  const amount = Object.values(cartData.carts).reduce((a, b) => {
    return a + b.total;
  }, 0);

  return (
    <>
      {sett[0]?.currency}
      {format_number(String(amount))}
    </>
  );
};

export default CartTotal;
