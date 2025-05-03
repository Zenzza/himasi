import Image from "next/image";
import { Button } from "@/components/ui/button";
import FAQAccordion from '@/components/FAQAccordion'; 
import Link from "next/link";
import QuoteBanner from "@/components/QuoteBanner";

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
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-black text-3xl font-bold text-center mb-10">Berita HIMASI</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  link: "https://www.instagram.com/p/DJDZD2lTTQ-/",
                  image: "/Feed IG HIMASI SIAPRESIASI.png",
                  title: "SI-Apresiasi: Finalis DUTA BAHASA Provinsi Kep. Bangka Belitung 2025",
                  desc: "Keluarga besar Himpunan Mahasiswa Sistem Informasi mengucapkan selamat dan apresiasi yang sebesar-besarnya kepada: Zahra Azaria..."
                },
                {
                  link: "https://www.instagram.com/p/DIyeepqT5S4/",
                  image: "/PemenangKDL.jpg",
                  title: "PEMENANG Kompetisi Design Logo 25th DIES NATALIS ISB Atma Luhur",
                  desc: "🔥 Inilah Sang Juara! 🔥 Dengan penuh kebanggaan, kami umumkan Marvel Luzniky dan Valentina dari SMK BAKTI PANGKALPINANg sebagai Pemenang Kompetisi..."
                },
                {
                  link: "https://www.instagram.com/p/DHu0c53zyB_",
                  image: "/COVER 2.png",
                  title: "Dokumentasi HIMASI BERBAGI 2025",
                  desc: "Kebahagiaan sejati bukan hanya tentang apa yang kita miliki, tetapi juga tentang apa yang bisa kita bagikan. Dalam HIMASI BERBAGI kita belajar bahwa sekecil apa pun bantuan yang diberikan, dapat..."
                },
                {
                  link: "https://www.instagram.com/p/DHKXjoUzoLQ/",
                  image: "/FEED IG HIMASI BERBAGI (FIX).png",
                  title: "HIMASI BERBAGI 2025",
                  desc: "Program sosial dari HIMASI ISB Atma Luhur yang bertujuan menyebarkan kebaikan di bulan Ramadan bersama masyarakat..."
                },
              ].map((berita, idx) => (
              <Link key={idx} href={berita.link}>
                <div className="flex flex-col bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* Gambar */}
                  <div className="w-full aspect-[2.3/3] relative">
                    <Image
                      src={berita.image}
                      alt={berita.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-black text-lg font-semibold mb-2 line-clamp-2 text-center">{berita.title}</h3>
                    <p className="text-black text-sm line-clamp-3 text-center">{berita.desc}</p>
                  </div>
                </div>
              </Link>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <a href="/berita">
                <Button className="text-white bg-blue-600 hover:bg-blue-700">Berita Lainnya</Button>
              </a>
            </div>
          </div>
        <br />
        <br />
        <QuoteBanner />
        <br />
        <br />
        <FAQAccordion /> 
        </section>
    </main>
  );
}
