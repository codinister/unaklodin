'use client';

import { useEffect } from 'react';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { useRouter } from 'next/navigation';

const useRedirect = () => {
  const router = useRouter();
  const { selector } = useDispatchselector();

  const cart = selector((state) => state.cartSlice);

  useEffect(() => {
    if (!cart?.carts || Object.values(cart.carts).length < 1) {
      router.push('/');
    }
  }, [cart, router]);
};

export default useRedirect;