import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/BookCard.css';
import ProgressCircle from './ProgressCircle';
import RemoveButton from './RemoveButton';

const BookCard = ({
  book, index, onEdit, onComment,
}) => {
  const [comment, setComment] = useState('');
  const [progress, setProgress] = useState(book.progress);

  const handleEdit = () => {
    const updatedBook = { ...book, progress: 0 };
    onEdit(index, updatedBook);
  };

  const handleCommentSubmit = () => {
    onComment(book.id, comment);
    setComment('');
  };

  const handleUpdateProgress = () => {
    const progress = book.progress + 10;
    setProgress(progress + 10);
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
        <RemoveButton bookId={book.id} />
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </div>
      <div className="book-card-progress">
        <ProgressCircle progress={progress} />
        <div>
          <p className="progress-percentage">
            {progress}
            %
            {' '}
          </p>
          <p className="progress-text">Completed</p>
        </div>
      </div>
      <div className="book-card-right">
        <p className="current-chapter">Current Chapter</p>
        <p className="book-state">{book.state}</p>
        <button type="button" onClick={handleUpdateProgress}>
          Update Progress
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
};

export default BookCard;
