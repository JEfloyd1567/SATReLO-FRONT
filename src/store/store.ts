import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { satreloSlice } from "./satrelo/satreloSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    satrelo: satreloSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
