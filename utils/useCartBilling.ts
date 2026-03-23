'use client';
import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';
import format_number from '@/utils/format_number';
import formatDate from '@/utils/DateFormats';

const useCartBilling = () => {
  const sett = useGetQuery('settings', '/settings');
  const { selector, dispatch } = useDispatchselector();

  const cart = selector((state) => state.cartSlice);

  const b = cart?.billingInfo;
  const data = cart?.carts;

  const amount = Object.values(cart.carts).reduce((a, b) => {
    return a + b.total;
  }, 0);

  const info = {
    country: b?.country,
    firstname: b?.firstname,
    lastname: b?.lastname,
    email: b?.email,
    address: b?.address,
    city: b?.city,
    phone: b?.phone,
  };


  const currency = sett[0]?.currency.toUpperCase();
  const reference = new Date().getTime().toString();
  const createdAt = Object.values(data)[0]?.date;
  const date = formatDate(createdAt);
  return { data,currency, amount, info, reference, date };
};

export default useCartBilling;
