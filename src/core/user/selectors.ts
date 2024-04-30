import { RootState } from '@/app/providers/store';

export const selectUserList = (state: RootState) => state.User;
