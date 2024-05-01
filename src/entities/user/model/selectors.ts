import { RootState } from '@/app/providers/store';

export const selectUser = (state: RootState) => state.User;
