import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const url = "https://connections-api.goit.global/";
export const register = createAsyncThunk(
  "auth/register",
  async (userRegisterData, thunkAPI) => {
    try {
      const response = await axios.post(`${url}users/signup`, userRegisterData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const login = createAsyncThunk(
  "auth/login",
  async (userLoginData, thunkAPI) => {
    try {
      const response = await axios.post(`${url}users/login`, userLoginData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }
  try {
    const response = await axios.post(`${url}users/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No Token found");
    }
    try {
      const response = await axios.get(`${url}users/current`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
