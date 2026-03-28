'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { cartItemType, ItemTypes } from '@/types/types';
import useCurrency from '@/utils/useCurrency';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const CartItems = ({
  value,
  incrementalFn,
  decrementalFn,
  deletecartFn,
}: {
  value: cartItemType;
  incrementalFn: (val: cartItemType) => any;
  decrementalFn: (val: cartItemType) => any;
  deletecartFn: (id: string) => any;
}) => {
  const { currency } = useCurrency();
  return (
    <div className="flex gap-2 p-4">
      <div
        className="relative h-40 flex-1 rounded-lg"
        style={{
          backgroundImage: `url(${value.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <span className="w-6 h-6 rounded-full bg-secondary text-white flex justify-center items-center absolute top-2 left-2 cursor-pointer" title="Remove" onClick={()=> deletecartFn(value.id)}>
          x
        </span>
      </div>
      <div className="flex-3">
        <strong>{value.title}</strong>
        <p>{currency} {value.total}</p>
        <p>Size: {value.size}</p>
        <p>Colour: {value.colour}</p>
        <div className="flex gap-1 mt-4">
          <button
            className="cursor-pointer border border-gray-500 rounded-sm w-10 h-6 flex justify-center items-center text-sm  text-gray-500 hover:bg-primary hover:text-white"
            onClick={() => decrementalFn(value)}
          >
            <FaMinus />
          </button>
          <span>{value.qty > 0 ? value.qty : 1}</span>
          <button
            className="cursor-pointer border border-gray-500 rounded-sm w-10 h-6 flex justify-center items-center text-sm hover:bg-primary hover:text-white text-gray-500 "
            onClick={() => incrementalFn(value)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
