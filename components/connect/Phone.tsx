'use client';
import { FiPhone } from 'react-icons/fi';

const Phone = ({url}: {url: string}) => {
  return (
    <a href={url} className="w-10 h-10 text-2xl  bg-blue-600 rounded-full flex items-center justify-center text-white">
      <FiPhone />
    </a>
  );
};

export default Phone;
