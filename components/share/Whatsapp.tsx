'use client';

import { buttonAnimation } from '@/variants/variants';
import { WhatsappIcon } from 'react-share';
import {motion} from 'motion/react'

interface WhatsappProps {
  phone: number | string;
  url: string;
}

const Whatsapp = ({ phone, url }: WhatsappProps) => {
  const encodedUrl = encodeURIComponent(url);

  return (
     <motion.a {...buttonAnimation}
      href={`https://wa.me/${phone}?text=${encodedUrl}`}
      title="Make enquiries!"
    >
      <WhatsappIcon size={30} round />
    </motion.a>
  );
};

export default Whatsapp;