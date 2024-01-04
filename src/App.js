import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
