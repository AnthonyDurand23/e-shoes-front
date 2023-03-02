import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '@/types/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], null>({
      query: () => 'produits',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
