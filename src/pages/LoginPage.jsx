// src/pages/LoginPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
