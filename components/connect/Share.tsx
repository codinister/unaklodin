'use client';
import { FaShare } from 'react-icons/fa6';

const Share = ({url}: {url: string}) => {
  return (
    <a href={url} className="w-10 h-10 text-xl  bg-black rounded-full flex items-center justify-center text-white">
      <FaShare />
    </a>
  );
};

export default Share;
