'use client';

import useDispatchselector from '@/state/redux/useDispatchselector';

const ItemsTotal = () => {
  const { selector } = useDispatchselector();

  const cartData = selector((state) => state.cartSlice);

  return (
    <>
      {Object.values(cartData.carts).length}
    </>
  );
};

export default ItemsTotal;
