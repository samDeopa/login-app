import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAgent } from "next/server";

interface AuthState {
  user: { username: string | null } | null;
  token: string | null;
  userDB: Array<object>;
}

const initialState: AuthState = {
  user: null,
  token: null,
  userDB: [
    { username: "sameer", password: "chand", userId: 1 },
    { username: "test", passsword: "123456", userId: 2 },
  ],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ username: string }>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserDB: (
      state,
      action: PayloadAction<{
        username: string;
        password: string;
        userId: string;
      }>
    ) => {
      state.userDB.push(action.payload);
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

const { actions, reducer } = authSlice;

export const { setUser, setToken, clearAuth, setUserDB } = actions;

export default reducer;
