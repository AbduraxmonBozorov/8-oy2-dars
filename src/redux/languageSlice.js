import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: "en",
    reducers: {
        en: ()=> "en",
        ru: ()=> 'ru',
        uz: ()=> 'uz'
    }    
})

export const {en, ru, uz} = languageSlice.actions;
export default languageSlice.reducer;