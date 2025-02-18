import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/brand/" }),
  endpoints: (builder) => ({
    getBrand: builder.query({
      query: () => ({
        url: `frontend`,
        method:'GET'
      })
    }),
    getItemByBrand: builder.query({
      query: (name) => ({
        url: `frontend/${name}`,
        method:'GET'
      })
    }),
    getNewArrival: builder.query({
      query: () => ({
        url: `list/newarrival`,
        method:'GET'
      })
    }),
    getBestSeller: builder.query({
      query: () => ({
        url: `list/bestseller`,
        method:'GET'
      })
    }),
    getFeatureItem: builder.query({
      query: () => ({
        url: `list/featureitem`,
        method:'GET'
      })
    }),
  }),
})

export const { useGetBrandQuery,useGetItemByBrandQuery,useGetNewArrivalQuery,useGetBestSellerQuery,useGetFeatureItemQuery } = brandApi