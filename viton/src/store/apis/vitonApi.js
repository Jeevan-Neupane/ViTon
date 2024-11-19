import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const processApi = createApi({
  reducerPath: 'processAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
  }),
  endpoints(builder) {
    return {
      processImage: builder.mutation({
        query: (data) => {
          return {
            url: '/process_hd',
            method: 'POST',
            body: data,
          };
        },
      }),
    };
  },
});

export const { useProcessImageMutation } = processApi;
export { processApi };
