import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  isLoggedIn:false,
  initialState: {},
  reducers: {
    setUserLogin: (state, action) => {
      return (state = {
        isLoggedIn: true,
        data: action.payload,
      });
    },
    LogoutUser: (state) => {
      return (state={
        isLoggedIn: false,
        user: {},
      });
    },
  },
});

export const { setUserLogin,LogoutUser} =userSlice.actions;
export default userSlice.reducer;
