'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';


const Modal = ({
  img,
  showModal,
  setShowModal,
}: {
  img: string;
  showModal: boolean;
  setShowModal: Function;
}) => {
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setPageLoad(true);
  }, []);

  if (pageLoad) {
    return createPortal(
  
        <ModalContent
          img={img}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ,
      document.querySelector('body') as HTMLBodyElement,
    );
  }
};

export default Modal;
