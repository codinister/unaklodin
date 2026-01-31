'use client';

import Image from 'next/image';
import { motion, Variants } from 'motion/react';
import CountUp from 'react-countup';

const Welcome = () => {
  const homeAnimations: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: [2, 1],
    },
  };
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="text-center">
        <motion.img
          variants={homeAnimations}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.3,
            duration: 0.4,
            ease: 'easeIn',
          }}
          className="mx-auto"
          src="/logo.jpg"
          alt=""
          width={300}
          height={100}
        />
        <motion.h2
          variants={homeAnimations}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.7,
            duration: 0.4,
            ease: 'easeIn',
          }}
          className="my-2xl font-extrabold text-3xl text-[#ff9e01]"
        >
          Website is being updated
        </motion.h2>
        <p className="flex justify-center items-center gap-2 mt-4">
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.4,
                ease: 'easeIn',
              },
            }}
            className=" w-7 h-7 rounded-full flex justify-center items-center bg-black text-white "
          >
            <CountUp delay={1} duration={1} end={4} />
          </motion.span>
          <motion.span
            variants={homeAnimations}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 1,
              duration: 0.4,
              ease: 'easeIn',
            }}
          >
            more days to complete
          </motion.span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
