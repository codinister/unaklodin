'use client';

import useDispatchselector from '@/state/redux/useDispatchselector';
import { useRouter } from 'next/navigation';

const useRedirect = () => {
  const route = useRouter();
  const { selector } = useDispatchselector();
  const cart = selector((state) => state.cartSlice);
  if (Object.values(cart.carts).length < 1) {
    route.push('/');
    return 
  }
};

export default useRedirect;
