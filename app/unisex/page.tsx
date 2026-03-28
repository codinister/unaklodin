'use client';

import Breadcramp from '@/components/products/Breadcramp';
import Filter from '@/components/products/Filter';
import Item from '@/components/products/Item';
import TotalProduct from '@/components/products/TotalProduct';
import { filterUnisexItems } from '@/state/redux/reducers/unisexSlice';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { ItemTypes } from '@/types/types';
import getColour from '@/utils/getColour';
import useCurrency from '@/utils/useCurrency';

const Unisex = () => {
  const { selector } = useDispatchselector();

  const state = selector((state) => state.unisexSlice) || [];
  const data: ItemTypes[] = state?.data || [];
  const dupData: ItemTypes[] = state?.dupData || [];

  const { defaultPrice, currency } = useCurrency();
  

  return (
    <div className="cont mb-10">
      <Breadcramp page_title="Unisex Wear" link="" link_name="" />

      <div className="flex justify-between py-10 ">
        <TotalProduct total={data.length} />
        <Filter data={dupData} dispatchFn={filterUnisexItems} />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 flex-wrap sm:mx-auto sm:justify-center">
        {data.map((v, k) => {
          const totalColours = v.colour ? getColour(v.colour).length : 1;
          const fn = (val: Boolean) => {};
          return (
            <div className="sm:basis-92" key={k}>
              <Item
                closeOpenFn={fn}
                id={v.id}
                title={v.title}
                price={Number(defaultPrice(v.dollarPrice, v.cediPrice))}
                totalColours={totalColours}
                img={v.thumbnail}
                gallery={v.gallery}
                currency={currency}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Unisex;
