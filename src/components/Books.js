import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import RenderBook from './RenderBook';
import BookForm from './BookForm';
import { setBooks } from '../redux/books/booksSlice';

const API_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'E1jMNc6zMuNLe4kRVA1s';
function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${API_URL}/apps/${APP_ID}/books`)
      .then((response) => {
        const booksArray = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key][0],
        }));
        dispatch(setBooks(booksArray));
      })
      .catch((error) => {
        console.error('There was an error fetching the books!', error);
      });
  }, [dispatch]);
  return (
    <div className="Books">
      <RenderBook />
      <BookForm />
    </div>
  );
}

export default Books;
