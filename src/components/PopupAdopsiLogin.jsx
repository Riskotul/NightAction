import React, { useState } from 'react';
import PopupKucing from '../assets/popup_kucing.png';
import PopupAnjing from '../assets/popup_anjing.png';
import HomeLogin from './HomeLogin';

const PopupAdopsiLogin = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopupAdopsiLogin = () => {
    setIsOpen(false);
  };

  const handleKucingClick = () => {
    closePopupAdopsiLogin(); // Close the popup
    window.location.href = 'kucinglogin'; // Redirect to the kucing page
  };

  const handleAnjingClick = () => {
    closePopupAdopsiLogin(); // Close the popup
    window.location.href = 'anjinglogin'; // Redirect to the anjing page
  };

  return (
    <>
    <HomeLogin />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center relative w-96">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closePopupAdopsiLogin}
            >
              X
            </button>
            <h2 className="text-2xl mb-4">Adopsi apa sekarang?</h2>
            <div className="flex justify-around items-center">
              <div className="text-center">
                <img
                  src={PopupKucing}
                  alt="Kucing"
                  className="w-24 h-24 rounded-full mb-2"
                />
                <button
                  className="bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-400"
                  onClick={handleKucingClick} 
                >
                  Kucing
                </button>
              </div>
              <div className="text-center">
                <img
                  src={PopupAnjing}
                  alt="Anjing"
                  className="w-24 h-24 rounded-full mb-2"
                />
                <button
                  className="bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-400"
                  onClick={handleAnjingClick} 
                >
                  Anjing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAdopsiLogin;
