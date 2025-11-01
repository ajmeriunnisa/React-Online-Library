import {createSlice} from "@reduxjs/toolkit";



const booksSlice=createSlice({
    name:"books",
    initialState:{
        list:[],
    },
    reducers:{
        addBook:(state,action)=>{
            state.books.unshift(action.payload)
        },
    },
});

export const {addBook}=booksSlice.actions;
export default booksSlice.reducer;