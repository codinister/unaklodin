import { z } from 'zod';
import { PortableTextBlock } from 'next-sanity';

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
  description: string;
  excerpt: string;
  features: {
    title: string;
    sub_title: string;
    body: PortableTextBlock;
  }[];
  gallery: string[];
  price: string;
  product: string;
  stock: string;
  sub_title: string;
  thumbnail: string;
};
