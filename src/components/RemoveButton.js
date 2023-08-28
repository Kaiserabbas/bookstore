import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const RemoveButton = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <button type="button" onClick={handleRemoveBook}>
      Remove
      {' '}
      <span className="vertical-line">|</span>
    </button>
  );
};

RemoveButton.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default RemoveButton;
