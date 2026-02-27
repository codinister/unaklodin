'use client';

import { createSlice } from '@reduxjs/toolkit';
import asyncThunk from '../asyncThunk';
import { menTypes } from '@/types/types';

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
    addWomenData(state, action) {
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
        state.data = action.payload;
      })
      .addCase(womenThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addWomenData } = womenSlice.actions;
export default womenSlice.reducer;
