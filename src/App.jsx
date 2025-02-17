import './App.css'
import React from 'react';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { FeedbackProvider } from './context/FeedbackContext';
import { ChatProvider } from './context/ChatContext';


function App() {

  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <FeedbackProvider>
            <ChatProvider>
              <AppRouter />
            </ChatProvider>
          </FeedbackProvider>
        </ProductProvider>
      </AuthProvider> 

    </>
  )
}

export default App
