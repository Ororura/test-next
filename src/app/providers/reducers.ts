import { combineReducers } from 'redux'
import { productSlice } from '@/core/product'
import { userSlice } from '@/core/user'

export const reducers = combineReducers({
  Product: productSlice.reducer,
  User: userSlice.reducer
})
