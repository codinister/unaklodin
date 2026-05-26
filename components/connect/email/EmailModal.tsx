'use client';

import { createPortal } from 'react-dom';
import EmailForm from './EmailForm';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';


const EmailModal = ({ val, setVal }: { val: boolean; setVal: Function }) => {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);


  
const isMobile = useMediaQuery({
  maxWidth: 768,
});

  const ModalBox = () => {
    const handleClick = () => {
     isMobile ? document.body.style.overflowY = 'scroll' : ''
      setVal(false);
    };

    return val ? (
      <>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: val ? 1 : 0,
            transition: {
              ease: 'easeIn',
              duration: 0.2,
            },
          }}
          onClick={handleClick}
          className="z-50 fixed inset-0  bg-black/70"
        ></motion.div>
  
        <EmailForm  onClick={handleClick} />
      </>
    ) : (
      ''
    );
  };
  return pageReady
    ? createPortal(
        <ModalBox />,
        document.querySelector('body') as HTMLBodyElement,
      )
    : '';
};

export default EmailModal;
