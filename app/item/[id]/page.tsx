'use client';
import Description from '@/components/singleItem/Description';
import ImageBox from '@/components/singleItem/ImageBox';
import useGetQuery from '@/state/query/useGetQuery';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { PortableText } from '@portabletext/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SimilarItems from '@/components/SimilarItems';


const Item = () => {
  const [scrolls, setScrolls] = useState(0);
  const param = useParams();

  const id = decodeURIComponent(String(param.id));

  const data = useGetQuery('general', `/general/${id}`) || [];

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrolls(latest);
  });

  return (
    <>
      <div className="cont flex-col sm:flex-row flex gap-4">

        <div className="flex-2">
          <ImageBox data={data} />
        </div>

        <div className="flex-1">
          <Description data={data} />
        </div>
      </div>

      <div className="p-6 sm:p-0 sm:w-200 mx-auto my-15">
        <Accordion type="single" collapsible defaultValue="desc" className="w-full">
          <AccordionItem value="desc">
            <AccordionTrigger>
              <h6>{data[0]?.sub_title}</h6>
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
