import React, { useContext, useEffect } from 'react';
import { AvatarContext } from '../context/AvatarContextProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
   const navigate = useNavigate();
   const { avatar, setAvatar } = useContext(AvatarContext);

   useEffect(() => {
      const user = localStorage.getItem('gabutchat_user');
      if (user) {
         return navigate('/chat');
      }
   }, []);

   const handleAvatar = () => {
      setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const username = e.target.username.value;

      localStorage.setItem(
         'gabutchat_user',
         JSON.stringify({
            id: Date.now(),
            username: username,
            avatar: avatar,
         })
      );
      navigate('/chat');
   };

   return (
      <main className="flex h-screen w-screen flex-col bg-gradient-to-t from-orange-700 to-orange-500 p-8">
         <form
            className="z-[999] flex w-full flex-col gap-4 rounded-lg bg-white p-6 shadow-lg"
            onSubmit={handleSubmit}
         >
            <div className="relative mx-auto w-28">
               <img
                  src={avatar}
                  alt="avatar login"
                  className="mx-auto h-28 w-28"
               />
               <button
                  className="absolute -right-3 top-16 h-8 w-8 rounded-full bg-slate-600 text-white"
                  type="button"
                  onClick={handleAvatar}
               >
                  ♻️
               </button>
            </div>
            <div className="flex flex-col gap-2">
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  id="username"
                  required
                  className="h-12 w-full rounded-lg border-[1px] border-gray-400 px-3"
               />
            </div>
            <button
               className="h-12 w-full rounded-lg bg-black text-white"
               type="submit"
            >
               Login
            </button>
         </form>
         <img
            src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="absolute top-0 left-0 h-screen w-screen object-cover opacity-25"
         />
      </main>
   );
};

export default LoginPage;
