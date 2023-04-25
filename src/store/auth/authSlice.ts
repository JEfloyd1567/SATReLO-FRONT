import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";

interface authState {
  status: string;
  user: IUser;
}

const initialState: authState = {
  status: 'not-authenticated',
  user: {
    name: '',
    role: undefined
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<IUser>) => {
      state.status = 'authenticated'
      state.user = action.payload
    },
    onLogout: (state) => {
      state.status = 'not-authenticated'
      state.user = {
        name: '',
        role: undefined 
      }
    }
  }
});

export const {onLogin, onLogout} = authSlice.actions;
export default authSlice.reducer;