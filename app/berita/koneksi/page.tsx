'use client';

import Image from "next/image";
import Link from "next/link";

export default function KoneksiPage() {
  const KoneksiItems = [
    {
      title: "KONEKSI : List Web Referensi Design Visual",
      img: "/Koneksi7-2.jpg",
      desc: `🎨 KONEKSI: Konten Edukasi Sistem Informasi 📌 Edisi: Free Resources untuk Designer!! Wajib Save nihh! Buat kamu yang suka ngedesain, baik pemula atau pro, pasti sering cari sumber desain gratis yang bisa diakses kapan aja, tanpa ribet Nah, kali in...`,
      link: "https://www.instagram.com/p/DL6PH__THHi/",
    },
    {
      title: "KONEKSI : Kamu Harus Tahu! Apa Itu DDoS Attack?!",
      img: "/Koneksi7-1.jpg",
      desc: `🛡️ KONEKSI: Konten Edukasi Sistem Informasi 📡 Edisi: Kamu Harus Tahu! Apa Itu DDoS Attack dan Mengapa Penting untuk Dipahami? Di era digital saat ini, ancaman keamanan siber menjadi isu yang semakin penting. Salah satu serangan yang ...`,
      link: "https://www.instagram.com/p/DLt5am5zn4P/",
    },
    {
      title: "KONEKSI : Mengenal Cloud Computing dan Manfaatnya",
      img: "/Koneksi6-2.jpg",
      desc: `☁️ KONEKSI: Konten Edukasi Sistem Informasi 📡 Edisi: Mengenal Cloud Computing dan Manfaatnya. Teknologi berkembang pesat—dan Cloud Computing adalah salah satu bagian penting dari revolusi digital yang tidak bisa diabaikan. Mulai dari ...`,
      link: "https://www.instagram.com/p/DLbvpGXzVjQ/",
    },
    {
      title: "KONEKSI : List Web Referensi Design Visual",
      img: "/Koneksi6-1.jpg",
      desc: `🚀 LAUNCHING PERDANA! Selamat datang di konten edukatif terbaru dari HIMASI 🎉: 📚 KONEKSI – Konten Edukasi Sistem Informasi. Sebuah ruang belajar dan berbagi wawasan seputar dunia teknologi, coding, desain, dan sistem informasi yang bakal`,
      link: "https://www.instagram.com/p/DK_dTS1zaSs/",
    },
  ];

  return (
    <main>
      <section className="relative h-190 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/back1.jpg"
            alt="KONEKSI Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 px-6 md:pl-40 max-w-2xl text-white space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">KONEKSI</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            KONEKSI (Konten Edukasi Sistem Informasi) adalah ruang edukatif resmi HIMASI untuk berbagi wawasan seputar teknologi, coding, desain, dan informasi terkini.
          </p>
          <Link
            href="#konten"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-medium"
          >
            Explore →
          </Link>
        </div>
      </section>

      <section id="konten" className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-3">
          Edisi 2025
        </h2>
        <div className="w-20 h-1 bg-blue-950 mx-auto mb-5 rounded-full" />
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {KoneksiItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col md:flex-row gap-4"
            >
              <div className="flex-shrink-0 w-full md:w-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line mb-3">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
