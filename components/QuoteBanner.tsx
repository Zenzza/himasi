import React from 'react';

const QuoteBanner: React.FC = () => {
  return (
    <div
      className="relative h-[600px] bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/FotoKetua.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">
        <p className="text-base font-medium text-gray-200 mb-2">
          Avanza Romadhon - Ketua Umum HIMASI 2025
        </p>
        <h1 className="text-2xl md:text-4xl font-extrabold leading-snug max-w-3xl">
        Just ordinary boy <br />
        Don't expect more of me. <br />
        </h1>
      </div>
    </div>
  );
};

export default QuoteBanner;
