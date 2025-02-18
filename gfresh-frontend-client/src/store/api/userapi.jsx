import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:8000/api/user", 
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('Oneuptoken'); // Retrieve the token from local storage
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
        query: () => ({
          url: `/userinfo`,
          method:'GET'
        })
      }),
    postCreateUser: builder.mutation({
        query: (data) => ({
          url: `/register`,
          method:'POST',
          body:data
        })
      }),
    postLoginUser: builder.mutation({
        query: (data) => ({
          url: `/login`,
          method:'POST',
          body:data
        })
      }),
    patchUser: builder.mutation({
        query: (data) => ({
          url: `/`,
          method:'PATCH',
          body:data
        })
      }),
    getUserAddress: builder.query({
      query: () => ({
        url: '/address',
        method: 'GET'
      })
    }),
    getOrderByUser: builder.query({
      query: () => ({
        url: '/orders',
        method: 'GET'
      })
    }),
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/address/${id}`,
        method: 'DELETE'
      })
    }),
  }),
})

export const { 
  useGetUserInfoQuery,
  usePostCreateUserMutation,
  usePostLoginUserMutation,
  usePatchUserMutation,
  useGetUserAddressQuery,
  useGetOrderByUserQuery,
  useDeleteAddressMutation
} = userApi