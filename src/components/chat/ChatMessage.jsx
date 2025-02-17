// src/components/chat/ChatMessage.jsx
import React from 'react';

const ChatMessage = ({ message }) => {
  const { text, timestamp, sender } = message;
  const isSeller = sender?.isSeller;

  return (
    <div
      className={`mb-2 p-2 rounded max-w-md ${
        isSeller ? 'bg-blue-100 text-blue-800 self-end' : 'bg-gray-100 text-gray-800 self-start'
      }`}
    >
      <div className="flex items-center mb-1">
        <span className="font-bold mr-2">{sender ? sender.name : 'Unknown'}</span>
        <span className="text-xs text-gray-600">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
      </div>
      <div>{text}</div>
    </div>
  );
};

export default ChatMessage;
