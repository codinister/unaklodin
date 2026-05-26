'use client';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { useState } from 'react';
import EmailModal from './email/EmailModal';

const Email = () => {
  const [val, setVal] = useState(false);

  const handleClick = () => {
    document.body.style.overflow = 'hidden';
    setVal(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="cursor-pointer w-10 h-10 text-2xl  bg-black rounded-full flex items-center justify-center text-white"
      >
        <HiOutlineEnvelope />
      </button>

      <EmailModal val={val} setVal={setVal} />
    </>
  );
};

export default Email;
