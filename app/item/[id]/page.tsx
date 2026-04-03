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
import useCurrency from '@/utils/useCurrency';
import { ItemTypes } from '@/types/types';

const Item = () => {
  const [scrolls, setScrolls] = useState(0);
  const param = useParams();

  const id = decodeURIComponent(String(param.id));

  const data = useGetQuery('general', `/v1/products/${id}`) || [];

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrolls(latest);
  });

  const { defaultPrice, currency } = useCurrency();

  return (
    <>
      <div className="cont flex-col sm:flex-row flex gap-4 mb-6">
        <div className="flex-2">
          <ImageBox data={data} />

          <Accordion
            type="single"
            collapsible
            defaultValue=""
            className="w-full mt-6"
          >
            <AccordionItem
              className="border-t-gray-400 border-t-2"
              value="desc"
            >
              <AccordionTrigger>
                <h6>Description</h6>
              </AccordionTrigger>
              <AccordionContent>
                <PortableText value={data[0]?.description} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="border-t-gray-400 border-t-2"
              value="features"
            >
              <AccordionTrigger>
                <h6>Features</h6>
              </AccordionTrigger>
              <AccordionContent>
                {data[0]?.features?.length > 0
                  ? data[0]?.features.map(
                      (
                        v: { title: string; sub_title: string; body: any },
                        k: number,
                      ) => {
                        return (
                          <div key={k} className="mb-6">
                            <h6>{v?.title}</h6>
                            <p>{v?.sub_title}</p>
                            <div className="mt-4">
                              <PortableText value={v?.body} />
                            </div>
                          </div>
                        );
                      },
                    )
                  : ''}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex-1">
          <Description
            data={data.map((v: ItemTypes) => {
              return {
                ...v,
                price: Number(defaultPrice(v?.dollarPrice, v?.cediPrice)),
                currency,
              };
            })}
          />
        </div>
      </div>

      <div className="mb-10 cont">
        <p className="mb-6 font-bold">You May Also Like</p>
        <SimilarItems type={data[0]?.type} />
      </div>
    </>
  );
};

export default Item;
