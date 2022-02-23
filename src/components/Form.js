import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: `item_${data.length + 1}`,
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
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
        <input
          type="text"
          placeholder="Book author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit"> ADD BOOK </button>
      </form>
    </section>
  );
};

export default Form;
