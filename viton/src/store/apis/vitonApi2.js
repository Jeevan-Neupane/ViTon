import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tryOnApi = createApi({
  reducerPath: 'tryOnAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8001/',
  }),
  endpoints(builder) {
    return {
      tryOn: builder.mutation({
        query: (data) => {
          return {
            url: '/tryon',
            method: 'POST',
            body: data,
          };
        },
      }),
    };
  },
});

export const { useTryOnMutation } = tryOnApi;
export { tryOnApi };
