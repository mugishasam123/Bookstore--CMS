import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import BookCard from './BookCard';
import './styles/books.css';

const Books = () => {
  const data = useSelector((state) => state.books);
  return (
    <section className="books d-flex">
      <div className="book-list d-flex">
        {data.map((book) => (
          <BookCard
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            category={book.category}
          />
        ))}
        {' '}
      </div>
      {' '}
      <hr />
      <Form />
    </section>
  );
};

export default Books;
