'use client';

import { cartItemType } from '@/types/types';
import useCurrency from '@/utils/useCurrency';


const CheckoutItems = ({ value }: { value: cartItemType }) => {
  const { currency } = useCurrency();
  return (
    <div className="flex gap-2 p-4">
      <div
        className="relative h-40 flex-2 rounded-lg"
        style={{
          backgroundImage: `url(${value.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div className="flex-3">
        <strong>{value.title}</strong>
        <p>
          {currency} {value.total}
        </p>
        <p>Size: {value.size}</p>
        <p>Colour: {value.colour}</p>
        <p>Qty: {value.qty}</p>
      </div>
    </div>
  );
};

export default CheckoutItems;
