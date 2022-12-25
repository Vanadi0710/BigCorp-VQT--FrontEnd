import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { onSignIn, onLogOut } from "../action/auth.action";


const initialState = {
  account: {
    _id: null,
    username: null,
    role: null,
    branch: null
  },
  loading: "idle",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccount: (state, action) => {
      state.account.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // SIGN IN
      .addCase(onSignIn.pending, (state, action) => {
        state.loading = "pending";
        state.isLoggedIn = false;
      })
      .addCase(onSignIn.fulfilled, (state, action) => {
        state.loading = "idle";
        state.isLoggedIn = true;
        state.account = action.payload;
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken)
        // window.location.href = "/";
      })
      .addCase(onSignIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.loading = "idle";
      })

      // LOG OUT
      .addCase(onLogOut.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(onLogOut.fulfilled, (state, action) => {
        state.account = initialState.account;
        state.isLoggedIn = false;
        state.loading = "idle";
        localStorage.clear()
        window.location.href = "/sign-in";
      })
      .addCase(onLogOut.rejected, (state, action) => {
        state.loading = "idle";
        state.isLoggedIn = false;
      });
  },
});

export const { reqRefreshToken, updateAccount } = authSlice.actions;

export default authSlice.reducer;
