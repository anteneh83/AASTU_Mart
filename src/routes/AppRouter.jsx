// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProductPage from '../pages/ProductPage';
import SellerPage from '../pages/SellerPage';
import CategoryPage from '../pages/CategoryPage';
import ChatPage from '../pages/ChatPage';
import NotFound from '../pages/NotFound';

// Import route protection components
import ProtectedRoute from './ProtectedRoute';
import SellerRoute from './SellerRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />

        {/* Protected Route: Only for logged in users */}
        <Route 
          path="/chat" 
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          } 
        />

        {/* Seller Route: Only for sellers */}
        <Route 
          path="/seller" 
          element={
            <SellerRoute>
              <SellerPage />
            </SellerRoute>
          } 
        />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
