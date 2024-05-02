import { combineReducers } from 'redux';
import { productApi, productSlice } from '@/entities';
import { userSlice } from '@/entities';

export const reducers = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  Product: productSlice.reducer,
  User: userSlice.reducer
});
