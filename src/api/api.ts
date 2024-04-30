import { createApi } from '@reduxjs/toolkit/query/react';
import query from '@/api/query';

export const api = createApi({
  reducerPath: 'api',
  endpoints: () => ({}),
  baseQuery: query
});
