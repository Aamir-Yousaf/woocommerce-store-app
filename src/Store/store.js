import { configureStore } from "@reduxjs/toolkit";
import Cart from "../slice/Cart";
export const store = configureStore({
  reducer: {
    Cart,
  },
});
