'use client';

import ProductPageContent from '@/components/products/ProductPageContent';
import { filterAccessoriesItems } from '@/state/redux/reducers/accessoriesSlice';


const Accessories = () => {
  return <ProductPageContent type="accessories" filterItems={filterAccessoriesItems} />;
};

export default Accessories;
