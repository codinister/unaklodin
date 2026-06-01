'use client';

import { FaShare } from 'react-icons/fa';
import { motion } from 'motion/react';
import { buttonAnimation } from '@/variants/variants';

const Share = ({ url }: { url: string }) => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;



  return (
    <motion.a {...buttonAnimation} href={whatsappUrl} title="Share on whatsapp">
      <FaShare size={25} />
    </motion.a>
  );
};

export default Share;
