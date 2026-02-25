'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menSlice from './reducers/menSlice';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';

const confg = {
  key: 'root',
  storage,
};

const comReducer = combineReducers({
  menSlice,
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
