'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { useState } from 'react';

const Sort = ({
  dispatchFn,
  setOpen,
}: {
  dispatchFn: Function;
  setOpen: (open: boolean) => void;
}) => {
  const { dispatch } = useDispatchselector();


  const sortChange = (value: string) => {
    dispatch(
      dispatchFn({
        payload: value,
        type: 'sort',
      }),
    );

    setOpen(false);
  };

  return (
    <AccordionItem value="sort">
      <AccordionTrigger>Sort</AccordionTrigger>
      <AccordionContent>
        <RadioGroup
          defaultValue=""
          className="w-fit"
          onValueChange={(value) => sortChange(value)}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="lowtohigh" id="r1" />
            <Label htmlFor="r1">Prices: Low to High</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="hightolow" id="r2" />
            <Label htmlFor="r2">Prices: High to Low</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="whatsnew" id="r3" />
            <Label htmlFor="r3">What's New</Label>
          </div>
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Sort;
