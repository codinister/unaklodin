'use client';

import { buttonAnimation } from '@/variants/variants';
import { WhatsappIcon } from 'react-share';
import { motion } from 'motion/react';

const WhatsappShare = ({ url }: { url: string }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;

  return (
    <motion.a {...buttonAnimation} href={whatsappUrl} title="Share on WhatsApp">
      <WhatsappIcon size={30} round />
    </motion.a>
  );
};

export default WhatsappShare;
