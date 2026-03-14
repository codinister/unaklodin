'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';

const ModalContent = ({
  img,
  showModal,
  setShowModal,
}: {
  img: string;
  showModal: boolean;
  setShowModal: Function;
}) => {
  if (showModal) {
    return (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: 'easeIn',
                duration: 0.2,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                ease: 'easeIn',
                duration: 0.6,
              },
            }}
            onClick={() => setShowModal(false)}
            className="fixed left-0 top-0 z-10 bg-black/40 w-screen h-screen"
          ></motion.div>

          <motion.div
            className="overflow-y-scroll z-20 fixed 
            w-[80%]
            sm:w-[50%] h-130 left-[50%] top-[50%] transform -translate-y-[50%] -translate-x-[50%]"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.2,
                ease: 'easeIn',
                duration: 0.2,
              },
            }}
          >
            {img ? <Image src={img} alt="" width="1000" height="1300" /> : ''}
          </motion.div>
        </>
    );
  }
};

export default ModalContent;
