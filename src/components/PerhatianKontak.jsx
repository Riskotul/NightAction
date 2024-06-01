import React from 'react';
import { Link } from 'react-router-dom';

const PerhatianKontak = () => {
    return (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white rounded-lg shadow-lg w-80 p-6">
                <div className="absolute bg-[#FA4242] rounded-full w-32 h-32 -top-16 left-1/2 transform -translate-x-1/2 flex justify-center items-center shadow-md">
                    <span className="text-black font-bold text-4xl">!</span>
                </div>
                <div className="pt-16 text-center">
                    <h1 className="text-2xl font-bold mb-4 text-black">Perhatian</h1>
                    <p className="text-lg text-black mb-6">
                        Untuk memberikan respons terbaik kepada Anda . Silahkan masuk/daftar akun terlebih dahulu
                    </p>
                    <Link to="/beranda" className="inline-block bg-[#FA9F42] text-white py-2 px-4 rounded-full hover:bg-orange-600">
                        Kembali
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default PerhatianKontak;
