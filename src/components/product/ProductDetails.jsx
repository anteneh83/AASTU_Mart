// src/components/product/ProductDetails.jsx
import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductFeedback from './ProductFeedback';
import SellerInfo from './SellerInfo';

const ProductDetails = ({ productId }) => {
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 object-cover"
      />
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <ProductFeedback productId={product.id} />
        <SellerInfo seller={product.seller} />
      </div>
    </div>
  );
};

export default ProductDetails;
