// src/components/product/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductFeedback from './ProductFeedback';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
      </Link>
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <ProductFeedback productId={product.id} />
    </div>
  );
};

export default ProductCard;
