import { userSlice } from '@/core/user';
import { productSlice } from '@/core/product';

interface IActions {
  User: typeof userSlice.actions;
  Product: typeof productSlice.actions;
}

export const actions: IActions = {
  Product: productSlice.actions,
  User: userSlice.actions
};

export type { IActions };
