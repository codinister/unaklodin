'use client';

import ProductPageContent from '@/components/products/ProductPageContent';
import { filterMenItems } from '@/state/redux/reducers/menSlice';

const Men = () => {
  return <ProductPageContent type="men" filterItems={filterMenItems} />;
};

export default Men;
