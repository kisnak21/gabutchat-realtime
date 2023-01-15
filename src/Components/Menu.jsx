import React from 'react';
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
   const navigate = useNavigate();
   const handleLogout = () => {
      localStorage.clear();
      navigate('/');
   };
   return (
      <div className="fixed top-16 right-0 flex w-[30%] flex-col bg-white shadow-lg">
         <div className="flex h-10 w-full items-center justify-between px-3">
            <MdLogout onClick={handleLogout} /> Logout
         </div>
         <div className="flex h-10 w-full items-center justify-between px-3">
            <IoSettingsOutline /> Setting
         </div>
      </div>
   );
};

export default Menu;
