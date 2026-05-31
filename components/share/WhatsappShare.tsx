'use client';

import { WhatsappIcon } from 'react-share';

const WhatsappShare = ({ url }: { url: string }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;

  return (
    <a href={whatsappUrl} title="Share on WhatsApp">
      <WhatsappIcon size={40} round />
    </a>
  );
};

export default WhatsappShare;
