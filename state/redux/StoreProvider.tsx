'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const persist = persistStore(store);
  return <Provider store={store}>
    <PersistGate persistor={persist}>
    {children}
    </PersistGate>
    </Provider>;
};

export default StoreProvider;
