import { z } from 'zod';

import { PortableTextBlock } from '@portabletext/types';
import { PersistPartial } from 'redux-persist/es/persistReducer';

export type dollarRateType = string;

export type productsType = {
  id: string;
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  cat: string;
  colour: {
    title: string;
    hex: string;
  }[];
  size: string[];
  description: PortableTextBlock;
  excerpt: string;
  features: {
    title: string;
    sub_title: string;
    body: PortableTextBlock;
  }[];
  gallery: string[];
  price: number | string;
  product: string;
  stock: string;
  sub_title: string;
  thumbnail: string;
  dollarPrice: number | string;
  cediPrice: number | string;
  date: Date;
  total: string; 
  qty: string;
};

export type ItemCard = {
  id: string;
  title: string;
  price: number | string;
  totalColours: string | number;
  img: string;
  gallery: string[];
  currency: string;
  closeOpenFn: Function;
};

export type cartItemType = {
  id: string;
  thumbnail: string;
  title: string;
  total: string;
  size: string;
  colour: string;
  qty: number;
  cediPrice: number;
  dollarPrice: number;
  price: number;
};


export type cartType = {
  carts: Record<string, unknown>;

  billingInfo: {
    country: string;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    city: string;
    phone: string;
  }
};

export type stateTypes = {
  data: productsType[],
  dupData: productsType[],
  pending: string,
  error: string,
  cat: unknown[],
};
