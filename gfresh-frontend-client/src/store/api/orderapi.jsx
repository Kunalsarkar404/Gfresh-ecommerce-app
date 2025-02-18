import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/", prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('Oneuptoken'); // Retrieve the token from local storage
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },}),
  endpoints: (builder) => ({
    getOrderByUser: builder.query({
      query: () => ({
        url: `order/orderbyuser`,
        method:'GET'
      })
    }),
    postOrder: builder.mutation({
        query: (data) => ({
          url: `order`,
          method:'POST',
          body:data
        })
      }),
  }),
})

export const { usePostOrderMutation,useGetOrderByUserQuery } = orderApi