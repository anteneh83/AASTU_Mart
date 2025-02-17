// src/context/ProductContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products data from an API or dummy data source
  useEffect(() => {
    // For demonstration, you might load dummy data:
    // setProducts(dummyProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
