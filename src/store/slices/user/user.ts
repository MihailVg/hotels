import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { UserType } from '../../../types';
import { fetchLoginAction, fetchLogoutAction, getUserAction } from '../../api-actions';
import { getToken } from '../../../services/token';

type UserSliceType = {
  user: UserType | null;
  authStatus: boolean;
};

const initialState: UserSliceType = {
  user: null,
  authStatus: !!getToken(),
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchLoginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = true;
      })
      .addCase(fetchLogoutAction.fulfilled, (state) => {
        state.user = null;
        state.authStatus = false;
      });
  },
});

export const { getUser } = userSlice.actions;
