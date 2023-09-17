import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product, Products } from '../types/data';

const API_URL = 'https://fakestoreapi.com';

export const productsAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getProducts: builder.query<Products, void>({
      query: () => 'products',
    }),
    addProduct: builder.mutation<any, Partial<Product>>({
      query: newProduct => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsAPI;
