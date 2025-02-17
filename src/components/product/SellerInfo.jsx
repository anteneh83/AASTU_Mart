// src/components/product/SellerInfo.jsx
import React from 'react';

const SellerInfo = ({ seller }) => {
  if (!seller) return null;

  return (
    <div className="border-t mt-4 pt-4">
      <h4 className="text-lg font-bold">Seller Information</h4>
      <p>Name: {seller.name}</p>
      <p>Contact: {seller.contact}</p>
    </div>
  );
};

export default SellerInfo;
