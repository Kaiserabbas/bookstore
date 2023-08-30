import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeBook } from '../redux/books/booksSlice';

const API_URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'E1jMNc6zMuNLe4kRVA1s';

const RemoveButton = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    axios
      .delete(`${API_URL}/apps/${APP_ID}/books/${bookId}`)
      .then((response) => {
        console.log(response.data);
        dispatch(removeBook(bookId));
      })
      .catch((error) => {
        console.error('There was an error deleting the book!', error);
      });
  };

  return (
    <button type="button" onClick={handleRemoveBook}>
      Remove
      <span className="vertical-line">|</span>
    </button>
  );
};

RemoveButton.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default RemoveButton;
