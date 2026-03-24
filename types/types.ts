import { billing } from '@/schema/schemaTypes';
import { z } from 'zod';

export type ItemTypes = {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  cat: string;
  colour: {
    title: string;
    hex: string;
  }[];
  size: string[];
  description: any;
  excerpt: string;
  features: string[];
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
