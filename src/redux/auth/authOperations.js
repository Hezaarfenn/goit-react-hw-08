import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { persistToken, getTokenFromStorage } from "../redux-persist";
import { authAPI } from "../../services/api";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await authAPI.register(credentials);
      return response;
    } catch (e) {
      const errorMessage = e.response?.data?.message || e.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await authAPI.login(credentials);
      return response;
    } catch (e) {
      const errorMessage = e.response?.data?.message || e.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    persistToken(null);
    return;
  } catch (e) {
    const errorMessage = e.response?.data?.message || e.message;
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const token = getTokenFromStorage();
      if (!token) {
        return thunkAPI.rejectWithValue("Unable to fetch user, no token found");
      }

      const response = await axios.get("/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      const errorMessage = e.response?.data?.message || e.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
