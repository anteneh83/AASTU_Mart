// src/pages/ChatPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ChatWindow from '../components/chat/ChatWindow';

const ChatPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Chat with Seller</h2>
        <ChatWindow />
      </div>
      <Footer />
    </>
  );
};

export default ChatPage;
