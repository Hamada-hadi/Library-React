import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        isbn: "ISBN",
        pages: "Pages",
        auther: "Auther",
    },
    reducers: {
        chooseFirst: (state, action) => { state.title = action.payload},
        chooseLast: (state, action) => { state.isbn = action.payload},
        chooseEmail: (state, action) => { state.pages = action.payload},
        choosePhone: (state, action) => { state.auther = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseFirst, chooseLast, chooseEmail, choosePhone} = rootSlice.actions