'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import asyncThunk from '../asyncThunk';
import { ItemTypes, menTypes } from '@/types/types';

const initialState: menTypes = {
  data: [],
  pending: '',
  error: '',
};

export const unisexThunk = asyncThunk('/unisex', 'unisex', 'unix22s');

const unisexSlice = createSlice({
  name: 'unisex',
  initialState,
  reducers: {
    addUnisexData(state, action: PayloadAction<ItemTypes[]>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(unisexThunk.pending, (state) => {
        state.data = [];
        state.error = '';
        state.pending = 'Unisex data fetching in progress';
      })
      .addCase(unisexThunk.fulfilled, (state, action) => {
        state.data =
          action.payload.sort((a: { price: number }, b: { price: number }) => {
            if (a.price > b.price) return 1;
            else if (a.price < b.price) return -1;
            else return 0;
          }) || [];
      })
      .addCase(unisexThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addUnisexData } = unisexSlice.actions;
export default unisexSlice.reducer;
