import React from 'react';
import HeaderAdopsianjing from '../assets/header_adopsianjing.png';
import anjingXero from '../assets/anjing_xero.png';
import anjingGaltier from '../assets/anjing_galtier.png';
import anjingPutih from '../assets/anjing_putih.png';
import anjingSusu from '../assets/anjing_susu.png';
import anjingWoofy from '../assets/anjing_woofy.png';
import anjingLove from '../assets/anjing_love.png';
import logoFooter from '../assets/logo_footer.png';
import footerKaki from '../assets/footer_kaki.png';
import footerGmaps from '../assets/footer_gmaps.png';
import footerTelepon from '../assets/footer_telepon.png';
import Navbar, { NavbarLogin } from './Navbar';

const dogs = [
  { name: 'Xero', age: '1 tahun', breed: 'Dalmatian', image: anjingXero },
  { name: 'Galtier', age: '6 bulan', breed: 'Cavallier', image: anjingGaltier },
  { name: 'Putih', age: '8 bulan', breed: 'Dalmatian', image: anjingPutih },
  { name: 'Susu', age: '10 bulan', breed: 'Anatolian', image: anjingSusu },
  { name: 'Woofy', age: '5 bulan', breed: 'Anatolian', image: anjingWoofy },
  { name: 'Love', age: '2 tahun', breed: 'Dalmatian', image: anjingLove },
];

const AnjingLogin = () => {
    return (
       <div>
            <NavbarLogin />
            <div className="bg-[#8DD67A] py-12 px-16 flex justify-between items-center mt-40">
                <div className="flex-1 flex flex-col items-start">
                    <h1 className="text-5xl font-bold mb-5">Hallo pecinta anjing</h1>
                    <p className="text-xl">
                        “Temukan sahabat anjing impianmu di sini. Kami menyediakan anjing yang siap untuk diadopsi. Ayo, selamatkan dan rawat anjing ini bersama kami!”
                    </p>
                </div>
                <img src={HeaderAdopsianjing} alt="Deskripsi gambar" className="w-[774px] h-[478px]" />
            </div>

            <div className="mt-10">
                <h1 className="text-center text-4xl font-bold mb-20 mt-20">Temukan Teman Terbaik Kamu</h1>
                <div className="flex flex-wrap justify-center gap-20 mx-20">  
                    {dogs.map((dog, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md m-3 w-80 h-96 transform hover:scale-105 transition-transform flex flex-col justify-between mt-20">
                            <img src={dog.image} alt={dog.name} className="w-[320px] h-[250px] object-cover " />
                            <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center shadow-xl">
                                <h2 className="text-xl font-bold mb-2">{dog.name}</h2>
                                <p className="mb-2">{dog.age}, {dog.breed}</p>
                                <button className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg shadow-xl">Adopt</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="bg-[#8DD67A] text-black py-20 mt-20">
                <div className="container mx-auto flex flex-wrap justify-around">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 px-4">
                        <div className="footer-logo">
                            <img src={logoFooter} alt="Logo" className="mb-4 w-[138px] h-[65px]" />
                            <p className="text-sm">“Bersama Heywani, mari selamatkan dan adopsi hewan yang membutuhkan. Setiap tindakan kita memberi harapan baru bagi mereka.”</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 px-4">
                        <div className="footer-services">
                            <h3 className="text-xl mb-4">Kami Melayani</h3>
                            <ul>
                                <li className="flex items-center mb-2">
                                    <img src={footerKaki} alt="Penyediaan Pangan" className="mr-2 w-[37px] h-[37px]" />
                                    Penyelamatan Hewan
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src={footerKaki} alt="Adopsi Hewan" className="mr-2 w-[37px] h-[37px]" />
                                    Adopsi Hewan
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 px-4">
                        <div className="footer-contact">
                            <h3 className="text-xl mb-4">Hubungi Kami</h3>
                            <ul>
                                <li className="flex items-center mb-2">
                                    <img src={footerGmaps} alt="Nama" className="mr-2 w-[37px] h-[37px]" />
                                    Pulau Jawa
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src={footerTelepon} alt="Phone" className="mr-2 w-[37px] h-[37px]" />
                                    0823494510
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 px-4">
                        <div className="footer-follow">
                            <h3 className="text-xl mb-4">Follow Us</h3>
                            <ul className="flex">
                                <li className="mr-4 w-[24px] h-[24px]"><a href="#"><i className='bx bxl-instagram text-xl text-white'></i></a></li>
                                <li className="mr-4 w-[24px] h-[24px]"><a href="#"><i className='bx bxl-twitter text-xl text-white'></i></a></li>
                                <li className="mr-4 w-[24px] h-[24px]"><a href="#"><i className='bx bxl-tiktok text-xl text-white'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[#8DD67A] text-black text-center py-4">
                    Copyright 2024 © Heywani. All rights Reserved.
                </div>
            </footer>
       </div>
    );
};

export default AnjingLogin;
