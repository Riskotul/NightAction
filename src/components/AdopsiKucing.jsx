import React from 'react';
import HeaderAdopsikucing from '../assets/header_adopsikucing.png';
import kucingPeter from '../assets/kucing_peter.png';
import kucingOyen from '../assets/kucing_oyen.png';
import kucingLucky from '../assets/kucing_lucky.png';
import kucingCimil from '../assets/kucing_cimil.png';
import kucingSaset from '../assets/kucing_saset.png';
import kucingBelang from '../assets/kucing_belang.png';
import logoFooter from '../assets/logo_footer.png';
import footerKaki from '../assets/footer_kaki.png';
import footerGmaps from '../assets/footer_gmaps.png';
import footerTelepon from '../assets/footer_telepon.png';

const cats = [
  { name: 'Peter', age: '3 bulan', breed: 'Domestik', image: kucingPeter },
  { name: 'Oyen', age: '4 bulan', breed: 'Domestik', image: kucingOyen },
  { name: 'Lucky', age: '4 bulan', breed: 'Himalaya', image: kucingLucky },
  { name: 'Cimol', age: '1 bulan', breed: 'Domestik', image: kucingCimil },
  { name: 'Saset', age: '2 bulan', breed: 'Persia', image: kucingSaset },
  { name: 'Belang', age: '7 bulan', breed: 'Persia', image: kucingBelang },
];

const AdopsiKucing = () => {
    return (
       <div>
            <div className="bg-[#8DD67A] py-12 px-16 flex justify-between items-center mt-20">
                <div className="flex-1 flex flex-col items-start">
                    <h1 className="text-5xl font-bold mb-5">Hallo pecinta kucing</h1>
                    <p className="text-xl">
                        “Temukan sahabat kucing impianmu di<br /> sini. Kami menyediakan kucing yang <br />siap untuk diadopsi. Ayo, selamatkan <br />dan rawat kucing ini bersama kami!”
                    </p>
                </div>
                <img src={HeaderAdopsikucing} alt="Deskripsi gambar" className="w-[774px] h-[478px]" />
            </div>

            <div className="mt-10">
                <h1 className="text-center text-4xl font-bold mb-20 mt-20">Temukan Teman Terbaik Kamu</h1>
                <div className="flex flex-wrap justify-center gap-20 mx-20">  
                    {cats.map((cat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md m-3 w-80 h-96 transform hover:scale-105 transition-transform flex flex-col justify-between mt-20">
                            <img src={cat.image} alt={cat.name} className="w-[320px] h-[250px] object-cover " />
                            <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center shadow-xl">
                                <h2 className="text-xl font-bold mb-2">{cat.name}</h2>
                                <p className="mb-2">{cat.age}, {cat.breed}</p>
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

export default AdopsiKucing;
