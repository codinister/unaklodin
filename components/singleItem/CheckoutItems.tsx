'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { cartItemType, ItemTypes } from '@/types/types';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const CheckoutItems = ({ value }: { value: cartItemType }) => {
  const sett = useGetQuery('settings', '/settings');
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
          {sett[0]?.currency} {value.total}
        </p>
        <p>Size: {value.size}</p>
        <p>Colour: {value.colour}</p>
        <p>Qty: {value.qty}</p>
      </div>
    </div>
  );
};

export default CheckoutItems;
