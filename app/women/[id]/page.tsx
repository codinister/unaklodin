'use client';

import ProductPageContent from '@/components/products/ProductPageContent';
import { filterWomenItems } from '@/state/redux/reducers/womenSlice';

const Women = () => {
  return <ProductPageContent type="women" filterItems={filterWomenItems} />;
};

export default Women;
