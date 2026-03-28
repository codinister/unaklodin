'use client';

import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { ItemTypes } from '@/types/types';
import useCurrency from '@/utils/useCurrency';
import Link from 'next/link';

const MenWidget = () => {
  const { currency } = useCurrency();
  const { selector } = useDispatchselector();
  const state = selector((state) => state.menSlice) || [];
  const data: ItemTypes[] = state?.data || [];

  return (
    <div className=" bg-white   my-6">
      {data.slice(0, 5).map((v, k) => (
        <Link key={k} href={`/item/${v.id}`}>
          <div
            className="mb-6  flex gap-6 flex-wrap flex-col sm:flex-row"
          >
            <div
              className="h-25 p-40 sm:p-0 flex-3"
              style={{
                backgroundImage: `url(${v.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div className="flex-3 flex items-center">
              <div>
                <p className="font-bold mb-2">{v.title}</p>
                <p className="font-bold">
                  {currency}
                  {v.price}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenWidget;
