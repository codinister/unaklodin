'use client';

import { RiSortAsc } from 'react-icons/ri';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Accordion } from '@/components/ui/accordion';
import { ItemTypes } from '@/types/types';
import Colours from './filter-components/Colours';
import Sort from './filter-components/Sort';
import Size from './filter-components/Size';
import Price from './filter-components/Price';
import Categories from './filter-components/Categories';
import { useState } from 'react';

const Filter = ({
  data,
  dispatchFn,
}: {
  data: ItemTypes[];
  dispatchFn: Function;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex gap-2 items-center cursor-pointer">
        <span>Filter + Sort</span> <RiSortAsc />
      </SheetTrigger>
      <SheetContent className="p-6">
        <SheetTitle className="text-[18px]">Filter + Sort</SheetTitle>

        <Accordion
          type="multiple"
          className="max-w-lg"
          defaultValue={['notifications']}
        >
          <Sort setOpen={setOpen} dispatchFn={dispatchFn} />
          <Size setOpen={setOpen} data={data} dispatchFn={dispatchFn} />
          <Price setOpen={setOpen} dispatchFn={dispatchFn} />
          <Colours setOpen={setOpen} data={data} dispatchFn={dispatchFn} />
          <Categories setOpen={setOpen} data={data} dispatchFn={dispatchFn} />
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
