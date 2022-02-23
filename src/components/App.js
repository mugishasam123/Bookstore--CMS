import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './NavBar';
import Books from './Books';
import Categories from './Categories';
import { fetchData } from '../redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          {' '}
          <Route path="/Categories" element={<Categories />} />
          {' '}
        </Routes>
        {' '}
      </Router>
      {' '}
    </>
  );
};

export default App;
