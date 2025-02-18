import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for form submission
import { api } from "../../utils/api.js"; // Ensure correct import of Axios instance

export const addToCart = createAsyncThunk(
  "cart/addproduct",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/v1/auth/login", values, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const decreaseCartItem = createAsyncThunk(
  "cart/decreaseitem",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/v1/auth/login", values, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const increaseCartItem = createAsyncThunk(
  "cart/increaseCount",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/v1/auth/login", values, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    itemscount: 1,
    loading: false,
    errorMessage: null,
    successMessage: null,
  },
  reducers: {
    incrementCount: (state) => {
      state.itemscount = state.itemscount + 1;
    },
    decrementCount: (state) => {
      state.itemscount =
        state.itemscount < 1 ? state.itemscount : state.itemscount - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.cart = payload.data;
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(decreaseCartItem.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(decreaseCartItem.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.cart = payload.data;
      })
      .addCase(decreaseCartItem.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(increaseCartItem.pending, (state) => {
        state.loading = true;
        w;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(increaseCartItem.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.cart = payload.data;
      })
      .addCase(increaseCartItem.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      });
  },
});
export const { incrementCount, decrementCount } = cartSlice.actions;
export default cartSlice.reducer;
