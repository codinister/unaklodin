'use client';

import { ItemTypes } from '@/types/types';

const sortSearch = (data: ItemTypes[], value: string) => {
  let output: ItemTypes[] = [];

  if (value === 'lowtohigh') {
    output =
      [...data].sort((a: { price: number }, b: { price: number }) => {
        if (a.price > b.price) return 1;
        else if (a.price < b.price) return -1;
        else return 0;
      }) || [];
  } else if (value === 'hightolow') {
    output =
      [...data].sort((a: { price: number }, b: { price: number }) => {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1;
        else return 0;
      }) || [];
  } else if (value === 'whatsnew') {
    output =
      [...data].sort((a: { updatedAt: string }, b: { updatedAt: string }) => {
        if (a.updatedAt > b.updatedAt) return -1;
        else if (a.updatedAt < b.updatedAt) return 1;
        else return 0;
      }) || [];
  }

  return output;
};

export default sortSearch;
