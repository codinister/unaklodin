'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import SearchInput from './SearchInput';
import SearchBoxImages from './SearchBoxImages';
import QuestionsBox from '../QuestionsBox';
import React, { useEffect, useRef, useState } from 'react';
import { ItemTypes } from '@/types/types';
import fetchApi from '@/state/query/fetchApi';
import Item from '../products/Item';
import getColour from '@/utils/getColour';
import useCurrency from '@/utils/useCurrency';

const Searchbox = () => {
  const [open, setOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<ItemTypes[]>([]);
  const sett = useGetQuery('settings', '/v1/settings') || [];

  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    searchRef ? searchRef.current?.focus() : '';
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val.length >= 3) {
      const vals = await fetchApi({
        url: `/v1/search/${val}`,
      });

      setSearchResult(vals.data);
    }
  };

  const closeOpenFn = (val: any) => {
    setOpen(val);
  };

  const { defaultPrice, currency } = useCurrency();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <SearchInput />
      </SheetTrigger>
      <SheetContent className="h-screen overflow-y-scroll">
        <SheetTitle></SheetTitle>
        <div className="p-3 mt-2">
          <SearchInput ref={searchRef} onChange={handleChange} />
        </div>

        {searchResult?.length ? (
          <div className="flex gap-2 flex-wrap">
            {searchResult.map((v, k) => {
              const totalColours = v.colour ? getColour(v.colour).length : 1;

              return (
                <div key={k} className="basis-30 grow">
                  <Item
                    closeOpenFn={closeOpenFn}
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
        ) : (
          <div>
            <SearchBoxImages onClick={() => setOpen(false)} />
            <QuestionsBox onClick={() => setOpen(false)} />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Searchbox;
