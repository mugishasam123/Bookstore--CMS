import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

import './styles/bookCard.css';

const BookCard = ({ id, title, category }) => {
  const [percentage, setPercentage] = useState(50);
  const dispatch = useDispatch();

  const handleProgress = () => {
    if (percentage === 100) {
      return percentage;
    }
    return setPercentage(percentage + 10);
  };
  const handleDelete = () => {
    const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OMFOKRjtpNZtdEqvXTXF/books/${id}`;
    fetch(baseUrl, {
      method: 'DELETE',
    });

    dispatch(removeBook({ id }));
  };
  return (
    <div className="card">
      <div className="details">
        <div className="book-details">
          <span className="category">{category}</span>

          <h3 className="title">{title}</h3>

          <p className="author"> Jk rowling </p>
        </div>
        <div className="actions">
          <button type="button"> Comments </button>

          <button type="button" onClick={handleDelete}>
            Remove
          </button>

          <button type="button"> Edit </button>
        </div>
      </div>
      <div className="progress">
        <div className="count">
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={percentage} maxValue={100} />
          </div>
          <div>
            <p className="percentage">
              {percentage}
              %
            </p>
            <span> Completed </span>
          </div>
        </div>
      </div>
      <hr style={{ width: '1px', height: '70px', display: ' inline-block' }} />
      <div className="chapter">
        <div className="chapter-details">
          <span className="current-chapter"> CURRENT CHAPTER </span>

          <p> Chapter 7 </p>
        </div>

        <button
          type="button"
          className="update-progress"
          onClick={handleProgress}
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default BookCard;
