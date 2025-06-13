import Image from "next/image";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteBanner from "@/components/QuoteBanner";
import BeritaCarousel from "@/components/BeritaCarousel";
import AspirasiForm from "@/components/Aspirasi";
import Fitur from "@/components/Fitur";

export const metadata = {
  title: "HIMASI ISB Atma Luhur",
  description: "Menu Utama HIMASI ISB Atma Luhur.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      <section className="relative w-full h-screen">
        <Image
          src="/back1.jpg"
          alt="HIMASI Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-blue-950/20 flex flex-col justify-center items-center text-white z-10">
          <h1 className="text-6xl font-bold">HIMASI</h1>
          <p className="mt-4 text-2xl text-center">
            Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
          </p>
        </div>
      </section>

      <section className="container mx-auto py-20 px-6 md:px-10 bg-gray-100 rounded-2xl">
        <h2 className="text-black text-3xl font-bold mb-2 text-center">HIMASI</h2>
        <div className="w-24 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-black text-3xl font-bold mb-4 text-center md:text-left">Apa itu HIMASI?</h3>
            <p className="text-black text-lg mb-6 text-center md:text-left">
              HIMASI adalah organisasi mahasiswa yang berada di bawah naungan Program Studi Sistem Informasi di Institut Sains dan Bisnis Atma Luhur. Organisasi ini bertujuan untuk menjadi wadah pengembangan diri, kreativitas, dan keterampilan mahasiswa dalam bidang akademik, sosial, serta teknologi informasi. Organisasi ini berfungsi sebagai jembatan yang menghubungkan mahasiswa dengan dunia akademik, industri, dan masyarakat melalui serangkaian program kerja yang terstruktur. HIMASI berupaya meningkatkan kompetensi akademik anggotanya melalui seminar, workshop, dan diskusi, sekaligus mengasah keterampilan praktis melalui pelatihan teknis dan proyek kolaboratif...
            </p>
            <p className="text-black mt-4 text-xl font-bold text-center md:text-left">
              &quot;AKTIF, KREATIF, EFEKTIF&quot;
            </p>
            <a href="/tentang">
              <Button className="w-full mt-6">Selengkapnya</Button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-black mb-4">Visi</h3>
            <ul className="list-disc list-outside pl-6 text-gray-800 text-lg space-y-2">
              <li>Menjadikan HIMASI sebagai organisasi unggul dalam bidang Teknologi dan menjawab tantangan globalisasi.</li>
              <li>Menjadi wadah kreatif, inovatif, dan intelektual bagi Mahasiswa ISB Atma Luhur khususnya jurusan Sistem Informasi.</li>
            </ul>
            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Misi</h3>
            <ul className="list-disc list-outside pl-6 text-gray-800 text-lg space-y-2">
              <li>Menciptakan mahasiswa yang aktif dan inovatif di bidang teknologi dan masyarakat.</li>
              <li>Mendorong kerjasama antar mahasiswa jurusan Sistem Informasi.</li>
              <li>Menjadi pelopor kegiatan yang berdampak dalam dan luar kampus.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gray-100">
        <h2 className="text-black text-3xl font-bold mb-2 text-center">Video Profil HIMASI</h2>
        <div className="w-24 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            className="rounded-lg w-full h-full"
            src="https://www.youtube.com/embed/Bc1bTNvdPiY?si=W6-0_XhEbKjGc5Hb"
            title="Video Profil HIMASI"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 space-y-16">
        <Fitur />
        <BeritaCarousel />
        <QuoteBanner />
        <AspirasiForm />
        <FAQAccordion />
      </section>
    </main>
  );
}
