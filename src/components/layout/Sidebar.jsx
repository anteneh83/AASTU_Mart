// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const categories = ['Electronics', 'Books', 'Clothing', 'Furniture'];
  
  return (
    <aside className="bg-gray-100 p-4 w-64">
      <h3 className="font-bold mb-2">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-1">
            <Link to={`/category/${category.toLowerCase()}`} className="hover:underline">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
