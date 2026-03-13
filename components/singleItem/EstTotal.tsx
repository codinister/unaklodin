'use react';

import Link from 'next/link';
import { Button } from '../ui/button';
import useDispatchselector from '@/state/redux/useDispatchselector';
import useGetQuery from '@/state/query/useGetQuery';

const EstTotal = () => {
  const { selector } = useDispatchselector();
  const cartData = selector((state) => state.cartSlice);

  const sett = useGetQuery('settings', '/settings');
  return (
    <div className="mt-4 px-4">
      <div className="flex justify-between mb-4">
        <div>
          <h6>Est. Total</h6>
          <p className="text-gray-600">Shipping is calculated in checkout</p>
        </div>
        <div>
          <h6>
            {sett[0]?.currency} 
            {Object.values(cartData.carts).reduce((a, b) => {
              return a + b.total;
            }, 0)}
          </h6>
        </div>
      </div>
      <Link href="/cart" >
        <Button className="w-full">View Cart</Button>
      </Link>
    </div>
  );
};

export default EstTotal;
