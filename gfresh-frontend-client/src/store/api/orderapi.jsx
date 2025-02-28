import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { gettoken } from '../../Localstorage/Store';
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/", prepareHeaders: (headers) => {
    const token = gettoken();
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
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response, meta, arg) => {
        if (response.status === 404) {
          return { orderlist: [] };
        }
        return response;
      }
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