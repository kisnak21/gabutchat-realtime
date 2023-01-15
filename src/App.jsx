import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';
import SplashScreen from './Pages/SplashScreen';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<SplashScreen />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/chat" element={<ChatPage />} />
         <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
   );
};

export default App;
