import { cartItemType } from '@/types/types';
import { addCart, deleteCart } from '@/state/redux/reducers/cartSlice';
import useDispatchselector from '@/state/redux/useDispatchselector';
import CartItems from './CartItems';
import CheckoutItems from './CheckoutItems';

const Carts = ({ checkout = false }: { checkout: boolean }) => {
  const { dispatch, selector } = useDispatchselector();

  const cartData = selector((state) => state.cartSlice);

  const incrementalFn = (val: cartItemType) => {
    const qty = val.qty + 1;
    const total = val.price * qty;
    dispatch(
      addCart({
        ...val,
        qty,
        total,
      }),
    );
  };

  const decrementalFn = (val: cartItemType) => {
    const qty = val.qty - 1;
    if (qty > 0) {
      const total = val.price * qty;
      dispatch(
        addCart({
          ...val,
          qty,
          total,
        }),
      );
    }
  };

  const deletecartFn = (id: string) => {
    dispatch(deleteCart(id));
  };

  return (
    <>
      {Object.values(cartData.carts).map((v, k) => {
        if (checkout) {
          return <CheckoutItems key={k} value={v} />;
        } else {
          return (
            <CartItems
              key={k}
              value={v}
              incrementalFn={incrementalFn}
              decrementalFn={decrementalFn}
              deletecartFn={deletecartFn}
            />
          );
        }
      })}
    </>
  );
};

export default Carts;
