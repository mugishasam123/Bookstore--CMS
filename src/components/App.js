// eslint-disable//
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Books from './Books';
import Categories from './Categories';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <NavBar />
              <Books />
            </>
          )}
        />
        <Route
          path="/Categories"
          element={(
            <>
              <NavBar />
              <Categories />
            </>
          )}
        />
        {' '}
      </Routes>
      {' '}
    </Router>
  </>
);

export default App;
