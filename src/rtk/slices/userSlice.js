import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for form submission
import { api } from "../../utils/api.js"; // Ensure correct import of Axios instance

export const login = createAsyncThunk(
  "user/login",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("", data, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const logout = createAsyncThunk(
  "user/logout",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const register = createAsyncThunk(
  "user/register",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const editProfile = createAsyncThunk(
  "user/editprofile",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const editaddress = createAsyncThunk(
  "user/editaddress",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.put("", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addaddress = createAsyncThunk(
  "user/address",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.put("", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    errorMessage: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.events = payload.data;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.user = payload.data;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.user = payload.data;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(editProfile.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(editProfile.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.user = payload.data;
      })
      .addCase(editProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(editaddress.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(editaddress.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.user = payload.data;
      })
      .addCase(editaddress.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(addaddress.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(addaddress.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.user = payload.data;
      })
      .addCase(addaddress.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      });
  },
});
export default userSlice.reducer;
