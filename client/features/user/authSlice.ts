import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const register = createAsyncThunk(
  "REGISTER",
  async (data: {}, thunkApi) => {
    try {
      const newUser = await axiosInstance.post("/users/register", data);
      return { status: newUser.status, message: newUser.data.message };
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const login = createAsyncThunk("LOGIN", async (data: {}, thunkApi) => {
  try {
    const userLogin = await axiosInstance.post("users/login", data);
    console.log(userLogin);
    return {
      status: userLogin.status,
      message: userLogin.data.message,
      user: userLogin.data.payload,
    };
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const restart = createAsyncThunk("RESTART", (_, thunkapi) => {
  return null;
});

const initialState = {
  error: [],
  userRegister: {},
  userLogged: {},
  isUserLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.userRegister = action.payload;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(restart.fulfilled, (state, action: PayloadAction<any>) => {
      state.error = [];
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userLogged = action.payload;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.error = state.error.concat(action.payload);
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
