import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url:'category/frontedcategorylist',
        method:'GET'
      })
    }),
    getSingleCategory: builder.query({
        query: (id) => ({
          url: `category/${id}`,
          method:'GET'
        })
      }),
    getAttributeByCategory: builder.query({
        query: (id) => ({
          url: `category/attributelist/${id}`,
          method:'GET'
        })
      }),
    getLevelOneCategory: builder.query({
        query: () => ({
          url: `category/levelone`,
          method:'GET'
        })
      }),
    postCategory: builder.mutation({
        query: (data) => ({
          url: `category`,
          method:'POST',
          body:data
        })
      }),
    postFetchSubCategory: builder.mutation({
        query: (data) => ({
          url: `category/subcategory`,
          method:'POST',
          body:data
        })
      }),
    patchCategory: builder.mutation({
        query: ({data,id}) => ({
          url: `category/${id}`,
          method:'PATCH',
          body:data
        })
      }),
    deleteCategory: builder.mutation({
        query: (id) => ({
          url: `category/${id}`,
          method:'DELETE'
        })
      }),
  }),
})

export const { useGetAllCategoriesQuery, useGetSingleCategoryQuery,useGetAttributeByCategoryQuery,usePostCategoryMutation,useGetLevelOneCategoryQuery,usePatchCategoryMutation,useDeleteCategoryMutation,usePostFetchSubCategoryMutation } = categoryApi