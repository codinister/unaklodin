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
  cat: []
};

export const womenThunk = asyncThunk('/women', 'women', 'wom22s');

const womenSlice = createSlice({
  name: 'women',
  initialState,
  reducers: {
    addWomenData(state, action: PayloadAction<ItemTypes[]>) {
      state.data = action.payload;
    },
    filterWomenItems(state, action) {
      filterLogic(state,action)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(womenThunk.pending, (state) => {
        state.data = [];
        state.error = '';
        state.pending = "Women's data fetching in progress";
      })
      .addCase(womenThunk.fulfilled, (state, action) => {
        const result =
          action.payload.sort((a: { price: number }, b: { price: number }) => {
            if (a.price > b.price) return 1;
            else if (a.price < b.price) return -1;
            else return 0;
          }) || [];

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
      .addCase(womenThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addWomenData , filterWomenItems} = womenSlice.actions;
export default womenSlice.reducer;
