'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import asyncThunk from '../asyncThunk';
import { ItemTypes, stateTypes } from '@/types/types';
import filterLogic from '@/components/products/filter-components/filterLogic';

const initialState: stateTypes = {
  data: [],
  dupData: [],
  pending: '',
  error: '',
  cat: [],
};

export const unisexThunk = asyncThunk('/v2/products/unisex', 'unisex', 'unix22s');

const unisexSlice = createSlice({
  name: 'unisex',
  initialState,
  reducers: {
    addUnisexData(state, action: PayloadAction<ItemTypes[]>) {
      state.data = action.payload;
    },
    filterUnisexItems(state, action) {
      filterLogic(state, action);
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
        const result = action.payload ?
          action.payload.sort((a: { price: number }, b: { price: number }) => {
            if (a.price > b.price) return 1;
            else if (a.price < b.price) return -1;
            else return 0;
          }) : [];

        state.data = result;
        state.dupData = result;

        state.cat = [
          ...new Set(
            result
              .map((v: { cat: string }) => {
                if (v.cat) {
                  return v.cat;
                }
              })
              .filter(Boolean),
          ),
        ];
      })
      .addCase(unisexThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addUnisexData, filterUnisexItems } = unisexSlice.actions;
export default unisexSlice.reducer;
