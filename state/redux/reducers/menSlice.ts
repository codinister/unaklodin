'use client';

import { createSlice } from '@reduxjs/toolkit';
import asyncThunk from '../asyncThunk';
import { menTypes } from '@/types/types';

const initialState: menTypes = {
  data: [],
  pending: '',
  error: '',
};

export const menThunk = asyncThunk('/men', 'men', 'men22s');

const menSlice = createSlice({
  name: 'men',
  initialState,
  reducers: {
    addMenData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(menThunk.pending, (state) => {
        state.data = [];
        state.error = '';
        state.pending = "Men's data fetching in progress";
      })
      .addCase(menThunk.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(menThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addMenData } = menSlice.actions;
export default menSlice.reducer;
