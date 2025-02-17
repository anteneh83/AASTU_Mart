// src/pages/SignupPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SignupForm from '../components/forms/SignupForm';

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <SignupForm />
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
