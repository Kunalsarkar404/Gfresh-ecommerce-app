import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/", prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('Oneuptoken'); // Retrieve the token from local storage
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },}),
  endpoints: (builder) => ({
    getWishlistProduct: builder.query({
      query: () => ({
        url: `wishlist/wishlistitem`,
        method:'GET'
      })
    }),
    getWishlistCount: builder.query({
      query: () => ({
        url: `wishlist/wishlistcount`,
        method:'GET'
      })
    }),
    postWishlistItem: builder.mutation({
        query: (data) => ({
          url: `wishlist`,
          method:'POST',
          body:data
        })
      }),
    postDeleteWishlist: builder.mutation({
        query: (data) => ({
          url: `wishlist/removewishlist`,
          method:'POST',
          body:data
        })
      }),
  }),
})

export const { usePostWishlistItemMutation,useGetWishlistProductQuery,usePostDeleteWishlistMutation,useGetWishlistCountQuery } = wishlistApi