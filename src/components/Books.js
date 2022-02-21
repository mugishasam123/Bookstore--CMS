import React from 'react';
import './styles/books.css';

const Books = () => (
  <>
    <div className="books">
      <form action="">
        <input type="text" placeholder="Add title" />
        <input type="text" placeholder="Add Author" />
        <select name="category" id="category">
          <option value="history">History</option>
          <option value="english">English</option>
          <option value="economy">Economy</option>
          <option value="literature">Literature</option>
        </select>
      </form>
    </div>
  </>
);

export default Books;
