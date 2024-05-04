import { combineReducers } from 'redux';
import { productApi, productSlice } from '@/entities';
import { userSlice } from '@/entities';
import { chatApi } from '@/features/chat/api';

export const reducers = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  Product: productSlice.reducer,
  User: userSlice.reducer
});
