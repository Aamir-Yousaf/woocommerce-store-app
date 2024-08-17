import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  isLoggedIn:false,
  initialState: {},
  currency: "PKR",
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
