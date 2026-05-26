'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Youtubebox from './Youtubebox';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeUpCustom, staggerChildren } from '@/variants/variants';

const Hero = () => {
  const heroData = useGetQuery('hero', '/v1/hero') || [];

  return (
    <motion.div 
            variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.3,
        }}
    className="relative">
      <Youtubebox url={heroData[0] ? heroData[0]?.link : ''} />

      <div
        className="absolute left-6 sm:left-7.5 bottom-6 sm:bottom-15 text-white  py-10 w-70"
      >
        <motion.h5
          custom={0.4}
          variants={fadeUpCustom}
          className="font-extrabold"
        >
          In Our Element, In Any Element
        </motion.h5>
        <motion.p custom={0.5} variants={fadeUpCustom} className=" mb-4">
          Effortless styles destined for the unpredictable
        </motion.p>

        <motion.div custom={0.6} variants={fadeUpCustom}>
          <Link href="/unisex">
            <Button size="lg">Shop Unisex</Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
