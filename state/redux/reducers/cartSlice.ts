import { cartType, ItemTypes } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: cartType = {
  carts: {},
  billingInfo: {
    country: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBilling(state, actions) {
      state.billingInfo = actions.payload;
    },
    deleteBilling(state) {
      state.billingInfo = {
        country: '',
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        city: '',
        phone: '',
      };
    },
    addCart(state, actions) {
      const { id, title, price, size, colour, thumbnail, qty, total, createdAt } =
        actions.payload;

      state.carts = {
        ...state.carts,
        [id]: {
          id,
          qty,
          total,
          title,
          price,
          size,
          colour,
          thumbnail,
          createdAt
        },
      };
    },
    deleteCart(state, actions) {
      const id = actions.payload;

      if (state.carts[id]) {
        delete state.carts[id];
      }
    },
  },
});

export default cartSlice.reducer;
export const { addBilling, deleteBilling, addCart, deleteCart } =
  cartSlice.actions;
