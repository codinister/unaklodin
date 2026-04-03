'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ItemTypes } from '@/types/types';
import useDispatchselector from '@/state/redux/useDispatchselector';
import getColours from '@/utils/getColours';
import Colour from '@/components/Colour';

const Colours = ({
  data,
  dispatchFn,
  setOpen,
}: {
  data: ItemTypes[];
  dispatchFn: Function;
  setOpen: (open: boolean) => void;
}) => {
  const { dispatch } = useDispatchselector();

  const colors = getColours(data);

  const handleClick = (value: string) => {
    dispatch(
      dispatchFn({
        payload: value,
        type: 'colour',
      }),
    );

    setOpen(false);
  };

  return (
    <AccordionItem value="colour">
      <AccordionTrigger>Colour</AccordionTrigger>
      <AccordionContent className="flex gap-2 flex-wrap">
        {colors.map((v, k) => (
          <Colour
            onClick={() => handleClick(v.title)}
            key={k}
            colorName={v?.title}
            hex={v?.hex}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Colours;
