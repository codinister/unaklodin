import { billing } from '@/schema/schemaTypes';
import { z } from 'zod';

export type ItemTypes = {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  cat: string;
  cediPrice: number;
  dollarPrice: number;
  currency: string;
  colour: {
    title: string;
    hex: string;
  }[];
  size: string[];
  description: any;
  excerpt: string;
  features: { title: string; sub_title: string; body: any }[];
  gallery: string[];
  price: number;
  product: string;
  stock: number;
  sub_title: string;
  thumbnail: string;
  date: string;
};

export type stateTypes = {
  data: ItemTypes[];
  dupData: ItemTypes[];
  pending: string;
  error: string;
  cat: unknown[];
};

export type colourType = {
  title: string;
  hex: string;
};

export type ItemCard = {
  id: string;
  title: string;
  price: number;
  totalColours: number;
  img: string;
  gallery: string[];
  currency: string;
  closeOpenFn: Function;
};

export type cartItemType = {
  id: string;
  qty: number;
  total: number;
  title: string;
  price: number;
  cediPrice: number;
  dollarPrice: number;
  size: string;
  colour: string;
  thumbnail: string;
  createdAt: string;
  date: string;
};

export type cartType = {
  carts: Record<string, cartItemType>;
  billingInfo: z.infer<typeof billing>;
};

export type fadeLeftCustomType = {
  hidden: {
    opacity: number;
    x: number;
  };
  visible: (delay: number) => {
    opacity: number;
    x: number;
    transition: {
      delay: number;
      duration: number;
      ease: 'easeOut';
    };
  };
};

export type fadeUpCustomType = {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: (delay: number) => {
    opacity: number;
    y: number;
    transition: {
      delay: number;
      duration: number;
      ease: 'easeOut';
    };
  };
};
