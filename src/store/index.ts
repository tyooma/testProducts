import { configureStore } from '@reduxjs/toolkit';

import products from './products';
import { productsAPI } from '../services/productsAPI';

const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
    products,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

export default store;
