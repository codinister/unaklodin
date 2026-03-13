'use client';
import useDispatchselector from '@/state/redux/useDispatchselector';
import BuscketIcon from './Buscket';
import Link from 'next/link';
const CartIcon = () => {
  const { selector } = useDispatchselector();
  const cartData = selector((state) => state.cartSlice);

  return (
    <Link href="/cart" className="relative">
      <BuscketIcon />

      <div className="-top-2 -right-2 absolute w-7 p-1 h-7 rounded-full bg-red-700 text-white flex justify-center items-center">
        {Object.values(cartData.carts).length}
      </div>
    </Link>
  );
};

export default CartIcon;
