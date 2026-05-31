'use client';

import { WhatsappIcon } from 'react-share';

const Whatsapp = ({ phone, url }: { phone: number; url: string }) => {
  const encodeUrl = encodeURIComponent(url);

  console.log(`https://wa.me/${phone}?text=${encodeUrl}`)
  return (
    <a href={`https://wa.me/${phone}?text=${encodeUrl}`}>
      <WhatsappIcon size={40} round />
    </a>
  );
};

export default Whatsapp;
