// src/components/forms/SignupForm.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ email: '', password: '', isSeller: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup (replace with real API call)
    login({ email: formData.email, isSeller: formData.isSeller });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full border p-2" 
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full border p-2" 
          required 
        />
      </div>
      <div className="mb-4 flex items-center">
        <input 
          type="checkbox" 
          name="isSeller" 
          checked={formData.isSeller} 
          onChange={handleChange} 
          className="mr-2" 
        />
        <label>Register as Seller</label>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
