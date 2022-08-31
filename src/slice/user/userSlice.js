import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginIn: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        user: "",
      };
    },
  },
});

export const { loginIn, logout } = userSlice.actions;
export default userSlice.reducer;
