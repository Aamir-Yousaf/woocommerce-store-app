import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // This is Immer-compliant
      toast.success("Product add to Cart");
    },
    emptyCart: (state) => {
      return [];
    },
    removeFromCart: (state, action) => {
      return state.filter((item, index) => index !== action.payload); // Remove item by index
    },
  },
});

export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
