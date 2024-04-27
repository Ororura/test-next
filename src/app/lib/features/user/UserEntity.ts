import { IUser } from "@/app/lib/features/user/UserEntity.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/lib/store";

// Предположим, что у вас есть список пользователей userList
const userList: IUser[] = [];

const user: IUser = {
  id: 1,
  firstName: "Egor",
  lastName: "Gladkikh",
  middleName: "Yurievich",
  email: "gladkikhegor01@gmail.com",
  password: "asdajkwdh",
};

userList.push(user);

const initialState: IUser[] = [...userList];

export const userSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IUser>) => {
      state.push(action.payload);
    },
  },
});

export const { addNewUser } = userSlice.actions;

export const selectUserList = (state: RootState) => state.user;

export default userSlice.reducer;
