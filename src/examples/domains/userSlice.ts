import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~/store';
import { timeout } from '~/utils/timeout';

const hasToken = !!localStorage.getItem('token');

interface UserState {
  isAuth: boolean;
  status: 'pristine' | 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
  isAuth: hasToken,
  status: 'pristine',
};

const login = createAsyncThunk('user/login', async () => {
  await timeout(200);

  localStorage.setItem('token', 'active_token');

  return true;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, immeredState => {
        immeredState.status = 'loading';
      })
      .addCase(login.fulfilled, immeredState => {
        immeredState.status = 'idle';
        immeredState.isAuth = true;
      })
      .addCase(login.rejected, immeredState => {
        immeredState.status = 'failed';
        immeredState.isAuth = false;
      });
  },
});

const selectIsAuth = (state: RootState) => state.user.isAuth;
const selectAuthStatus = (state: RootState) => state.user.status;
const { reducer } = userSlice;

export {
  type UserState,
  login,
  userSlice,
  selectIsAuth,
  selectAuthStatus,
  reducer,
};
