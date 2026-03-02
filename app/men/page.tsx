'use client';

import Breadcramp from '@/components/products/Breadcramp';
import Filter from '@/components/products/Filter';
import Item from '@/components/products/Item';
import TotalProduct from '@/components/products/TotalProduct';
import useGetQuery from '@/state/query/useGetQuery';
import { addMenData } from '@/state/redux/reducers/menSlice';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { ItemTypes } from '@/types/types';
import getColour from '@/utils/getColour';

const Men = () => {
  const { selector } = useDispatchselector();

  const state = selector((state) => state.menSlice) || [];

  const data: ItemTypes[] = state?.data || [];



  const sett = useGetQuery('settings', '/settings') || [];

  return (
    <div className="cont mb-10">
      <Breadcramp page_title="Men's Wear" link="" link_name="" />

      <div className="flex justify-between py-10 ">
        <TotalProduct total={data?.length} />
        <Filter data={data} dispatchFn={addMenData} />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 flex-wrap sm:mx-auto sm:justify-center">
        {data.map((v, k) => {
          const totalColours = v.colour ? getColour(v.colour).length : 1;

          return (
            <div className="sm:basis-92" key={k}>
              <Item
                title={v.title}
                price={v.price}
                totalColours={totalColours}
                img={v.thumbnail}
                gallery={v.gallery}
                currency={sett[0]?.currency}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Men;
