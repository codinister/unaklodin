'use client';

import { WhatsappIcon } from 'react-share';
import { useState, useEffect } from 'react';

const Whatsapp = ({ phone, url }: { phone: number; url: string }) => {
  const [getPhone, setPhone] = useState(0);
  const [getUrl, setUrl] = useState('');
  const encodeUrl = encodeURIComponent(url);
  useEffect(() => {
    setPhone(phone);
    setUrl(encodeUrl);
  }, [phone, encodeUrl]);



  return (
    <a href={`https://wa.me/${getPhone}?text=${getUrl}`}>
      <WhatsappIcon size={40} round />
    </a>
  );
};

export default Whatsapp;
