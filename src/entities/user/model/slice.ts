import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/entities/user';

const initialState: IUser = {
  email: '',
  firstName: '',
  id: 0,
  lastName: '',
  middleName: '',
  password: ''
};

export const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setNewUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.middleName = action.payload.middleName;
      state.password = action.payload.password;
    }
  }
});

export const { setNewUser } = userSlice.actions;
