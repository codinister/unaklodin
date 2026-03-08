'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ItemTypes } from '@/types/types';
import getSizes from '@/utils/getSizes';
import useDispatchselector from '@/state/redux/useDispatchselector';

const Size = ({
  data,
  dispatchFn,
}: {
  data: ItemTypes[];
  dispatchFn: Function;
}) => {
  const sizes = getSizes(data);

  const { dispatch } = useDispatchselector();

  const handleClick = (value: string) => {
    dispatch(
      dispatchFn({
        type: 'size',
        payload: value,
      }),
    );
  };

  return (
    <AccordionItem value="size">
      <AccordionTrigger>Size</AccordionTrigger>
      <AccordionContent className="flex gap-2 flex-wrap">
        {sizes.map((v, k) => (
          <button
            className="cursor-pointer border-2 border-black/10 rounded-lg px-1"
            key={k}
            onClick={() => handleClick(v)}
          >
            {v}
          </button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Size;
