'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { Input } from '@/components/ui/input';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Price = ({
  dispatchFn,
  setOpen,
}: {
  dispatchFn: Function;
  setOpen: (open: boolean) => void;
}) => {
  const [num, setNum] = useState({ min: 0, max: 0 });
  const { dispatch } = useDispatchselector();

  const handleClick = () => {
    if (num.min > 0 && num.max > 0) {
      dispatch(
        dispatchFn({
          payload: num,
          type: 'price',
        }),
      );

      setOpen(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNum({
      ...num,
      [name]: value,
    });
  };

  return (
    <AccordionItem value="price">
      <AccordionTrigger>Price</AccordionTrigger>
      <AccordionContent className="items-center flex gap-2">
        <Input
          name="min"
          onChange={handleChange}
          placeholder="Min"
          type="number"
        />
        <Input
          onChange={handleChange}
          placeholder="Max"
          type="number"
          name="max"
        />
        <Button onClick={handleClick} size="sm">
          Search
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Price;
