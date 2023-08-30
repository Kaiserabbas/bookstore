import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/BookCard.css';
import ProgressCircle from './ProgressCircle';
import RemoveButton from './RemoveButton';

const BookCard = ({ book, index, onEdit, onComment }) => {
  const [comment, setComment] = useState('');
  const [progress, setProgress] = useState(book.progress || 0);

  const handleEdit = () => {
    const updatedBook = { ...book, progress: 0 };
    onEdit(index, updatedBook);
  };

  const handleCommentSubmit = () => {
    onComment(book.id, comment);
    setComment('');
  };

  const handleUpdateProgress = () => {
    const newProgress = progress + 10;
    setProgress(newProgress);
  };

  return (
    <div className="book-card">
      <div className="book-card-left">
        <h6>{book.category}</h6>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type="button" onClick={handleCommentSubmit}>
          Comments
          <span className="vertical-line">|</span>
        </button>
        <RemoveButton bookId={Number(book.id)} />
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </div>
      <div className="book-card-progress">
        <ProgressCircle progress={10} />
        <div>
          <p className="progress-percentage">{progress || '10'}%</p>
          <p className="progress-text">Completed</p>
        </div>
      </div>
      <div className="book-card-right">
        <p className="current-chapter">Current Chapter</p>
        <p className="book-state">{book.state || 'Chapter-1'}</p>
        <button type="button" onClick={handleUpdateProgress}>
          Update Progress
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number,
    state: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
};
export default BookCard;
