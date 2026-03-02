'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import asyncThunk from '../asyncThunk';
import { ItemTypes, menTypes } from '@/types/types';

const initialState: menTypes = {
  data: [],
  pending: '',
  error: '',
};

export const womenThunk = asyncThunk('/women', 'women', 'wom22s');

const womenSlice = createSlice({
  name: 'women',
  initialState,
  reducers: {
    addWomenData(state, action: PayloadAction<ItemTypes[]>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(womenThunk.pending, (state) => {
        state.data = [];
        state.error = '';
        state.pending = "Women's data fetching in progress";
      })
      .addCase(womenThunk.fulfilled, (state, action) => {
        state.data = action.payload.sort((a: { price: number }, b: { price: number }) => {
            if (a.price > b.price) return 1;
            else if (a.price < b.price) return -1;
            else return 0;
          }) || [];
      })
      .addCase(womenThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addWomenData } = womenSlice.actions;
export default womenSlice.reducer;
