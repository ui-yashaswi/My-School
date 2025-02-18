import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";
import cartSlice from "./slices/cartSlice.js";
export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});
