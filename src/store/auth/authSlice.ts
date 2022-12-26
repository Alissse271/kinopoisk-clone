import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  email: null | string;
  id: null | string;
}

const initialState: IAuth = {
  email: null,
  id: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.id = payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
