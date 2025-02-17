// src/components/chat/ChatWindow.jsx
import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import ChatList from './ChatList';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div className="border rounded p-4">
      <div className="h-64 overflow-y-scroll border-b mb-4">
        <ChatList messages={messages} />
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
