import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    progress: 74,
    state: 'Chapter 17',
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    category: 'Fantasy',
    author: 'J.K. Rowling',
    progress: 100,
    state: 'Finished',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    category: 'Classic',
    author: 'Harper Lee',
    progress: 50,
    state: 'Chapter 10',
  },
  {
    id: 4,
    title: '1984',
    category: 'Dystopian',
    author: 'George Orwell',
    progress: 75,
    state: 'Chapter 8',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    category: 'Romance',
    author: 'Jane Austen',
    progress: 20,
    state: 'Chapter 5',
  },
  {
    id: 6,
    title: 'The Great Gatsby',
    category: 'Classic',
    author: 'F. Scott Fitzgerald',
    progress: 10,
    state: 'Chapter 2',
  },
  {
    id: 7,
    title: 'The Hobbit',
    category: 'Fantasy',
    author: 'J.R.R. Tolkien',
    progress: 90,
    state: 'Chapter 15',
  },
  {
    id: 8,
    title: 'The Catcher in the Rye',
    category: 'Coming-of-age',
    author: 'J.D. Salinger',
    progress: 40,
    state: 'Chapter 6',
  },
  {
    id: 9,
    title: 'Lord of the Flies',
    category: 'Adventure',
    author: 'William Golding',
    progress: 60,
    state: 'Chapter 12',
  },
  {
    id: 10,
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    category: 'Fantasy',
    author: 'C.S. Lewis',
    progress: 15,
    state: 'Chapter 3',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    // Add more reducers as needed
  },
});

export const { addBook, removeBook, editBook } = booksSlice.actions;
export default booksSlice.reducer;
