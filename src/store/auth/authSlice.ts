import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";

interface authState {
  status: string;
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
    }
  }
});

export const {onLogin, onLogout, clearErrorMessage} = authSlice.actions;
export default authSlice.reducer;