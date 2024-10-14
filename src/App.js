// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Verification from './components/Verification';
import Cabinet from './components/Cabinet';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/cabinet" element={<PrivateRoute />}>
            <Route path="/cabinet" element={<Cabinet />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
