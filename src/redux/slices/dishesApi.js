import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dishesApi = createApi({
  reducerPath: 'dishesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com' }),
  endpoints: (builder) => ({
    addNewDish: builder.mutation({
      query: (newDish) => ({
        url: "/dishes",
        method: "POST",
        body: newDish,
      }),
    }),
  }),
})

export const { useAddNewDish } = dishesApi;