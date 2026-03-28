'use client';

import useDispatchselector from '@/state/redux/useDispatchselector';
import format_number from './format_number';

const useCurrency = () => {
  const { selector } = useDispatchselector();
  const cur = selector((state) => state.curSlice);
  const currency = cur.currency;

  const currSign = currency === '$' ? 'USD' : 'GHS';

  const defaultPrice = (dollarPrice: number, cediPrice: number) => {
    const price = currency === 'GHS' ? cediPrice : dollarPrice;
    return format_number(String(price))
  };

  return { defaultPrice,currency, currSign };
};

export default useCurrency;

//const {defaultPrice,currency,currSign} = useCurrency()
