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
    // Bagi array kucing menjadi dua bagian: atas dan bawah
    const topCats = cats.slice(0, 3);
    const bottomCats = cats.slice(3);

    return (
       <div>
             <div className="bg-[#8DD67A] py-12 px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center mt-20">
                <div className="flex-1 flex flex-col items-center lg:items-start">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-5 text-center lg:text-left">Hallo pecinta kucing</h1>
                    <p className="text-lg lg:text-xl text-center lg:text-left">
                        “Temukan sahabat kucing impianmu di<br /> sini. Kami menyediakan kucing yang <br />siap untuk diadopsi. Ayo, selamatkan <br />dan rawat kucing ini bersama kami!”
                    </p>
                </div>
                <img src={HeaderAdopsikucing} alt="Deskripsi gambar" className="w-full lg:w-auto h-auto" style={{ maxWidth: '600px' }} />
            </div>

            <div className="mt-10">
                <h1 className="text-center text-3xl lg:text-4xl font-bold mb-20 mt-20">Temukan Teman Terbaik Kamu</h1>
                {/* Grid untuk tiga kucing di atas */}
                <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 shadow-xl">  
                    {topCats.map((cat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md w-full h-auto transform hover:scale-105 transition-transform flex flex-col justify-between">
                            <div className="flex justify-center lg:justify-start">
                                <img src={cat.image} alt={cat.name} className="w-full h-56 lg:h-48 object-cover rounded-t-lg" />
                            </div>
                            <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center lg:text-left">
                                <h2 className="text-lg lg:text-xl font-bold mb-2">{cat.name}</h2>
                                <p className="text-sm lg:text-base mb-2">{cat.age}, {cat.breed}</p>
                                <button className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg shadow-xl">Adopsi</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Grid untuk tiga kucing di bawah */}
                <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-6 lg:mt-10 shadow-xl">  
                    {bottomCats.map((cat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md w-full h-auto transform hover:scale-105 transition-transform flex flex-col justify-between">
                            <div className="flex justify-center lg:justify-start">
                                <img src={cat.image} alt={cat.name} className="w-full h-56 lg:h-48 object-cover rounded-t-lg" />
                            </div>
                            <div className="bg-[#8DD67A] p-4 flex flex-col items-center text-center lg:text-left">
                                <h2 className="text-lg lg:text-xl font-bold mb-2">{cat.name}</h2>
                                <p className="text-sm lg:text-base mb-2">{cat.age}, {cat.breed}</p>
                                <button className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg shadow-xl">Adopsi</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="bg-[#8DD67A] text-black py-12 md:py-20 mt-20">
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

export default AdopsiKucing;
