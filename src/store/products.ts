import { createSlice } from '@reduxjs/toolkit';

import { Products } from '../types/data';
import { saveProductsToStorage } from '../helpers/asyncStorage';

const initialState = { products: <Products>[] };

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = [...action.payload];
    },
    setProduct(state, action) {
      state.products.unshift(action.payload);
    },
    likeProduct(state, action) {
      const { productId, liked } = action.payload;
      const productIndex = state.products.findIndex(
        product => product.id === productId,
      );

      if (productIndex !== -1) {
        state.products[productIndex].liked = liked;
        saveProductsToStorage(state.products);
      }
    },
  },
});

export const { setProducts, setProduct, likeProduct } = products.actions;

export type RootState = ReturnType<typeof products.reducer>;

export default products.reducer;
