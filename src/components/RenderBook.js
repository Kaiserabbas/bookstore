import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const RenderBook = ({ books, onDelete, onEdit, onComment }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={book.id}
          book={book}
          index={index}
          onDelete={onDelete}
          onEdit={onEdit}
          onComment={onComment}
        />
      ))}
    </div>
  );
};
RenderBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      // ... Define other properties
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
};
export default RenderBook;
