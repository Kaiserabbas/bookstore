import React, { useState } from 'react';
import './css/BookForm.css';
import { useDispatch } from 'react-redux';
import AddButton from './AddButton';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
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
        <AddButton title={title} author={author} />
      </div>
    </div>
  );
};

export default BookForm;
