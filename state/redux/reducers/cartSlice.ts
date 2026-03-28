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
      const {
        id,
        title,
        price,
        cediPrice,
        dollarPrice,
        size,
        colour,
        thumbnail,
        qty,
        total,
        createdAt,
        date,
      } = actions.payload;

      state.carts = {
        ...state.carts,
        [id]: {
          id,
          qty,
          total,
          title,
          price,
          cediPrice,
          dollarPrice,
          size,
          colour,
          thumbnail,
          createdAt,
          date,
        },
      };
    },
    deleteCart(state, actions) {
      const id = actions.payload;

      if (state.carts[id]) {
        delete state.carts[id];
      }
    },
    clearCart(state) {
      state.carts = {};
    },
  },
});

export default cartSlice.reducer;
export const { addBilling, clearCart, deleteBilling, addCart, deleteCart } =
  cartSlice.actions;
