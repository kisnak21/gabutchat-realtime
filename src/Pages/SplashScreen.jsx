import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
   const navigate = useNavigate();

   const toLogin = () => {
      navigate('/login');
   };

   useEffect(() => {
      const user = localStorage.getItem('gabutchat_user');
      if (user) {
         return navigate('/chat');
      }
   }, []);
   return (
      <main className="flex h-screen w-screen flex-col bg-gradient-to-r from-[#1488cc] to-[#2b32b2] p-8">
         <h1 className="text-6xl font-bold leading-10 text-white">
            Boring Chat App
         </h1>
         <p className="mt-5 text-base font-semibold text-white">
            Chat apapun yang kamu mau ke orang orang bosan diseluruh dunia..
         </p>
         <button
            className="z-[999] mt-auto h-11 w-full rounded-lg bg-black text-white"
            onClick={toLogin}
         >
            Register Now
         </button>
         <img
            src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="absolute top-0 left-0 h-screen w-screen object-cover opacity-25"
         />
      </main>
   );
};

export default SplashScreen;
