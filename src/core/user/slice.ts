import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/types/types';

const userList: IUser[] = [];

const user: IUser = {
  id: 1,
  firstName: 'Egor',
  lastName: 'Gladkikh',
  middleName: 'Yurievich',
  email: 'gladkikhegor01@gmail.com',
  password: 'asdajkwdh'
};

userList.push(user);

const initialState: IUser[] = [...userList];

export const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IUser>) => {
      state.push(action.payload);
    }
  }
});

export const { addNewUser } = userSlice.actions;
