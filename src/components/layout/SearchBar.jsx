// src/components/layout/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search products..."
        className="border p-2 rounded-l"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-r">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
