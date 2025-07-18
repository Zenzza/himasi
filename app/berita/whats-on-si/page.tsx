import Image from "next/image";
import Link from "next/link";
import VideoCard from "@/components/WhatsonSI";

export const metadata = {
  title: "WOS - HIMASI ISB Atma Luhur",
  description: "Podcast Singkat dari HIMASI ISB Atma Luhur Yang Mengangkat Isu dan Pertanyaan Mahasiswa!.",
};

export default function WOSPage() {
  return (
    <main>
      <section className="relative h-190 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/back1.jpg"
            alt="WOS Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 px-6 md:pl-40 max-w-2xl text-white space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">What&apos;s on SI?</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Konten QnA seru dari HIMASI yang ngebahas pertanyaan-pertanyaan seputar dunia Sistem Informasi! Mulai dari hal yang sering bikin bingung, mitos-mitos di dunia tech, sampai insight dari sudut pandang mahasiswa SI
          </p>
          <Link
            href="#konten"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-medium"
          >
            Explore →
          </Link>
        </div>
      </section>
        <section id="konten" className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-3">
            Season 1
          </h2>
          <div className="w-20 h-1 bg-blue-950 mx-auto mb-5 rounded-full" />
          <div className="grid md:grid-cols-3 gap-6 p-6 bg-gray-100">
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
              title="WOS Epsiode 6 : Udah ah, capek mikir title"
              videoId="dQw4w9WgXcQ" 
            />
            </div>
        </section>
      </main>
  );
}


