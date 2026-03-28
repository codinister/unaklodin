import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: '',
};

const defaultCurrency = createSlice({
  name: 'defCur',
  initialState,
  reducers: {
    addCurrency(state, actions) {
      state.currency = actions.payload;
    },
  },
});

export default defaultCurrency.reducer;
export const { addCurrency } = defaultCurrency.actions;
