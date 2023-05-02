import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";

type IStatus = 'not-authenticated' | 'authenticated' | 'checking';

interface authState {
  status: IStatus;
  user: IUser | undefined;
  errorMessage: string | undefined;
}

const initialState: authState = {
  status: 'not-authenticated',
  user: undefined,
  errorMessage: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<IUser>) => {
      state.status = 'authenticated'
      state.user = action.payload
      state.errorMessage = undefined
    },
    onLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = 'not-authenticated'
      state.user = undefined
      state.errorMessage = action.payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    },
    onChecking : (state) => {
      state.status = 'checking'
    }
  }
});

export const {onLogin, onLogout, clearErrorMessage, onChecking} = authSlice.actions;
export default authSlice.reducer;