import React from 'react';
import error from '../assets/error.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate();

   const toBack = () => {
      navigate('/');
   };
   return (
      <div>
         <p className="mx-auto text-center text-4xl">Sorry, Page Not Found</p>
         <p className="mx-auto text-center text-6xl text-red-700">404</p>
         <img
            src={error}
            alt="notfound"
            width={750}
            height={750}
            className="mx-auto"
         />
         <button
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-lg bg-black text-white"
            onClick={toBack}
         >
            Go Back
         </button>
      </div>
   );
};

export default NotFound;
