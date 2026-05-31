'use client';

import { LinkedinIcon } from "react-share";

const LinkedinShare = ({ url }: { url: string }) => {

  const urlEncode = encodeURIComponent(url);

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${urlEncode}`;

  return (
    <a href={linkedinUrl} title="Share on Linkedin">
      <LinkedinIcon size={40} round />
    </a>
  );
};

export default LinkedinShare;
