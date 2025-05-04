import Image from "next/image";
import { Button } from "@/components/ui/button";
import FAQAccordion from '@/components/FAQAccordion'; 
import QuoteBanner from "@/components/QuoteBanner";
import BeritaCarousel from "@/components/BeritaCarousel";
import AspirasiForm from "@/components/Aspirasi";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      <section className="relative w-full h-[100vh]">
        <Image
          src="/back1.jpg" 
          alt="HIMASI Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-blue-950/20 flex flex-col justify-center items-center text-white z-10">
          <h1 className="text-6xl font-bold">HIMASI</h1>
          <p className="mt-4 text-2xl text-center">
            Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
          </p>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-black text-3xl font-bold mb-4 font-center">HIMASI</h2>
          <p className="text-black text-xl mb-6">
            HIMASI adalah organisasi mahasiswa yang berada di bawah naungan Program Studi Sistem Informasi di Institut Sains dan Bisnis Atma Luhur. Organisasi ini bertujuan untuk menjadi wadah pengembangan diri, kreativitas, dan keterampilan mahasiswa dalam bidang akademik, sosial, serta teknologi informasi.
          </p>
          <a href="/tentang"><Button>Selengkapnya</Button></a>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-black text-3xl font-bold mb-4">Video Profil</h2>
          <div className="w-full aspect-video">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/Bc1bTNvdPiY?si=W6-0_XhEbKjGc5Hb"
              title="Video Profil HIMASI"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
        <section className="py-12 bg-[#f1f5f9]">
        <BeritaCarousel />
        <br />
        <br />
        <QuoteBanner />
        <br />
        <br />
        <AspirasiForm />
        <br />
        <br />
        <FAQAccordion /> 
        </section>
    </main>
  );
}
