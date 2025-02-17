// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductList from '../components/product/ProductList';

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">{category} Products</h2>
        <ProductList category={category} />
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
