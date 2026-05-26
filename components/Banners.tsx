'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { fadeLeftCustom, staggerChildren } from '@/variants/variants';

import { motion } from 'motion/react';

const Banners = () => {
  const data = useGetQuery('banners', '/v1/banners/home-page') || [];

  return (
    <div className="mb-7 overflow-hidden flex gap-1 sm:flex-row flex-col">
      {data[0]
        ? data[0]?.images.slice(0, 2).map((v: string, k: number) => (
            <motion.div
            custom={(Number(k) + 1) * 0.2}
              variants={fadeLeftCustom}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              key={k}
              className="h-100 py-50 sm:py-0 flex-1"
              style={{
                backgroundImage: `url(${v})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></motion.div>
          ))
        : ''}
    </div>
  );
};

export default Banners;
