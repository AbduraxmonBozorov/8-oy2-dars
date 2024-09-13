import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: () => 'light',
    dark: () => 'dark',
  },
});

export const {light, dark} = themeSlice.actions;
export  default themeSlice.reducer;
