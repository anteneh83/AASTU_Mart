// src/pages/ProductPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductDetails from '../components/product/ProductDetails';

const ProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <ProductDetails productId={id} />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
