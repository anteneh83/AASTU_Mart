// src/context/ChatContext.jsx
import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  // Updated to accept sender info
  const sendMessage = (text, sender) => {
    setMessages((prev) => [
      ...prev,
      { 
        id: Date.now(), 
        text, 
        timestamp: new Date(), 
        sender, // e.g., { name: 'John Doe', isSeller: false }
      },
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
