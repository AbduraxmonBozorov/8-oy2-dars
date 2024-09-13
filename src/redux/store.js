import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import usersSlice from "./usersSlice";
import languageSlice from "./languageSlice";


export const store = configureStore({
    reducer: {
        theme: themeSlice,
        users: usersSlice,
        language: languageSlice
    }
})
