// src/pages/SellerPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const SellerPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Seller Dashboard</h2>
        {/* Insert seller-specific components, such as product listings or analytics */}
      </div>
      <Footer />
    </>
  );
};

export default SellerPage;
