'use client';

import { FaShare } from 'react-icons/fa';
import { WhatsappIcon } from 'react-share';

const Share = ({ url }: { url: string }) => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;

  return (
    <a href={whatsappUrl}>
      <FaShare  className="text-[8px] w-10 h-10 rounded-full flex justify-center items-center  border border-black" />
    </a>
  );
};

export default Share;
