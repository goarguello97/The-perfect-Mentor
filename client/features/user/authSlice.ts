import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const register = createAsyncThunk(
  "REGISTER",
  async (data: {}, thunkApi) => {
    try {
      const newUser = await axiosInstance.post("/users/register", data);
      return { status: newUser.status, message: newUser.data.message };
    } catch (error: any) {
      console.log(error.response.data)
      return thunkApi.rejectWithValue(error.response.data.errors);
    }
  }
);

export const restart = createAsyncThunk("RESTART", (_, thunkapi) => {
  return null;
});

const initialState = {
  error: null || [],
  userRegister: {},
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
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
