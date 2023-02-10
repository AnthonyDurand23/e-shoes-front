import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coindesk.com/v1/bpi/' }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getRate: builder.query<any, null>({
      query: () => 'currentprice.json',
    }),
  }),
});

export const { useGetRateQuery } = testApi;
