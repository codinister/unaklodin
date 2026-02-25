'use client';

import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchApi from '../query/fetchApi';



const asyncThunk = (url: string, sliceName: string, thunKey: string) => {

  return createAsyncThunk(`${sliceName}/${thunKey}`, async () => {
    try {
      const res = await fetchApi({ url });
      return  res.data;
    } catch (err) {
      return err;
    }
  });
};

export default asyncThunk;
