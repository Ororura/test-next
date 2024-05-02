import { productSlice } from '@/entities';
import { userSlice } from '@/entities/user';

interface IActions {
  User: typeof userSlice.actions;
  Product: typeof productSlice.actions;
}

export const actions: IActions = {
  Product: productSlice.actions,
  User: userSlice.actions
};

export type { IActions };
