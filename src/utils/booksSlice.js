import {createSlice} from "@reduxjs/toolkit";
import BooksData from "./BooksData";


const booksSlice=createSlice({
    name:"books",
    initialState:{
        books:BooksData,
    },
    reducers:{
        addBook:(state,action)=>{
            state.books.unshift(action.payload)
        },
    },
});

export const {addBook}=booksSlice.actions;
export default booksSlice.reducer;