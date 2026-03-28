'use client';

import useDispatchselector from '@/state/redux/useDispatchselector';


// itemTotal({
//   cediPrice: value?.cediPrice, 
//   dollarPrice: value?.dollarPrice, 
//   qty: value?.qty
// })
const itemTotal = ({ ...props }) => {
  const { cediPrice, dollarPrice, qty } = props;
  const { selector } = useDispatchselector();
  const cur = selector((state) => state.curSlice);
  const currency = cur.currency;
  const total =
    currency === 'GHS'
      ? Number(cediPrice) * Number(qty)
      : Number(dollarPrice) * Number(qty);

      return total
};

export default itemTotal;
