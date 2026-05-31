'use client';

import { FacebookIcon } from 'react-share';

const FacebookShare = ({ url }: { url: string }) => {
  const urlEncode = encodeURIComponent(url);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlEncode}`;

  return (
    <a href={facebookUrl} rel="noopener noreferrer">
      <FacebookIcon size={40} round />
    </a>
  );
};

export default FacebookShare;
