'use client';
import useRedirect from '@/utils/useRedirect';
import CartButton from '@/components/singleItem/CartButton';
import Carts from '@/components/singleItem/Carts';
import ItemsTotal from '@/components/singleItem/ItemsTotal';
import OrderTotal from '@/components/singleItem/OrderTotal';
import { useEffect } from 'react';

const Cart = () => {

  useRedirect()
  
  return (
    <div className="cont">
      <h6 className="p-4 border-b border-b-gray-400">
        Cart (<ItemsTotal />)
      </h6>

      <div className="py-10 flex gap-10 flex-col sm:flex-row">
        <div className="flex-1">
          <Carts checkout={false} />
        </div>
        <div className="flex-1">
          <OrderTotal />
          <CartButton title="Checkout" link="/checkout" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
