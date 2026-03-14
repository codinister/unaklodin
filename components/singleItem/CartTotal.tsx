'use client';

import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';

const CartTotal = () => {
  const { selector } = useDispatchselector();

  const cartData = selector((state) => state.cartSlice);

  const sett = useGetQuery('settings', '/settings');

  return (
    <>
      {sett[0]?.currency}
      {Object.values(cartData.carts).reduce((a, b) => {
        return a + b.total;
      }, 0)}
    </>
  );
};

export default CartTotal;
