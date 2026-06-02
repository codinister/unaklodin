'use client';

import useGetQuery from '@/state/query/useGetQuery';
import ItemBanner from '../ItemBanner';
import Breadcramp from './Breadcramp';
import Filter from './Filter';
import TotalProduct from './TotalProduct';
import useCurrency from '@/utils/useCurrency';
import getColour from '@/utils/getColour';
import Item from './Item';
import { ItemTypes } from '@/types/types';

type ProductPageProps = {
  filterItems: Function;
  dupData: ItemTypes[];
  data: ItemTypes[];
  catData: ItemTypes[]
};
const ProductPage = ({ filterItems, dupData, data, catData }: ProductPageProps) => {

  const { defaultPrice, currency } = useCurrency();
  const ban = useGetQuery('banners', '/v1/banners/men-page') || [];

  return (
    <>
      <ItemBanner img={ban[0] ? ban[0]?.images[0] : ''} />

      <div className="cont mb-10">
        <Breadcramp page_title="Men's Wear" link="" link_name="" />

        <div className="flex justify-between py-10 ">
          <TotalProduct total={dupData?.length} />
          <Filter catData={catData} data={dupData} dispatchFn={filterItems} />
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

export default ProductPage;
