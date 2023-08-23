import React, { useState } from 'react';
import RenderBook from './RenderBook';
import BookForm from './BookForm';
import book from './data/book.js';

function Books() {
  const [books, setBooks] = useState(book); // Use the imported book data

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };
  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const handleEditBook = (index, updatedBook) => {
    const updatedBooks = [...books];
    updatedBooks[index] = updatedBook;
    setBooks(updatedBooks);
  };

  const handleCommentBook = (id, comment) => {
    // Implement comment functionality
    // You can update the state of the book with the comment based on the ID
  };

  return (
    <div className="App">
      <RenderBook
        books={book}
        onDelete={handleDeleteBook}
        onEdit={handleEditBook}
        onComment={handleCommentBook}
      />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
}

export default Books;
