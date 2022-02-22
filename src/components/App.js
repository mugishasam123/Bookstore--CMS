import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Books from './Books';
import Categories from './Categories';

const App = () => (
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

export default App;
