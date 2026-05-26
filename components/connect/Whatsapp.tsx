'use client';
import { FaWhatsapp } from 'react-icons/fa6';

const Whatsapp = ({url}: {url: string}) => {
  return (
    <a href={url} className="w-10 h-10 text-2xl  bg-green-600 rounded-full flex items-center justify-center text-white">
      <FaWhatsapp />
    </a>
  );
};

export default Whatsapp;
