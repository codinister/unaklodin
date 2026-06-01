'use client';

import { buttonAnimation } from '@/variants/variants';
import { TwitterIcon } from 'react-share';
import {motion} from 'motion/react'

const TwitterShare = ({ url, text }: { text: string; url: string }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;

  return (
     <motion.a {...buttonAnimation} href={twitterUrl} title="Share on Twitter">
      <TwitterIcon size={30} round />
    </motion.a>
  );
};

export default TwitterShare;
