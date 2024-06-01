import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import TentangKami from './components/TentangKami';
import AdopsiKucing from './components/AdopsiKucing';
import AdopsiAnjing from './components/AdopsiAnjing';
import PopupAdopsi from './components/PopupAdopsi';
import Profil from './components/Profil';
import HomeLogin from './components/HomeLogin';
import AboutLogin from './components/AboutLogin';
import PopupAdopsiLogin from './components/PopupAdopsiLogin';
import KucingLogin from './components/KucingLogin';
import AnjingLogin from './components/AnjingLogin';
import EditProfil from './components/EditProfil';
import PopupLogout from './components/PopupLogout';
import PopupForm from './components/PopupForm';
import PopupDonasi from './components/PopupDonasi';
import PopupKontak from './components/PopupKontak';
import StatistikCard from './components/StatistikCard';
import FeatureCard from './components/FeatureCard';
import PerhatianAdopsi from './components/PerhatianAdopsi';
import PerhatianDonasi from './components/PerhatianDonasi';
import PerhatianKontak from './components/PerhatianKontak';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/beranda" element={<Beranda />} />
                <Route path="/tentang_kami" element={<TentangKami />} />
                <Route path="/adopsi_kucing" element={<AdopsiKucing />} />
                <Route path="/adopsi_anjing" element={<AdopsiAnjing />} />
                <Route path="/popupadopsi" element={<PopupAdopsi />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/editprofil" element={<EditProfil />} />
                {/* tampilan setelah login */}
                <Route path="/homelogin" element={<HomeLogin />} />
                <Route path="/aboutlogin" element={<AboutLogin />} />
                <Route path="/popupadopsilogin" element={<PopupAdopsiLogin />} />
                <Route path="/popuplogout" element={<PopupLogout />} />
                <Route path="/popupform" element={<PopupForm />} />
                <Route path="/popupdonasi" element={<PopupDonasi />} />
                <Route path="/popupkontak" element={<PopupKontak />} />
                <Route path="/kucinglogin" element={<KucingLogin />} />
                <Route path="/anjinglogin" element={<AnjingLogin />} />
                <Route path="/statistikcard" element={<StatistikCard />} />
                <Route path="/featurecard" element={<FeatureCard />} />
                <Route path="/perhatianadopsi" element={<PerhatianAdopsi />} />
                <Route path="/perhatiandonasi" element={<PerhatianDonasi />} />
                <Route path="/perhatiankontak" element={<PerhatianKontak />} />
            </Routes>
        </Router>
    );
};

export default App;
