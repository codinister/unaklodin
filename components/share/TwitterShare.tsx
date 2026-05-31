'use client';

import { TwitterIcon } from 'react-share';

const TwitterShare = ({ url, text }: { text: string; url: string }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;

  return (
    <a href={twitterUrl} title="Share on Twitter">
      <TwitterIcon size={40} round />
    </a>
  );
};

export default TwitterShare;
