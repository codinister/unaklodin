'use client';

import { WhatsappIcon } from 'react-share';

interface WhatsappProps {
  phone: number | string;
  url: string;
}

const Whatsapp = ({ phone, url }: WhatsappProps) => {
  const encodedUrl = encodeURIComponent(url);

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodedUrl}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on WhatsApp"
    >
      <WhatsappIcon size={40} round />
    </a>
  );
};

export default Whatsapp;