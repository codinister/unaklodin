'use client';

import { addCurrency } from '@/state/redux/reducers/defaultCurrency';
import useDispatchselector from '@/state/redux/useDispatchselector';
import useCurrency from '@/utils/useCurrency';
import { useState } from 'react';
import { motion } from 'motion/react';

type PropType = React.HTMLAttributes<HTMLDivElement>;
const DollarCurrency = ({ ...props }: PropType) => {
  return (
    <div
      {...props}
      className="py-1 space-x-4 cursor-pointer px-2 bg-black text-white flex items-center h-10 w-60"
    >
      <span>USD</span>
      <span>United States Dollar</span>
    </div>
  );
};

const CediCurrency = ({ ...props }: PropType) => {
  return (
    <div
      {...props}
      className="py-1 space-x-4 cursor-pointer px-2 flex items-center h-10 w-60 bg-black text-white"
    >
      <span>GHS</span>
      <span>Ghana Cedi</span>
    </div>
  );
};

const CurrencyBox = () => {
  const [change, setChange] = useState(false);
  const { selector, dispatch } = useDispatchselector();

  const cur = selector((state) => state.curSlice);
  const currency = cur.currency;

  const handleClick = (val: string) => {
    dispatch(addCurrency(val));
  };

  return (
    <div className="fixed w-60 h-32 top-[50%] transform -translate-y-[50%] right-0">
      <div
        className="fixed w-60 h-32  top-[50%] transform -translate-y-[50%]  right-0 flex-col flex items-center"
        onMouseLeave={() => setChange(false)}
      >
        <motion.div
          layout
          className={
            change
              ? ' ml-0 w-60 h-10 px-2 py-1 flex items-center bg-black text-white'
              : 'py-1 w-60 ml-120 h-10 px-2 py-1 flex items-center bg-black text-white'
          }
        >
          SELECT YOUR CURRENCY
        </motion.div>

        <motion.div
          layout
          className={
            change
              ? 'ml-0 w-60  my-1 h-10 bg-black text-white'
              : 'w-60 ml-94 my-1 h-10 bg-black text-white'
          }
          onMouseEnter={() => setChange(true)}
        >
          {currency === '$' ? (
            <DollarCurrency onClick={() => handleClick('$')} />
          ) : (
            <CediCurrency onClick={() => handleClick('GHS')} />
          )}
        </motion.div>

        <motion.div
          layout
          className={
            change
              ? 'ml-0 w-60 my-1 h-10 bg-black text-white'
              : 'w-60 ml-120 my-1 h-10 bg-black text-white'
          }
        >
          {currency === '$' ? (
            <CediCurrency onClick={() => handleClick('GHS')} />
          ) : (
            <DollarCurrency onClick={() => handleClick('$')} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CurrencyBox;
