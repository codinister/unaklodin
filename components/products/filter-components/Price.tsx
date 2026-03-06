'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { Input } from '@/components/ui/input';
import { ChangeEvent, useEffect, useState } from 'react';

const Price = ({ dispatchFn }: { dispatchFn: Function }) => {
  const [num, setNum] = useState({ min: 0, max: 0 });
  const { dispatch } = useDispatchselector();

  useEffect(() => {
    if (num.min > 0 && num.max > 0) {
      dispatch(
        dispatchFn({
          payload: num,
          type: 'price',
        }),
      );
    }
  }, [num, dispatch]);

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
      <AccordionContent className="flex gap-2">
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
      </AccordionContent>
    </AccordionItem>
  );
};

export default Price;
