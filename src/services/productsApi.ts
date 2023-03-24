import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { OrderType, ProductType } from '@/types/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], null>({
      query: () => 'produits',
    }),
    postOrder: builder.mutation<string, OrderType>({
      query: ({ ...order }) => ({
        url: 'order',
        method: 'POST',
        body: { ...order },
      }),
    }),
  }),
});

export const { useGetProductsQuery, usePostOrderMutation } = productsApi;
