import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { addBook } from '../redux/books/booksSlice';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'E1jMNc6zMuNLe4kRVA1s';

const AddButton = ({ title, author }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newItemId = Date.now().toString();
    const newBook = {
      item_id: newItemId,
      title,
      author,
      category: 'New Book Category',
      progress: 10,
      state: 1,
    };
    axios
      .post(`${API_URL}/apps/${APP_ID}/books`, newBook);
    dispatch(addBook({ ...newBook, id: newItemId }));
  };
  return (
    <button type="button" onClick={handleAddBook}>
      Add Book
    </button>
  );
};
AddButton.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default AddButton;
