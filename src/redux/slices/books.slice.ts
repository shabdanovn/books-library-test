import { BookType } from './../../types/books';
import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
    books: BookType[],
    isLoading: boolean,
    error: null|string,
    favorites: BookType[]
}

const initialState = {
    books: [],
    isLoading: false,
    error: null,
    favorites: []
}



const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // builder.addCase()
    }
})

const bookReducer = booksSlice.reducer

export default bookReducer