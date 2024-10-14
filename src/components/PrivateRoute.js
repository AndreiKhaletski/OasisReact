// src/components/PrivateRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization');

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
