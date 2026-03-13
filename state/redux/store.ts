'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menSlice from './reducers/menSlice';
import womenSlice from './reducers/womenSlice';
import unisexSlice from './reducers/unisexSlice';
import cartSlice from './reducers/cartSlice'

import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';

const confg = {
  key: 'root',
  storage,
};

const comReducer = combineReducers({
  menSlice,
  womenSlice,
  unisexSlice,
  cartSlice
});

const persReducers = persistReducer(confg, comReducer);

export const store = configureStore({
  reducer: persReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
