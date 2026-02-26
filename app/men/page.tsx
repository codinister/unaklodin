'use client';

import Breadcramp from '@/components/products/Breadcramp';
import Filter from '@/components/products/Filter';
import TotalProduct from '@/components/products/TotalProduct';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { ItemTypes } from '@/types/types';

const Men = () => {
  const { selector } = useDispatchselector();

  const state = selector((state) => state.menSlice) || [];
  const data: ItemTypes[] = state?.data || [];







  return (
    <div className="container mx-auto ">
      <Breadcramp page_title="Men's Wear" link="" link_name="" />

      <div className="flex justify-between py-10 ">
        <TotalProduct total={data.length} />

        <Filter data={data} />
      </div>
    </div>
  );
};

export default Men;
