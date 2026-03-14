import { cartItemType, ItemTypes } from '@/types/types';
import { addCart, deleteCart } from '@/state/redux/reducers/cartSlice';
import useDispatchselector from '@/state/redux/useDispatchselector';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';

import EstTotal from './EstTotal';
import Carts from './Carts';

const AddToCartBtn = ({
  data,
  getSize,
  getColour,
}: {
  data: ItemTypes[];
  getSize: string;
  getColour: string;
}) => {
  const { dispatch } = useDispatchselector();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    dispatch(
      addCart({
        id: data[0]?.id,
        qty: 1,
        total: data[0]?.price,
        title: data[0]?.title,
        price: data[0]?.price,
        size: getSize,
        colour: getColour,
        thumbnail: data[0]?.thumbnail,
      }),
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="w-full border border-primary  bg-primary hover:bg-white hover:text-primary text-white text-center p-2 rounded-sm cursor-pointer"
        onClick={handleClick}
      >
        Add to Cart
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] sm:w-[40%]">
        <SheetTitle className="border-b border-b-gray-400 p-3">
          <h6>Added to Cart!</h6>
        </SheetTitle>
        <div className="h-full pb-10 overflow-y-scroll">
          <Carts checkout={false} />
          <EstTotal />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddToCartBtn;
