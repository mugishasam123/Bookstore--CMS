import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import BookCard from './BookCard';
import './styles/books.css';

const Books = () => {
  const data = useSelector((state) => state.books);
  return (
    <section className="books">
      <div className="book-list">
        {data.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
      </div>
      <Form />
    </section>
  );
};

export default Books;
