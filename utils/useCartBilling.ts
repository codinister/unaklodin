'use client';
import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';
import format_number from '@/utils/format_number';
import formatDate from '@/utils/DateFormats';
import {z} from 'zod'
import { billing } from '@/schema/schemaTypes';
import useCheckoutTotal from './useCheckoutTotal';

const useCartBilling = () => {
  const sett = useGetQuery('settings', '/settings');
  const { selector, dispatch } = useDispatchselector();
 
  const cart = selector((state) => state.cartSlice);

  const b = cart?.billingInfo;
  const data = cart?.carts;

  const amount = useCheckoutTotal()

  const info: z.infer<typeof billing> = {
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
