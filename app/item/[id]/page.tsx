'use client';
import Description from '@/components/singleItem/Description';
import ImageBox from '@/components/singleItem/ImageBox';
import useGetQuery from '@/state/query/useGetQuery';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { PortableText } from '@portabletext/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SimilarItems from '@/components/SimilarItems';

const Item = () => {
  const param = useParams();

  const id = decodeURIComponent(String(param.id));

  const data = useGetQuery('general', `/general/${id}`) || [];

  return (
    <>
      <div className="cont flex gap-4">
        <div className="flex-2 h-150 overflow-y-scroll">
          <ImageBox data={data} />
        </div>
        <div className="flex-1">
          <Description data={data} />
        </div>
      </div>

      <div className="cont my-15">
        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="w-full"
        >
          <AccordionItem value="shipping">
            <AccordionTrigger>
              <h5>{data[0]?.sub_title}</h5>
            </AccordionTrigger>
            <AccordionContent>
              <PortableText value={data[0]?.description} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mb-10 cont">
        <p className="mb-6 font-bold">You May Also Like</p>
        <SimilarItems type={data[0]?.type} />
      </div>
    </>
  );
};

export default Item;
