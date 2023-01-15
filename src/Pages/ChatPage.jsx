import React, { useEffect, useState } from 'react';
import { AiOutlineSend, AiOutlineMenu } from 'react-icons/ai';
import moment from 'moment/moment';
import Menu from '../Components/Menu';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseService';
import {
   collection,
   doc,
   getDocs,
   setDoc,
   onSnapshot,
} from 'firebase/firestore';

const ChatPage = () => {
   const [showMenu, setShowMenu] = useState(false);
   const [chat, setChat] = useState([
      {
         id: 123123,
         chat: 'tes user lain',
         createdAt: Date.now(),
         user: {
            username: 'tia',
            avatar: 'https://api.multiavatar.com/tia.svg',
         },
      },
   ]);
   const [logUser, setLogUser] = useState(
      JSON.parse(localStorage.getItem('gabutchat_user'))
   );
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();

   // data dari collection chat
   const getChatCollection = async () => {
      const arrCol = [];
      const chatColRef = await collection(db, 'chat');
      const result = await getDocs(chatColRef);
      result.forEach((e) => {
         arrCol.push(e.data());
      });
      return arrCol;
   };

   // realtime update chat
   const trigChat = () => {
      const chatRef = collection(db, 'chat');
      onSnapshot(chatRef, (rec) => {
         getChatCollection().then((res) => {
            setChat(res);
         });
      });
   };

   // did mount
   useEffect(() => {
      const user = localStorage.getItem('gabutchat_user');
      if (!user) {
         navigate('/');
      }

      getChatCollection().then((res) => {
         setChat(res);
      });
      setLoading(false);

      // did update
      return () => {
         trigChat();
      };
   }, [db]);

   const handleMenu = () => {
      setShowMenu(!showMenu);
   };

   const scrollChat = () => {
      const docH = document.body.scrollHeight;
      window.scrollTo(0, docH);
   };

   // handle chat
   const handleChat = (e) => {
      e.preventDefault();
      const cht = e.target.chat.value;

      if (!cht) {
         return;
      }

      const user = JSON.parse(localStorage.getItem('gabutchat_user'));
      e.target.chat.value = '';

      const chatRef = doc(db, 'chat', Date.now() + logUser.username);
      setDoc(chatRef, {
         id: Date.now(),
         chat: cht,
         createdAt: Date.now(),
         user: user,
      }).then((res) => {
         console.log(res);
      });
      scrollChat();
   };

   if (loading) {
      return (
         <div className="flex h-screen w-screen items-center justify-center">
            loading...
         </div>
      );
   }
   return (
      <main className="flex h-screen w-screen flex-col">
         <header className="fixed top-0 left-0 flex h-16 w-full items-center justify-between bg-gradient-to-r from-orange-500 to-orange-600 px-6">
            <div className="flex items-center gap-2 text-white">
               <img src={logUser?.avatar} alt="avatar" className="h-10 w-10" />
               <h1 className="">@{logUser?.username}</h1>
            </div>
            <AiOutlineMenu
               className="cursor-pointer text-2xl text-white"
               onClick={handleMenu}
            />
         </header>

         {showMenu && <Menu />}

         <div className="mt-auto flex w-full flex-col gap-2 py-[80px] px-3">
            {chat.map((e) => (
               <div
                  className={`${
                     e.user.username !== logUser.username
                        ? 'mr-auto'
                        : 'ml-auto'
                  } flex w-auto max-w-[40%] flex-col rounded-lg bg-white p-4 shadow-md last:mb-20`}
                  key={e.id}
               >
                  <p
                     className={`${
                        e.user.username !== logUser.username
                           ? 'text-left'
                           : 'text-right'
                     }`}
                  >
                     {e.chat}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                     <img
                        src={e.user.avatar}
                        alt="avatar"
                        className="h-5 w-5"
                     />
                     <div className="flex flex-col text-slate-400">
                        <small className="text-[8px]">{e.user.username}</small>
                        <small className="text-[8px]">
                           {moment(e.createdAt).format('dddd DD/MM/YYYY hh:mm')}
                        </small>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <form
            className="gradient fixed bottom-0 left-0 flex h-16 w-full items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6"
            onSubmit={handleChat}
         >
            <input
               type="text"
               className="h-10 flex-1 rounded-xl bg-white px-4"
               id="chat"
            />
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white">
               <AiOutlineSend />
            </button>
         </form>
      </main>
   );
};

export default ChatPage;
