'use client';

import { WhatsappIcon } from 'react-share';

const Whatsapp = ({ phone, url }: { phone: number; url: string }) => {
  const encodeUrl = encodeURIComponent(url);

  if (phone && encodeUrl) {
    return (
      <a
        href={`https://wa.me/${phone}?text=${encodeUrl + ' ' + 'Hi%20there%21%20I%27m%20interested%20in%20this%20product.%20Is%20it%20still%20available%3F'}`}
      >
        <WhatsappIcon size={40} round />
      </a>
    );
  }
  return ''
};

export default Whatsapp;
