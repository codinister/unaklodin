'use client';

import ProductPage from '@/components/products/ProductPage';
import { useParams } from 'next/navigation';
import filterDataArr from '@/components/products/filterDataArr';
import useProductData from '@/components/products/useProductData';
import productData1 from './productData1';
import productData2 from './productData2';

const ProductPageContent = ({
  type,
  filterItems,
}: {
  type: string;
  filterItems: Function;
}) => {
  const param = useParams();
  const paramId = decodeURIComponent(String(param.id)) || '';

  const { data, dupData } = useProductData();

  const dataRes = productData2({
    data,
    paramId,
    type,
    dupData,
  });
  const catData = productData1({ dupData, paramId, type });

  const filterData = filterDataArr(data, dupData, type);

  return (
    <ProductPage
      filterItems={filterItems}
      dupData={filterData}
      data={dataRes}
      catData={catData}
      type={type}
    />
  );
};

export default ProductPageContent;
