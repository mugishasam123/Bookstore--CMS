import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';
import './styles/form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: `item_${
        data
          .map((b) => +b.item_id.split('_')[1])
          .sort()
          .reverse()[0] + 1 || 1
      }`,
      title,
      category,
    };

    const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OMFOKRjtpNZtdEqvXTXF/books';
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <section className="form d-flex">
      <h3 className="form-title"> ADD NEW BOOK </h3>
      {' '}
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          placeholder="Book title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {' '}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="action"> Action </option>
          {' '}
          <option value="comedy"> Comedy </option>
          {' '}
          <option value="horror"> Horror </option>
          {' '}
          <option value="fiction"> Fiction </option>
          {' '}
          <option value="classics"> Classics </option>
          {' '}
        </select>
        {' '}
        <button type="submit"> ADD BOOK </button>
        {' '}
      </form>
      {' '}
    </section>
  );
};

export default Form;
