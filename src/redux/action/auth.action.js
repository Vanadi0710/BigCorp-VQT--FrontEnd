import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/auth.api";

export const onSignIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAPI.signIn(credentials);

      const account = {
        _id: data._id,
        username: data.username,
        role: data.role,
        branch: data.branch,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
      };
      return account;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const onLogOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    const response = await authAPI.logOut();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
