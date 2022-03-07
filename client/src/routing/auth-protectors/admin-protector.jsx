import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/auth';
import routes from '../routes';

const AdminProtector = ({ children }) => {
  const auth = useSelector(authSelector);

  if (!auth.loggedIn) {
    return <Navigate to={routes.LoginPage} />;
  }

  if (auth.user.role !== 'ADMIN') { // jeigu jungiasi ne admin
    return <Navigate to={routes.HomePage} />;
  }

  return children;
};

export default AdminProtector;
