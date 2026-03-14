'use client';
import useDispatchselector from '@/state/redux/useDispatchselector';
import BuscketIcon from './Buscket';
import Link from 'next/link';
const CartIcon = () => {
  const { selector } = useDispatchselector();
  const cartData = selector((state) => state.cartSlice);

  const count = Object.values(cartData.carts).length;

  return (
    <Link href="/cart" className="relative">
      <BuscketIcon />

      {count > 0 ? (
        <div className="-top-2 -right-2 absolute w-7 p-1 h-7 rounded-full bg-red-700 text-white flex justify-center items-center">
          {count}
        </div>
      ) : (
        ''
      )}
    </Link>
  );
};

export default CartIcon;
