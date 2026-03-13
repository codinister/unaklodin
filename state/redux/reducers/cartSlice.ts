import { cartType, ItemTypes } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: cartType = {
  carts: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, actions) {
      const { id, title, price, size, colour, thumbnail, qty, total } =
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
export const { addCart, deleteCart } = cartSlice.actions;
