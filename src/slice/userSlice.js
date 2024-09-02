import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  isLoggedIn:false,
  initialState: {
    isLoggedIn: false,
    user: {},
    currency: "PKR",  // Initialize with PKR currency as default. You can replace this with your preferred currency.
  },
  
  reducers: {
    setUserLogin: (state, action) => {
      return (state = {
        isLoggedIn: true,
        data: action.payload,
        currency: state.Currency,
      });
    },
    LogoutUser: (state) => {
      return (state={
        isLoggedIn: false,
        user: {},
        currency: state.Currency,
      });
    },
    changeCurrency: (state, action) => {
      return (state = {
       ...state,
        currency: action.payload,
      });
    },
  },
});

export const { setUserLogin,LogoutUser , changeCurrency} =userSlice.actions;
export default userSlice.reducer;
