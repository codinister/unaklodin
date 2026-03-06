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

const Filter = ({
  data,
  dispatchFn,
}: {
  data: ItemTypes[];
  dispatchFn: Function;
}) => {
  return (
    <Sheet>
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
          <Sort dispatchFn={dispatchFn} />
          <Size data={data} dispatchFn={dispatchFn} />
          <Price dispatchFn={dispatchFn} />
          <Colours data={data} dispatchFn={dispatchFn} />
          <Categories data={data} dispatchFn={dispatchFn} />

        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
