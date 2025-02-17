// src/components/forms/LoginForm.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration: directly log in (replace with real authentication)
    login({ email: credentials.email, isSeller: false });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input 
          type="email" 
          name="email" 
          value={credentials.email} 
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
          value={credentials.password} 
          onChange={handleChange} 
          className="w-full border p-2" 
          required 
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
