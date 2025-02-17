// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Welcome to AASTU Mart</h1>
        <p>Your go-to online marketplace for AASTU students!</p>
        {/* Add banners, featured products, or category sections here */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
