'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

const CartButton = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link href={link}>
      <Button className="w-full">{title}</Button>
    </Link>
  );
};

export default CartButton;
