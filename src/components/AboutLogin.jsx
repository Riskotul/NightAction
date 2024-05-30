import React from 'react';
import teamImage1 from '../assets/Yezika.png'; 
import teamImage2 from '../assets/eka.png'; 
import teamImage3 from '../assets/novi.png'; 
import teamImage4 from '../assets/riskotul.png'; 
import teamImage5 from '../assets/akmal.png'; 
import headerAbout from '../assets/header_about.png'; 
import galleryImage1 from '../assets/gallery_1.png'; 
import galleryImage2 from '../assets/gallery_2.png'; 
import galleryImage3 from '../assets/gallery_3.png'; 
import galleryImage4 from '../assets/gallery_4.png'; 
import logoFooter from '../assets/logo_footer.png';
import footerKaki from '../assets/footer_kaki.png';
import footerGmaps from '../assets/footer_gmaps.png';
import footerTelepon from '../assets/footer_telepon.png';
import { NavbarLogin } from './Navbar';

const AboutLogin = () => {
    return (
        <div>
            <NavbarLogin />
            <div className="bg-white py-60 px-20 flex justify-between items-center gap-10">
                <div className="container mx-auto">
                    <div className="main-content flex flex-col lg:flex-row items-center gap-10">
                        <div className="content flex-1 mt-10 lg:mt-0">
                            <h1 className="text-4xl font-bold mb-12">Tentang Kami</h1>
                            <p className="text-lg leading-7">
                                Kami berkomitmen untuk menyelamatkan, merawat, dan mencarikan rumah baru bagi hewan-hewan terlantar di Pulau Jawa. Melalui program adopsi yang bertanggung jawab, kami berusaha mengurangi populasi hewan jalanan dan memberikan mereka kesempatan hidup yang lebih baik. Misi kami mencakup penyelamatan dan perawatan hewan terlantar, menghubungkan mereka dengan keluarga yang penuh kasih, serta mengedukasi masyarakat tentang pentingnya adopsi dan perawatan hewan. Kami juga menyediakan layanan sterilisasi dan vaksinasi untuk mengurangi populasi hewan jalanan. Anda bisa membantu dengan mengadopsi hewan, menjadi relawan, atau memberikan donasi. Bersama, kita bisa menciptakan kehidupan yang lebih baik bagi hewan-hewan di Pulau Jawa.
                            </p>
                        </div>
                        <img src={headerAbout} alt="Misi Kami" className="w-[563px] h-[456px]" />
                    </div>

                    <h1 className="section-title text-4xl font-bold text-center mt-40 mb-20">Tim Kami</h1>
                    <div className="tim-kami flex flex-wrap justify-center gap-10">
                        <div className="item text-center">
                            <div className="image-container w-[250px] h-[252px] overflow-hidden rounded-full mb-4 mx-auto">
                                <img src={teamImage1} alt="Yezika Rachman" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-2xl font-bold mt-10">Yezika Rachman</p>
                            <span className="text-lg mt-20">Product Manager</span>
                        </div>
                        <div className="item text-center">
                            <div className="image-container w-[250px] h-[252px] overflow-hidden rounded-full mb-4 mx-auto">
                                <img src={teamImage2} alt="Eka Kurnia F" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-2xl font-bold mt-10">Eka Kurnia F</p>
                            <span className="text-lg mt-20">Product Designer</span>
                        </div>
                        <div className="item text-center">
                            <div className="image-container w-[250px] h-[252px] overflow-hidden rounded-full mb-4 mx-auto">
                                <img src={teamImage3} alt="Novi Indah P.S" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-2xl font-bold mt-10">Novi Indah P.S</p>
                            <span className="text-lg mt-20">Product Designer</span>
                        </div>
                        <div className="item text-center">
                            <div className="image-container w-[250px] h-[252px] overflow-hidden rounded-full mb-4 mx-auto">
                                <img src={teamImage4} alt="Riskotul M" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-2xl font-bold mt-10">Riskotul M</p>
                            <span className="text-lg mt-20">Programmer</span>
                        </div>
                        <div className="item text-center">
                            <div className="image-container w-[250px] h-[252px] overflow-hidden rounded-full mb-4 mx-auto">
                                <img src={teamImage5} alt="Akhiratul Akmal A" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-2xl font-bold mt-10">Akhiratul Akmal A</p>
                            <span className="text-lg mt-20">Programmer</span>
                        </div>
                    </div>

                    <h1 className="section-title1 text-4xl font-bold text-center mt-40 mb-20">Foto</h1>
                    <div className="zigzag-container flex flex-wrap justify-center mb-5 gap-5">
                        <div className="zigzag-item">
                            <img src={galleryImage1} alt="Gambar 1" className="w-[353px] h-[443px] object-cover rounded-xl shadow-xl" />
                        </div>
                        <div className="zigzag-item">
                            <img src={galleryImage2} alt="Gambar 2" className="w-[353px] h-[443px]  object-cover rounded-xl shadow-xl" />
                        </div>
                        <div className="zigzag-item">
                            <img src={galleryImage3} alt="Gambar 3" className="w-[353px] h-[443px]  object-cover rounded-xl shadow-xl" />
                        </div>
                        <div className="zigzag-item">
                            <img src={galleryImage4} alt="Gambar 4" className="w-[353px] h-[443px]  object-cover rounded-xl shadow-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-[#8DD67A] text-black py-20">
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

export default AboutLogin;
