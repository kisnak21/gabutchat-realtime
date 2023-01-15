import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound';
import SplashScreen from './Pages/SplashScreen';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<SplashScreen />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/chat" element={<ChatPage />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default App;
