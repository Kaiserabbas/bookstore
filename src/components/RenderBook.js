import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from './BookCard';
import { removeBook, editBook } from '../redux/books/booksSlice';

const RenderBook = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  const handleEditBook = (id, updatedBook) => {
    dispatch(editBook({ id, ...updatedBook }));
  };

  const handleCommentBook = (bookId, comment) => {
    dispatch(editBook({ bookId, comment }));
  };

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={book.id}
          book={book}
          index={index}
          onDelete={() => handleDeleteBook(book.id)}
          onEdit={(updatedBook) => handleEditBook(book.id, updatedBook)}
          onComment={(bookId, comment) => handleCommentBook(bookId, comment)}
        />
      ))}
    </div>
  );
};
export default RenderBook;
