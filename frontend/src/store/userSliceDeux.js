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
      console.log(state.user.lastName);
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
    },
    editFirstName: (state, action) => {
      state.user.userName = action.payload;
    },
  },
});

export const { loginSuccess, logout, editFirstName } = userSlice.actions;
export default userSlice.reducer;
