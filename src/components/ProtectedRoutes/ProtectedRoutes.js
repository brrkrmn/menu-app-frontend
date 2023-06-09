import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const userToken = localStorage.getItem('loggedInUser')
  let auth = { token: userToken };
  return auth.token ? <Outlet /> : <Navigate to='/login' />  
}

export default ProtectedRoutes;
