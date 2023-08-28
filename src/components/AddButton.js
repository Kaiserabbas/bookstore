import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/books/booksSlice';

const AddButton = ({ title, author }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      id: Date.now(),
      title,
      author,
      category: 'New Book Category',
      progress: 0,
      state: 'Chapter 1',
    };
    dispatch(addBook(newBook));
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
