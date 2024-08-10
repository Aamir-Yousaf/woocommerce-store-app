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
      return (state = []);
      toast.error("Product removed from Cart");
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
