'use client';

import ProductPage from '@/components/products/ProductPage';
import { useParams } from 'next/navigation';
import productData from '@/components/products/productData';
import filterDataArr from '@/components/products/filterDataArr';
import useProductData from '@/components/products/useProductData';

const ProductPageContent = ({type, filterItems}: {type: string; filterItems: Function}) => {
  const param = useParams();
  const paramId = decodeURIComponent(String(param.id)) || '';

  const { data, dupData } = useProductData();

  const dataRes = productData(data, paramId, type);
  const catData = productData(dupData, paramId, type);

  const filterData = filterDataArr(data, dupData, type);

  return (
    <ProductPage
      filterItems={filterItems}
      dupData={filterData}
      data={dataRes}
      catData={catData}
    />
  );
};

export default ProductPageContent;
