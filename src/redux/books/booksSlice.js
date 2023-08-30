import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_KEY = 'E1jMNc6zMuNLe4kRVA1s';

// bookSlice.js
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${API_URL}/apps/${API_KEY}/books`);
  const booksArray = Object.keys(response.data).map((key) => ({
    id: key,
    progress: response.data[key][0].progress || 0,
    ...response.data[key][0],
  }));
  return booksArray;
});

// Add book async thunk
export const addBookAsync = createAsyncThunk(
  'books/addBook',
  async (newBook) => {
    const response = await axios.post(`${API_URL}/${API_KEY}/books`, newBook);
    return response.data;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    removeBook: (state, action) =>
      state.filter((book) => book.id !== action.payload),
    editBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    setBooks(state, action) {
      return action.payload;
    },
    // Add more reducers as needed
    extraReducers: (builder) => {
      builder
        .addCase(fetchBooks.fulfilled, (state, action) => {
          return action.payload;
        })
        .addCase(addBookAsync.fulfilled, (state, action) => {
          state.push(action.payload);
        });
    },
  },
});

export const { addBook, removeBook, editBook, setBooks } = booksSlice.actions;
export default booksSlice.reducer;
