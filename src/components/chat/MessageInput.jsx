// src/components/chat/MessageInput.jsx
import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/AuthContext';

const MessageInput = () => {
  const { sendMessage } = useContext(ChatContext);
  const { user } = useContext(AuthContext); // Assume user contains { name, isSeller }
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      // Pass both message text and sender info
      sendMessage(input, user);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="flex-grow border p-2 rounded-l"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-r">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
