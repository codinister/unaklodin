'use client';

import useDispatchselector from '@/state/redux/useDispatchselector';

const ItemsTotal = () => {
  const { selector } = useDispatchselector();

  const cartData = selector((state) => state.cartSlice);

  return (
    <>
      {Object.values(cartData.carts).reduce((a, b) => {
        return a + b.qty;
      }, 0)}
    </>
  );
};

export default ItemsTotal;
