'use client';

import { buttonAnimation } from '@/variants/variants';
import { FacebookIcon } from 'react-share';
import {motion} from 'motion/react'

const FacebookShare = ({ url }: { url: string }) => {
  const urlEncode = encodeURIComponent(url);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlEncode}`;

  return (
     <motion.a {...buttonAnimation} href={facebookUrl} title="Share on Facebook">
      <FacebookIcon size={30} round />
    </motion.a>
  );
};

export default FacebookShare;
