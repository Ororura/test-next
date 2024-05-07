import { combineReducers } from 'redux';
import { productSlice } from '@/entities';
import { userSlice } from '@/entities';
import { api } from '@/shared/api';

export const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  Product: productSlice.reducer,
  User: userSlice.reducer
});
