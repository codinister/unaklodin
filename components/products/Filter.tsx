'use client';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { RiSortAsc } from 'react-icons/ri';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import accordionData from '@/state/accordion/accordionData';
import { ItemTypes } from '@/types/types';
import { Input } from '../ui/input';
import getSizes from '@/utils/getSizes';
import getColours from '@/utils/getColours';
import Colour from '../Colour';
import getCategories from '@/utils/getCategories';

const Filter = ({ data }: { data: ItemTypes[] }) => {
  const sortChange = (e: any) => {
    console.log(e.target.value);
  };

  const sizes = getSizes(data);
  const color = getColours(data);
  const category = getCategories(data);

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
          <AccordionItem value="sort">
            <AccordionTrigger>Sort</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                defaultValue="lowtohigh"
                className="w-fit"
                onChange={sortChange}
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

          <AccordionItem value="size">
            <AccordionTrigger>Size</AccordionTrigger>
            <AccordionContent className="flex gap-2 flex-wrap">
              {sizes.map((v, k) => (
                <button
                  className="cursor-pointer border-2 border-black/10 rounded-lg px-1"
                  key={k}
                >
                  {v}
                </button>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent className="flex gap-2">
              <Input placeholder="Min" type="text" />
              <Input placeholder="Max" type="text" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="colour">
            <AccordionTrigger>Colour</AccordionTrigger>
            <AccordionContent className="flex gap-2 flex-wrap">
              {color.map((v, k) => (
                <Colour key={k} colorName={v?.title} hex={v?.hex} />
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cat">
            <AccordionTrigger>Category Type</AccordionTrigger>
            <AccordionContent className="flex gap-3 flex-wrap">
              {category.map((v, k) => (
                <button
                  className="cursor-pointer border-2 border-black/10 rounded-lg py-1 px-2"
                  key={k}
                >
                  {v}
                </button>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
