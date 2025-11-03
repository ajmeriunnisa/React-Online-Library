import { createSlice } from "@reduxjs/toolkit";
import BooksData from "./BooksData.js"

const BooksSlice=createSlice({
    name:"books",
    initialState:{
        books:BooksData,
    },
    reducers:{
        addBook:(state,action)=>{
            state.books.unshift(action.payload)
        },
    },
})


export const{addBook}=BooksSlice.actions;
export default BooksSlice.reducer;
