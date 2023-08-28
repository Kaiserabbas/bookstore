import React, { useState } from 'react';
import './css/BookForm.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  // Remove onAdd from props
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, category };
    dispatch(addBook(newBook)); // Dispatch the addBook action with the new book
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="book-form">
      <hr />
      <h3>ADD NEW BOOK</h3>
      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className="title"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
          className="author"
        />
        <button type="button" onClick={handleSubmit} className="button">
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default BookForm;
