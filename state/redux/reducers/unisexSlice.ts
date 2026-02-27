'use client';

import { createSlice } from '@reduxjs/toolkit';
import asyncThunk from '../asyncThunk';
import { menTypes } from '@/types/types';

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
    addUnisexData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(unisexThunk.pending, (state) => {
        state.data = [];
        state.error = '';
        state.pending = "Unisex data fetching in progress";
      })
      .addCase(unisexThunk.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(unisexThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addUnisexData } = unisexSlice.actions;
export default unisexSlice.reducer;
