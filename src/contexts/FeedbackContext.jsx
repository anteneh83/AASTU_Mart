// src/context/FeedbackContext.jsx
import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Stores feedback in the shape: { [productId]: { likes: number, dislikes: number } }
  const [feedback, setFeedback] = useState({});

  const updateFeedback = (productId, type) => {
    setFeedback((prev) => {
      const productFeedback = prev[productId] || { likes: 0, dislikes: 0 };
      if (type === 'like') {
        productFeedback.likes += 1;
      } else if (type === 'dislike') {
        productFeedback.dislikes += 1;
      }
      return { ...prev, [productId]: productFeedback };
    });
  };

  return (
    <FeedbackContext.Provider value={{ feedback, updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
