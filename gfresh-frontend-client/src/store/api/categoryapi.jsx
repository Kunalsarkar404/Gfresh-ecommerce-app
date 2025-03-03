import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: 'category',
        method: 'GET',
      }),
    }),
    getSingleCategory: builder.query({
      query: (id) => ({
        url: `category/${id}`,
        method: 'GET',
      }),
    }),
    getAttributeByCategory: builder.query({
      query: (id) => ({
        url: `category/attributelist/${id}`,
        method: 'GET',
      }),
    }),
    getLevelOneCategory: builder.query({
      query: () => ({
        url: `category/levelone`,
        method: 'GET',
      }),
    }),
    postCategory: builder.mutation({
      query: (data) => ({
        url: `category`,
        method: 'POST',
        body: data,
      }),
    }),
    // Modified to fetch child categories from the main category endpoint
    getChildCategories: builder.query({
      query: (parentId, url) => ({
        url: `category/${url}`,
        method: 'GET',
        params: { parentcategory: parentId }, // Filter by parentcategory
      }),
    }),
    patchCategory: builder.mutation({
      query: ({ data, id }) => ({
        url: `category/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useGetAttributeByCategoryQuery,
  usePostCategoryMutation,
  useGetLevelOneCategoryQuery,
  usePatchCategoryMutation,
  useDeleteCategoryMutation,
  useGetChildCategoriesQuery, // Updated hook for child categories
} = categoryApi;