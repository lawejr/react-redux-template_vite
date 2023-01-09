// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { BACKEND_URL } = process.env;
// Define our single API slice object
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
  }),
  tagTypes: ['Post'],
  endpoints: _ => ({}),
});
