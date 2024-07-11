import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './containers/details/Details';
import Start from './start';

import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Start/>}></Route>
      <Route exact path="/details" element={<Details />}></Route>
    </Routes>
  </Router>
);

export default App;
