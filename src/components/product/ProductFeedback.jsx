// src/components/product/ProductFeedback.jsx
import React, { useContext } from 'react';
import { FeedbackContext } from '../../context/FeedbackContext';

const ProductFeedback = ({ productId }) => {
  const { feedback, updateFeedback } = useContext(FeedbackContext);
  const productFeedback = feedback[productId] || { likes: 0, dislikes: 0 };

  const handleLike = () => {
    updateFeedback(productId, 'like');
  };

  const handleDislike = () => {
    updateFeedback(productId, 'dislike');
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Like ({productFeedback.likes})
      </button>
      <button
        onClick={handleDislike}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Dislike ({productFeedback.dislikes})
      </button>
    </div>
  );
};

export default ProductFeedback;
