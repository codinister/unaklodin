'use client';

import BillingAddress from '@/components/singleItem/BillingAddress';
import CartButton from '@/components/singleItem/CartButton';
import Carts from '@/components/singleItem/Carts';
import ItemsTotal from '@/components/singleItem/ItemsTotal';
import OrderTotal from '@/components/singleItem/OrderTotal';

const Cart = () => {
  return (
    <div className="cont">
      <div className="py-10 flex gap-20 flex-col sm:flex-row">
        <div className="flex-1">
          <BillingAddress />
        </div>
        <div className="flex-1">
          <p className="mb-6">Order Summary</p>
          <Carts checkout={true} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
