'use client';

import { buttonAnimation } from "@/variants/variants";
import { LinkedinIcon } from "react-share";
import {motion} from 'motion/react'

const LinkedinShare = ({ url }: { url: string }) => {

  const urlEncode = encodeURIComponent(url);

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${urlEncode}`;

  return (
     <motion.a {...buttonAnimation} href={linkedinUrl} title="Share on Linkedin">
      <LinkedinIcon size={30} round />
    </motion.a>
  );
};

export default LinkedinShare;
