export const metadata = {
  title: "What's On SI - HIMASI ISB Atma Luhur",
  description: "Secret HIMASI ISB Atma Luhur.",
};
import VideoCard from "@/components/WhatsonSI";

export default function BeritaPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-[url('/back1.jpg')] bg-cover bg-center text-white py-28 text-center">
          <h1 className="text-4xl font-bold pt-16">What&apos;s On SI?</h1>
          <p className="text-xl mt-4">FAQ dan Fun Fact around SISTEM INFORMASI</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <div className="bg-gray-100 p-10 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-900">ORIGINAL SERIES</h2>
            <br />
            <div className="w-60 h-1 bg-blue-950 mx-auto mb-5 rounded-full" />
            <p className="text-xl mt-2 text-blue-950">What&apos;s on SI adalah orginal series yang dibuat dan dikelola oleh divisi MEDKOMINFO dengan tujuan menyebarkan informasi tentang Sistem Informasi serta dapat menambah ilmu seputar SI kepada khalayak umum.</p>
        </div>
      </section>
        <section className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 p-6 bg-white">
            <VideoCard
              title="WOS Epsiode 1 : Apa sih yang dipelajari di SI?"
              videoId="dQw4w9WgXcQ" 
            />
            <VideoCard
              title="WOS Epsiode 2 : Seseru apa sih di SI?"
              videoId="dQw4w9WgXcQ"
            />
            <VideoCard
              title="WOS Epsiode 3 : Apa kesehariana mahasiswa SI?"
              videoId="dQw4w9WgXcQ"
            />
            <VideoCard
              title="WOS Epsiode 4 : Day in my life EDISI Sistem Informasi?"
              videoId="dQw4w9WgXcQ" 
            />
            <VideoCard
              title="WOS Epsiode 5 : Keseharian HIMASI"
              videoId="dQw4w9WgXcQ" 
            />
            <VideoCard
              title="WOS Epsiode 6 : Udah ada capek mikir title"
              videoId="dQw4w9WgXcQ" 
            />
            </div>
        </section>
    </div>
  );
}


