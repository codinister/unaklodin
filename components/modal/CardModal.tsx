'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaCircleExclamation } from 'react-icons/fa6';
import { Button } from '../ui/button';

type CartModalContentType = {
  value: Boolean;
  email: string;
  showModal: Function;
  hideModal: Function;
};
const CartModalContent = ({
  value,
  email,
  showModal,
  hideModal,
}: CartModalContentType) => {
  useEffect(() => {
    if (value) {
      document.body.style.overflow = 'hidden';
    }
  }, [value]);

  if (value) {
    return (
      <>
        <div
          className="w-screen h-screen z-20 fixed top-0 left-0 bg-black/40"
          onClick={() => hideModal()}
        ></div>
        <div className="z-25 absolute w-100 h-80 p-6 bg-white transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] flex items-center justify-center">
          <div>
            <FaCircleExclamation className="text-green-700 mx-auto mb-6 text-5xl" />
            <div className="text-center">
              <h6>Thank you for your order!</h6>
              <p className="my-6">
                Your order is being processed, and an invoice has been sent to
                your email {email}.
              </p>
              <Button onClick={() => hideModal()} variant="outline">
                Close
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

const CardModal = ({
  value,
  email,
  showModal,
  hideModal,
}: CartModalContentType) => {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);

  if (pageReady) {
    return createPortal(
      <CartModalContent
        value={value}
        email={email}
        showModal={showModal}
        hideModal={hideModal}
      />,
      document.querySelector('body') as HTMLBodyElement,
    );
  }
};

export default CardModal;
