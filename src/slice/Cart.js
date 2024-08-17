import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 }); // Initialize with quantity 1
      toast.success("Product added to Cart");
    },
    emptyCart: (state) => {
      return [];
    },
    removeFromCart: (state, action) => {
      return state.filter((item, index) => index !== action.payload); // Remove item by index
    },
    increaseQuantity: (state, action) => {
      const _id = action.payload;
      const index = state.findIndex((item) => item._id === _id);
      if (index >= 0 ) {
        state[index].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const _id = action.payload;
      const index = state.findIndex((item) => item._id === _id);
      if (index >= 0 && state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  emptyCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
