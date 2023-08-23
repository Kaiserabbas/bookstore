import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/BookForm.css';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = () => {
    if (title && author) {
      onAdd({ title, author });
      setTitle('');
      setAuthor('');
    }
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
BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
export default BookForm;
