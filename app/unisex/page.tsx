'use client';

import ProductPageContent from '@/components/products/ProductPageContent';
import { filterUnisexItems } from '@/state/redux/reducers/unisexSlice';


const Unisex = () => {
  return <ProductPageContent type="unisex" filterItems={filterUnisexItems} />;
};

export default Unisex
