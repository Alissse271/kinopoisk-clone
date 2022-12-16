import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  darkMode: "light" | "dark";
}

const initialState: ITheme = {
  darkMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.darkMode === "light") {
        state.darkMode = "dark";
      } else {
        state.darkMode = "light";
      }
      //   state.darkMode === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
