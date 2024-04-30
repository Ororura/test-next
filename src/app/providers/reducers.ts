import { combineReducers } from 'redux';
import { productSlice } from '@/core/product';
import { userSlice } from '@/core/user';
import { productApi } from '@/core/product/api';

export const reducers = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  Product: productSlice.reducer,
  User: userSlice.reducer
});
