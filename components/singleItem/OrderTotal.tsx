'use client';
import useDispatchselector from '@/state/redux/useDispatchselector';
import useGetQuery from '@/state/query/useGetQuery';
import ItemsTotal from './ItemsTotal';
import CartTotal from './CartTotal';
const OrderTotal = () => {
  const { selector } = useDispatchselector();
  const cartData = selector((state) => state.cartSlice);

  const sett = useGetQuery('settings', '/settings');

  return (
    <div className="p-6 bg-muted mb-6">
      <div className="border-b border-b-gray-500  flex justify-between pb-3">
        <h6>
          Subtotal (<ItemsTotal /> items)
        </h6>
        <h6>
          <CartTotal />
        </h6>
      </div>

      <div className="border-b border-b-gray-500  flex justify-between py-4">
        <div>
          <p>Shipping</p>
          <p>Standard Shipping: Estimated Delivery: 2-4 business days</p>
        </div>
        <div>Free</div>
      </div>

      <div className="border-b border-b-gray-500  flex justify-between py-4">
        <h6>Order Total</h6>
        <h6>
          <CartTotal />
        </h6>
      </div>
    </div>
  );
};

export default OrderTotal;
