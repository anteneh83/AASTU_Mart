// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="mb-4">The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-500 underline">
          Go back Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
