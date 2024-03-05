import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // info de l'utilisateur
  error: null, // Stock les erreur de connexion
  isLogin: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
    },
    editUserName: (state, action) => {
      state.user.userName = action.payload;
    },
  },
});

export const { loginSuccess, logout, editUserName } = userSlice.actions;
export default userSlice.reducer;
