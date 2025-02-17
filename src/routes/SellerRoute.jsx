import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SellerRoute = ({ children }) => {
  const { isAuthenticated, user } = useContext(AuthContext);

  // Assuming the user object contains an `isSeller` flag
  if (!isAuthenticated || !user?.isSeller) {
    return <Navigate to="/" />;
  }

  return children;
};

export default SellerRoute;
