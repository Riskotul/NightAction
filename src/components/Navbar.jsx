import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import profilPicture from '../assets/profil_picture.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="font-poppins bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="navbar bg-white text-black py-2 px-5 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-28 w-auto" /> 
                </div>
                <div className="hidden md:flex items-center space-x-10">
                    <NavLinks />
                </div>
                <div className="hidden md:flex items-center space-x-3">
                    <button className="bg-transparent border-2 text-black py-1 px-4 cursor-pointer rounded-md font-bold text-xl hover:bg-gray-200 transition-colors duration-200">
                        Masuk
                    </button>
                    <button className="bg-[#8DD67A] border-2 border-#8DD67A text-white py-1 px-4 cursor-pointer rounded-md font-bold text-xl hover:bg-green-500 transition-colors duration-200" style={{ backgroundColor: '#8DD67A' }}>
                        Daftar
                    </button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white py-2 px-5">
                    <NavLinks />
                    <div className="flex flex-col items-center space-y-3 mt-4">
                        <button className="bg-transparent border-2 text-black py-1 px-4 cursor-pointer rounded-md font-bold text-xl hover:bg-gray-200 transition-colors duration-200 w-full">
                            Masuk
                        </button>
                        <button className="bg-[#8DD67A] border-2 border-#8DD67A text-white py-1 px-4 cursor-pointer rounded-md font-bold text-xl hover:bg-green-500 transition-colors duration-200 w-full" style={{ backgroundColor: '#8DD67A' }}>
                            Daftar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const NavLinks = () => (
    <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 m-0 p-0 list-none items-center">
        <li>
            <Link to="/beranda" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
                Beranda
            </Link>
        </li>
        <li>
            <Link to="/tentang_kami" className="no-underline text-black font-bold text-xl hover:text-[#FA9F42] transition-colors duration-200">
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
);

export const NavbarLogin = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="font-poppins bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="navbar bg-white text-black py-2 px-5 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-28 w-auto" /> 
                </div>
                <div className="hidden md:flex items-center space-x-10">
                    <NavLinksLogin />
                </div>
                <div className="hidden md:flex items-center space-x-3">
                    <Link to="/profil">
                        <img src={profilPicture} alt="Profile" className="w-10 h-10 rounded-full" />
                    </Link>
                    <h1 className="font-bold text-[#FA9F42]">Dimas Rahmatullah</h1>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white py-2 px-5">
                    <NavLinksLogin />
                    <div className="flex flex-col items-center space-y-3 mt-4">
                        <Link to="/profil">
                            <img src={profilPicture} alt="Profile" className="w-10 h-10 rounded-full" />
                        </Link>
                        <h1 className="font-bold text-[#FA9F42]">Dimas Rahmatullah</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

const NavLinksLogin = () => (
    <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 m-0 p-0 list-none items-center">
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
);

export default Navbar;
