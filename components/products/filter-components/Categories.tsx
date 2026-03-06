'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ItemTypes } from '@/types/types';
import useDispatchselector from '@/state/redux/useDispatchselector';
import getCategories from '@/utils/getCategories';

const Categories = ({
  data,
  dispatchFn,
}: {
  data: ItemTypes[];
  dispatchFn: Function;
}) => {
  const { dispatch } = useDispatchselector();

  const category = getCategories(data);

  const handleClick = (value: string) => {
    dispatch(
      dispatchFn({
        payload: value,
        type: 'cat',
      }),
    );
  };

  return (
    <AccordionItem value="cat">
      <AccordionTrigger>Category Type</AccordionTrigger>
      <AccordionContent className="flex gap-3 flex-wrap">
        {category.map((v, k) => (
          <button
            className="cursor-pointer border-2 border-black/10 rounded-lg py-1 px-2"
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

export default Categories;
