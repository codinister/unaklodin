'use client';

import useGetQuery from '@/state/query/useGetQuery';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { ItemTypes } from '@/types/types';
import Link from 'next/link';

const MenWidget = () => {
  const sett = useGetQuery('settings', '/settings') || [];
  const { selector } = useDispatchselector();
  const state = selector((state) => state.menSlice) || [];
  const data: ItemTypes[] = state?.data || [];

  return (
    <div className="bg-white sm:p-6 rounded-xl mb-10 sm:mx-6">
      {data.slice(0, 5).map((v, k) => (
        <Link key={k} href={`/item/${v.id}`}>
          <div
            className="mb-6  flex gap-6 flex-wrap flex-col sm:flex-row"
          >
            <div
              className="h-20 p-40 sm:p-0 flex-2"
              style={{
                backgroundImage: `url(${v.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div className="flex-4 flex items-center">
              <div>
                <p className="mb-2">{v.title}</p>
                <p className="font-bold">
                  {sett[0]?.currency}
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
