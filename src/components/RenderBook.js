import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from './BookCard';
import { removeBook, editBook } from '../redux/books/booksSlice';

const RenderBook = () => {
  const books = useSelector((state) => state.books); // Access books from Redux store
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  const handleEditBook = (id, updatedBook) => {
    dispatch(editBook({ id, ...updatedBook }));
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
        />
      ))}
    </div>
  );
};
export default RenderBook;
