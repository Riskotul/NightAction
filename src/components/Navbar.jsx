import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import profilPicture from '../assets/profil_picture.png';

export const Navbar = () => {
    return (
        <div className="font-poppins bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="navbar bg-white text-black py-2 px-5 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-40 w-auto" /> 
                </div>
                <ul className="flex space-x-10 m-0 p-0 list-none items-center">
                    <li>
                        <Link to="/beranda" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link to="/tentang_kami" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200 active:text-[#FA9F42]">
                            Tentang Kami
                        </Link>
                    </li>
                    <li>
                        <Link to="/layanan" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Layanan
                        </Link>
                    </li>
                    <li>
                        <Link to="/kontak" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Kontak
                        </Link>
                    </li>
                    <li>
                        <Link to="/donasi" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Donasi
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-3">
                    <button className="bg-transparent border-2 text-black py-1 px-4 cursor-pointer rounded-md font-bold text-xl hover:bg-gray-200 transition-colors duration-200">
                        Masuk
                    </button>
                    <button className="bg-green-400 border-2 border-#8DD67A text-white py-2 px-6 cursor-pointer rounded-md font-bold text-xl hover:bg-green-500 transition-colors duration-200" style={{ backgroundColor: '#8DD67A' }}>
                        Daftar
                    </button>
                </div>
            </div>
            {/* Konten untuk memastikan ada cukup ruang untuk scroll */}
            <div style={{ height: '0.1rem' }}></div>
        </div>
    );
};

export const NavbarLogin = () => {
    return (
        <div className="font-poppins bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="navbar bg-white text-black py-2 px-5 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-40 w-auto" /> 
                </div>
                <ul className="flex space-x-10 m-0 p-0 list-none items-center">
                    <li>
                        <Link to="/homelogin" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutlogin" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Tentang Kami
                        </Link>
                    </li>
                    <li>
                        <Link to="/layanan" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Layanan
                        </Link>
                    </li>
                    <li>
                        <Link to="/kontak" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Kontak
                        </Link>
                    </li>
                    <li>
                        <Link to="/donasi" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                            Donasi
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-3">
                    <Link to="/profil">
                        <img src={profilPicture} alt="Profile" className="w-16 h-16" />
                    </Link>
                    <h1 className="font-bold text-[#FA9F42]">Dimas Rahmatullah</h1>
                </div>
            </div>
            <div style={{ height: '0.1rem' }}></div>
        </div>
    );
};

export default Navbar;
