// src/components/chat/ChatList.jsx
import React from 'react';
import ChatMessage from './ChatMessage';

const ChatList = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-2">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default ChatList;
