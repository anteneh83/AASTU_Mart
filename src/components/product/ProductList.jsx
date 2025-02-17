// src/components/product/ProductList.jsx
import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = ({ category }) => {
  const { products } = useContext(ProductContext);

  const filteredProducts =
    category && category !== 'all'
      ? products.filter(
          (product) =>
            product.category.toLowerCase() === category.toLowerCase()
        )
      : products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
