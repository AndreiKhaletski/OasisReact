import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Verification from './components/Verification';
import Cabinet from './components/Cabinet';
import ChangePassword from './components/ChangePassword';
import Messenger from './components/Messenger';
import PrivateRoute from './components/PrivateRoute';
import PreChangePassword from './components/PreChangePassword';
import PreDeleteAccountUser from './components/PreDeleteAccountUser';
import DeleteAccountUser from './components/DeleteAccountUser';
import PrePasswordReset from './components/PrePasswordReset';
import PasswordReset from './components/PasswordReset';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/pre-password-reset" element={<PrePasswordReset />} />
          <Route path="/password-reset/:uuid" element={<PasswordReset />} />
          <Route path="/cabinet" element={<PrivateRoute />}>
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/cabinet/messenger" element={<Messenger />} />
          </Route>
          <Route path="/pre-change-password" element={<PrivateRoute />}>
            <Route path="/pre-change-password" element={<PreChangePassword />} />
          </Route>
          <Route path="/change-password" element={<PrivateRoute />}>
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>
          <Route path="/pre-delete-account" element={<PrivateRoute />}>
            <Route path="/pre-delete-account" element={<PreDeleteAccountUser />} />
          </Route>
          <Route path="/delete-me-account" element={<PrivateRoute />}>
            <Route path="/delete-me-account" element={<DeleteAccountUser />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
