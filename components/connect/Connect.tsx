'use client';

import Share from './Share';
import Email from './Email';
import Phone from './Phone';
import Whatsapp from './Whatsapp';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { motion } from 'motion/react';
import { useState } from 'react';
import useFetchdata from '@/state/query/useFetchdata';

const Connect = () => {

  const [clicked, setClicked] = useState(false);

  const data = useFetchdata('settings', 'settings');


  const encoded = encodeURIComponent("https://codenesta.com");
  const url = `https://wa.me/?text=${encoded}`;

  const whatsappEncode = encodeURIComponent(
    'Hello, I would like to make an enquiry.',
  );
  const whatsappUrl = `https://wa.me/${data[0]?.whatsapp}?text=${whatsappEncode}`;

  const phoneUrl = `tel:${data[0]?.whatsapp}`;
  return (
    <>
      <div className="fixed right-2 sm:right-12 z-10 top-[50%] -translate-y-[50%] w-10 h-10 ">
        <div
          className={`z-1 absolute left-0 ${clicked ? '-top-2' : 'bottom-0'} `}
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              top: clicked ? '-166px' : '-40px',
              transition: {
                ease: 'easeIn',
              },
            }}
            className="left-0   absolute"
          >
            <Share url={url} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              top: clicked ? '-124px' : '-40px',

              transition: {
                ease: 'easeIn',
              },
            }}
            className="left-0   absolute"
          >
            <Email />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              top: clicked ? '-82px' : '-40px',
              transition: {
                ease: 'easeIn',
              },
            }}
            className="left-0   absolute"
          >
            <Whatsapp url={whatsappUrl} />
          </motion.div>

          <div className={`left-0 bottom-0 absolute`}>
            <Phone url={phoneUrl} />
          </div>
        </div>

        <button
          onClick={() => setClicked(true)}
          className={`cursor-pointer z-3 absolute w-10 h-10 text-xl  bg-red-800 rounded-full flex items-center justify-center text-white ${clicked ? 'hidden' : 'block'}`}
        >
          <BsThreeDots />
        </button>

        <button
          onClick={() => setClicked(false)}
          className={`cursor-pointer z-2 absolute w-10 h-10 text-xl  bg-red-800 rounded-full flex items-center justify-center text-white ${clicked ? 'block' : 'hidden'}`}
        >
          <MdOutlineClose />
        </button>
      </div>
    </>
  );
};

export default Connect;
