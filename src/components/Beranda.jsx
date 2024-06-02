import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarLogin } from './Navbar';
import headerImage from '../assets/header_masuk.png';
import headerBeranda from '../assets/header_beranda.png';
import animalRescueImage from '../assets/animal_resque.png';
import rescuersListedImage from '../assets/rescuers_listed.png';
import animalHousesImage from '../assets/animal_houses.png';
import adopterStatistikImage from '../assets/adopter_statistik.png';
import pilihKami1Image from '../assets/pilihkami_1.png';
import pilihKami2Image from '../assets/pilihkami_2.png';
import pilihKami3Image from '../assets/pilihkami_3.png';
import logoFooter from '../assets/logo_footer.png';
import footerKaki from '../assets/footer_kaki.png';
import footerGmaps from '../assets/footer_gmaps.png';
import footerTelepon from '../assets/footer_telepon.png';
import StatistikCard from './StatistikCard';
import FeatureCard from './FeatureCard';

const Beranda = () => {
    return (
        <div>
               <div className="bg-[#8DD67A] py-12 px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center mt-20">
                <div className="flex-1 justify-items-center text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl mb-4 md:mb-8 font-bold">Selamat Datang di Heywani</h1>
                    <p className="text-lg md:text-1xl lg:text-2xl mb-4 md:mb-8">
                        Bersama, kita bisa memberi harapan dan rumah bagi hewan. Ayo selamatkan nyawa mereka!!
                    </p>
                    <button className="bg-[#FA9F42] border-none text-black py-2 px-6 md:py-3 md:px-8 cursor-pointer rounded-xl text-lg md:text-xl mt-2 md:mt-4">
                        <Link to="/homelogin" className="no-underline text-black">
                            Selengkapnya
                        </Link>
                    </button>
                </div>
                <img src={headerImage} alt="Deskripsi gambar" className="w-full md:w-auto h-[320px] md:h-auto" style={{ maxWidth: '800px' }} />
            </div>

            <div className="bg-white py-5 text-center mt-20">
                <div className="bg-[#FA9F42] text-black text-xl md:text-3xl py-4 px-8 rounded-2xl inline-block mx-auto font-bold w-full md:max-w-[1195px] h-[94px] leading-[94px] font-poppins">
                    Terima Kasih Telah Mempercayai Kami
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-5 md:px-0">
                <StatistikCard 
                    animalRescueImage={animalRescueImage} 
                    rescuersListedImage={rescuersListedImage} 
                    animalHousesImage={animalHousesImage} 
                    adopterStatistikImage={adopterStatistikImage} 
                />  
            </div>

            <div className="bg-[#8DD67A]  lg:px-16 flex flex-col lg:flex-row justify-between items-center items-end mt-20">
                <img src={headerBeranda} alt="Deskripsi gambar" className="w-full md:w-auto h-full" style={{ maxWidth: '900px' }}  />
                <div className="flex-1 py-12 md:py-0 px-6 md:px-12 justify-items-center text-center md:text-left">
                    <h1 className="text-lg md:text-1xl lg:text-2xl mb-4 md:mb-8 font-bold">“Temukan cara Anda agar dapat ikut berperan dalam menyelamatkan dan memberikan dukungan bagi hewan di Heywani.”</h1>
                    <button className="bg-[#FA9F42] border-none text-black py-2 px-6 cursor-pointer rounded-xl text-lg md:text-xl mt-2 md:mt-4">
                        <Link to="/Popupform" className="no-underline text-black">
                            Donasi
                        </Link>
                    </button>
                    <button className="bg-[#FA9F42] border-none text-black py-2 px-6 cursor-pointer rounded-xl text-lg md:text-xl mt-2 md:mt-4 ml-6">
                        <Link to="/perhatianadopsi" className="no-underline text-black">
                            Evakuasi Hewan
                        </Link>
                    </button>
                </div>
            </div>

            <h1 className="text-center text-4xl font-bold text-black mt-20 mb-10">Mengapa Pilih Kami?</h1>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 px-4 lg:px-0 mt-20 mb-32">
                <FeatureCard
                    image={pilihKami1Image}
                    title="Peduli dan Berpengalaman"
                    description="Tim kami berkomitmen dan berpengalaman dalam menyelamatkan hewan terlantar."
                    mx="2"
                />
                <FeatureCard
                    image={pilihKami2Image}
                    title="Proses Adopsi yang Mudah"
                    description="Kami memudahkan proses adopsi untuk memastikan hewan menemukan rumah yang penuh kasih."
                    mx="2"
                />
                <FeatureCard
                    image={pilihKami3Image}
                    title="Kesehatan Terjamin"
                    description="Hewan akan mendapatkan perawatan kesehatan secara lengkap sebelum nanti diadopsi."
                    mx="2"
                />
            </div>

            <footer className="bg-[#8DD67A] text-black py-12 md:py-20">
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
                                    <span className="text-sm">Penyelamatan Hewan</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src={footerKaki} alt="Adopsi Hewan" className="mr-2 w-[37px] h-[37px]" />
                                    <span className="text-sm">Adopsi Hewan</span>
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
                                    <span className="text-sm">Pulau Jawa</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img src={footerTelepon} alt="Phone" className="mr-2 w-[37px] h-[37px]" />
                                    <span className="text-sm">0823494510</span>
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

export default Beranda;