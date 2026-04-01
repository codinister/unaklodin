'use client';

import ItemBanner from '@/components/ItemBanner';
import Breadcramp from '@/components/products/Breadcramp';
import Filter from '@/components/products/Filter';
import Item from '@/components/products/Item';
import TotalProduct from '@/components/products/TotalProduct';
import useGetQuery from '@/state/query/useGetQuery';
import { filterWomenItems } from '@/state/redux/reducers/womenSlice';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { ItemTypes } from '@/types/types';
import getColour from '@/utils/getColour';
import useCurrency from '@/utils/useCurrency';
import { useParams } from 'next/navigation';

const Women = () => {
  const { selector } = useDispatchselector();

  const param = useParams();

  const state = selector((state) => state.womenSlice) || [];
  const data: ItemTypes[] = state?.data || [];
  const dupData: ItemTypes[] = state?.dupData || [];

  const { defaultPrice, currency } = useCurrency();
  const ban = useGetQuery('banners', '/v1/banners/women-page') || [];

  return (
    <>
     <ItemBanner
        img={
          ban[0] && ban[0]?.images[1] ? ban[0]?.images[1] : ban[0]?.images[0]
        }
      />

      <div className="cont mb-10">
        <Breadcramp page_title="Women's Wear" link="" link_name="" />

        <div className="flex justify-between py-10 ">
          <TotalProduct total={data.length} />
          <Filter data={dupData} dispatchFn={filterWomenItems} />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 flex-wrap sm:mx-auto sm:justify-center">
          {data
            .filter((v) => v.cat === decodeURIComponent(String(param.id)))
            .map((v, k) => {
              const totalColours = v.colour ? getColour(v.colour).length : 1;
              const fn = (val: Boolean) => {};
              return (
                <div className="sm:basis-92" key={k}>
                  <Item
                    closeOpenFn={fn}
                    id={v.id}
                    title={v.title}
                    price={defaultPrice(v.dollarPrice, v.cediPrice)}
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
    </>
  );
};

export default Women;
