import React, { useState } from 'react';
import PopupKucing from '../assets/popup_kucing.png';
import PopupAnjing from '../assets/popup_anjing.png';
import Beranda from './Beranda';

const PopupAdopsi = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopupAdopsi = () => {
    setIsOpen(false);
  };

  const handleKucingClick = () => {
    closePopupAdopsi(); 
    window.location.href = 'adopsi_kucing'; 
  };

  const handleAnjingClick = () => {
    closePopupAdopsi(); 
    window.location.href = 'adopsi_anjing'; 
  };

  return (
    <>
    <Beranda />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center relative w-96">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closePopupAdopsi}
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
                  onClick={handleKucingClick} // Call handleKucingClick when the Kucing button is clicked
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
                  onClick={handleAnjingClick} // Call handleAnjingClick when the Anjing button is clicked
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

export default PopupAdopsi;
