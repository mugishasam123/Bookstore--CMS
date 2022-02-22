import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: `item_${data.length + 1}`,
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <section className="form">
      <h3> ADD NEW BOOK </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="action"> Action </option>

          <option value="comedy"> Comedy </option>

          <option value="horror"> Horror </option>

          <option value="fiction"> Fiction </option>

          <option value="classics"> Classics </option>
        </select>

        <button type="submit"> ADD BOOK </button>
      </form>
    </section>
  );
};

export default Form;
