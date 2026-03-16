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

export const menThunk = asyncThunk('/men', 'men', 'men22s');

const menSlice = createSlice({
  name: 'men',
  initialState,
  reducers: {
    addMenData(state, action: PayloadAction<ItemTypes[]>) {
      state.data = action.payload;
    },
    filterMenItems(state, action) {
      filterLogic(state, action);
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
      .addCase(menThunk.rejected, (state, action) => {
        state.error = 'Something went wrong';
      });
  },
});

export const { addMenData, filterMenItems } = menSlice.actions;
export default menSlice.reducer;
