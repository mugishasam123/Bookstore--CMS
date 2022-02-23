import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './styles/bookCard.css';

const BookCard = ({ id, title, category }) => {
  const dispatch = useDispatch();
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
        <span className="category">{category}</span>
        <h3 className="title">{title}</h3>

        <p className="author">Jk rowling</p>

        <div className="actions">
          <button type="button"> Comments </button>

          <button type="button" onClick={handleDelete}>
            Remove
          </button>

          <button type="button"> Edit </button>
        </div>
      </div>

      <div className="progress">
        <svg className="svg" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" strokeDasharray="264 0" />
          <circle
            className="bar"
            cx="50"
            cy="50"
            r="42"
            strokeDasharray="134 130"
          />
        </svg>

        <div className="count">
          <p> 50 % </p>
          <span> Completed </span>
        </div>
      </div>

      <div className="chapter">
        <span> CURRENT CHAPTER </span>
        <p> Chapter 7 </p>

        <button type="button"> UPDATE PROGRESS </button>
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
