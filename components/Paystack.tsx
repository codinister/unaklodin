import { usePaystackPayment } from 'react-paystack';
import format_number from '@/utils/format_number';

import { Button } from './ui/button';
import useCartBilling from '@/utils/useCartBilling';

const Paystack = () => {
  const {
    currency,
    amount,
    info: { country, firstname, lastname, email, address, city, phone },
    reference,
    date,
  } = useCartBilling();

  const onSuccess = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const config = {
    reference,
    email,
    currency,
    amount: Number(amount * 100), //Amount is in the country's lowest currency. E.g Pesewas, so 100 pesewas = 10 pesewas
    publicKey: 'pk_live_86d2df60ee9f3ef0336b8db3cd09ecb92d00a22b',
  };

  const initializePayment = usePaystackPayment(config);

  const cancelOrder = () => {};

  return (
    <>
      <div className="mb-6">
        <div className="p-6 bg-muted">
          <h6 className="mb-4">Order Summary</h6>

          <div className="flex gap-4 mb-2">
            <div className="flex-1">Order Number</div>
            <div className="flex-1">{reference}</div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">Order Date</div>
            <div className="flex-1">{date}</div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">Total</div>
            <div className="flex-1">
              {currency}
              {format_number(String(amount))}
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">Payment Method</div>
            <div className="flex-1">Paystack</div>
          </div>
        </div>

        <div className="bg-muted p-6">
          <h6 className="mb-4">Billing Info</h6>

          <div className="flex gap-4 mb-2">
            <div className="flex-1">Fullname</div>
            <div className="flex-1">
              {firstname} {lastname}
            </div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">Country</div>
            <div className="flex-1">{country}</div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">Phone</div>
            <div className="flex-1">{phone}</div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">Email</div>
            <div className="flex-1">{email}</div>
          </div>

          <div className="flex gap-4 mb-2">
            <div className="flex-1">City</div>
            <div className="flex-1">{city}</div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">Address:</div>
            <div className="flex-1">{address}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => {
            initializePayment({ onSuccess, onClose });
          }}
        >
          PAY NOW
        </Button>
        <Button onClick={cancelOrder} variant="outline">
          CANCEL ORDER
        </Button>
      </div>
    </>
  );
};

export default Paystack;
