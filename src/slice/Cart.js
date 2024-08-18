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
      const _state = [...state];
      const index = _state.findIndex((item) => item.id === _id);
      if (_state[index].quantity + 1 <= 5) {
        _state[index] = {
          ..._state[index],
          quantity: (_state[index].quantity += 1),
        };
      }
    },
    decreaseQuantity: (state, action) => {
      const _id = action.payload;
      const _state = [...state];
      const index = _state.findIndex((item) => item.id === _id);
      if (_state[index].quantity - 1 >= 1) {
        _state[index] = {
          ..._state[index],
          quantity: (_state[index].quantity -= 1),
        };
      }
    },
  },
});

export const { addToCart, emptyCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
