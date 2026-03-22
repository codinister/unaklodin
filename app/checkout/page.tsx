'use client';

import BillingAddress from '@/components/singleItem/BillingAddress';
import Carts from '@/components/singleItem/Carts';
import OrderTotal from '@/components/singleItem/OrderTotal';
import useRedirect from '@/utils/useRedirect';

const Checkout = () => {
    useRedirect()
  return (
    <div className="cont">
      <div className="py-10 flex gap-20 flex-col sm:flex-row">
        <div className="flex-1">
          <BillingAddress />
        </div>
        <div className="flex-1">
          <p className="mb-6 font-bold">Order Summary</p>
          <Carts checkout={true} />
          <OrderTotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout
