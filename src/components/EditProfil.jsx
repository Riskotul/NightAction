import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../assets/foto_profil.png';
import logoFooter from '../assets/logo_footer.png';
import footerKaki from '../assets/footer_kaki.png';
import footerGmaps from '../assets/footer_gmaps.png';
import footerTelepon from '../assets/footer_telepon.png';
import { NavbarLogin } from './Navbar';

const EditProfil = () => {
  const [profileImage, setProfilImage] = useState(profilePicture);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <NavbarLogin />
      <div className="bg-white rounded-lg shadow-lg p-8 mt-20 md:mt-40 max-w-7xl w-full mx-auto">
        <div className="flex items-center border border-black rounded-lg p-4 mb-20 relative gap-12">
          <input
            type="file"
            id="profile-picture-input"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <img
            src={profileImage}
            alt="Profile"
            className="w-36 h-36 rounded-full cursor-pointer object-cover"
            onClick={() => document.getElementById('profile-picture-input').click()}
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">Hai</h2>
            <p className="text-black text-xl font-bold">Dimas Rahmatullah</p>
          </div>
        </div>
        <div className="border border-black rounded-lg p-8 relative gap-12">
          <h3 className="text-xl font-semibold mb-6">Informasi Pribadi</h3>
          <button className="bg-[#FA9F42] text-white py-2 px-4 rounded-lg absolute top-4 right-4">
            <Link to='/profil'>Edit</Link>
          </button>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="form-group flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="name">Nama</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="text" id="name" />
            </div>
            <div className="form-group flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="job">Pekerjaan</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="text" id="job" />
            </div>
            <div className="form-group flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="gender">Jenis Kelamin</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="text" id="gender" />
            </div>
            <div className="form-group flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="email">Email</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="email" id="email" />
            </div>
            <div className="form-group flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="birthdate">Tanggal Lahir</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="text" id="birthdate" />
            </div>
            <div className="form-group flex flex-col">
              <label className="text-gray-600 mb-2" htmlFor="phone">Nomor Telepon</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="tel" id="phone" />
            </div>
            <div className="form-group flex flex-col ">
              <label className="text-gray-600 mb-2" htmlFor="address">Alamat</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="text" id="address"/>
            </div>
            <div className="form-group flex flex-col ">
              <label className="text-gray-600 mb-2" htmlFor="password">Kata Sandi</label>
              <input className="p-2 border border-black rounded-md text-gray-700" type="password" id="password" />
            </div>
          </form>
        </div>      
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

export default EditProfil;
