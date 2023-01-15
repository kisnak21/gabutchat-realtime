import React, { createContext, useEffect, useState } from 'react';

export const AvatarContext = createContext();

const AvatarContextProvider = ({ children }) => {
   // state awal
   const [avatar, setAvatar] = useState('');

   useEffect(() => {
      setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`);
   }, []);
   return (
      <AvatarContext.Provider value={{ avatar, setAvatar }}>
         {children}
      </AvatarContext.Provider>
   );
};

export default AvatarContextProvider;
