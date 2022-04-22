import { BookType, CreateBookType } from './../../types/books';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import booksService from '../../api/books.api';

interface IInitialState {
    books: BookType[],
    isLoading: boolean,
    error: null|string,
    saved: BookType[],
    book: BookType|null
}

const initialState: IInitialState = {
    books: [],
    isLoading: false,
    error: null,
    saved: [],
    book: null
}

export const getAllBooks = createAsyncThunk(
    'books/getAllBooks',
    async (_, {rejectWithValue}) => {
        try {
          return await booksService.getAllBooks();
        } catch (error: any) {
          const message =
            (error.message &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return rejectWithValue(message);
        }
    }
)

export const getBook = createAsyncThunk(
  "books/getBook",
  async (id:string, { rejectWithValue }) => {
    try {
      return await booksService.getBook(id);
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const getSavedBooks = createAsyncThunk(
  "books/getSavedBooks",
  async (_, { rejectWithValue }) => {
    try {
      return await booksService.getSavedBooks();
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (book: CreateBookType, { rejectWithValue, dispatch }) => {
    try {
      await booksService.addBook(book);
      dispatch(getAllBooks());
    } catch (error: any) {
        const message = (error.message && error.response.data && error.response.data.message)
            || error.message || error.toString();
        return rejectWithValue(message);
    }
  }
);

export const saveBook = createAsyncThunk(
  "books/saveBook",
  async (book: CreateBookType, { rejectWithValue, dispatch }) => {
    try {
      await booksService.saveBook(book);
      dispatch(getAllBooks());
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async (book: CreateBookType, { rejectWithValue, dispatch }) => {
    try {
      await booksService.updateBook(book);
      dispatch(getAllBooks());
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const removeSavedBook = createAsyncThunk(
  "books/removeSavedBook",
  async (id:string, { rejectWithValue, dispatch }) => {
    try {
      await booksService.removeSavedBook(id);
      dispatch(getAllBooks());
      dispatch(getSavedBooks());
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const removeBook = createAsyncThunk(
  "books/removeBook",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      await booksService.removeBook(id);
      dispatch(getAllBooks());
      dispatch(getSavedBooks());
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllBooks.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(getAllBooks.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.books = payload
        });

        builder.addCase(getAllBooks.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = "Что-то пошло не так при загрузке книг";
        });

        builder.addCase(getSavedBooks.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getSavedBooks.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.saved = payload;
        });

        builder.addCase(getSavedBooks.rejected, (state, { payload }) => {
          state.isLoading = false;
          state.error = "Что-то пошло не так при загрузке сохраненных книг";
        });

        builder.addCase(getBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getBook.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.book = payload;
        });

        builder.addCase(getBook.rejected, (state, { payload }) => {
          state.isLoading = false;
          state.error = "Что-то пошло не так при загрузке книги";
        });

        builder.addCase(addBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(addBook.fulfilled, (state) => {
          state.isLoading = false;
        });

        builder.addCase(addBook.rejected, (state) => {
          state.isLoading = false;
          state.error = "Что-то пошло не так при добавлении";
        });

        builder.addCase(saveBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(saveBook.fulfilled, (state) => {
          state.isLoading = false;
        });

        builder.addCase(saveBook.rejected, (state) => {
          state.isLoading = false;
          state.error = "Что-то пошло не так при сохранении книги";
        });

        builder.addCase(updateBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(updateBook.fulfilled, (state) => {
          state.isLoading = false;
        });

        builder.addCase(updateBook.rejected, (state) => {
          state.isLoading = false;
          state.error = "Что-то пошло не так при обновлении книги";
        });
   
        builder.addCase(removeSavedBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(removeSavedBook.fulfilled, (state) => {
          state.isLoading = false;
        });

        builder.addCase(removeSavedBook.rejected, (state) => {
          state.isLoading = false;
          state.error = "Что-то пошло не так при удалении книги из сохраненных";
        });
   
        builder.addCase(removeBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(removeBook.fulfilled, (state) => {
          state.isLoading = false;
        });

        builder.addCase(removeBook.rejected, (state) => {
          state.isLoading = false;
          state.error = "Что-то пошло не так при удалении книги";
        });
   
    }
})



const bookReducer = booksSlice.reducer

export default bookReducer