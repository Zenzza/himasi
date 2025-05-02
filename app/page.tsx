import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FAQAccordion from '@/components/FAQAccordion'; 

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
          <h2 className="text-black text-3xl font-bold mb-4">HIMASI</h2>
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

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">Berita HIMASI</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a href="https://www.instagram.com/p/DJDZD2lTTQ-/">
            <Card>
              <CardContent className="p-4">
                <Image src="/Feed IG HIMASI SIAPRESIASI.png" alt="Berita 1" width={400} height={200} className="rounded-md mb-4" />
                <h3 className="text-black text-xl font-semibold mb-2">SI-Apresiasi : Finalis DUTA BAHASA Provinsi Kep. Bangka Belitung 2025</h3>
                <p className="text-black">Keluarga besar Himpunan Mahasiswa Sistem Informasi mengucapkan selamat dan apresiasi yang sebesar-besarnya kepada: Zahra Azaria...</p>
              </CardContent>
            </Card>
            </a>
            <a href="https://www.instagram.com/p/DIyeepqT5S4/">
            <Card>
              <CardContent className="p-4">
                <Image src="/PemenangKDL.jpg" alt="Berita 2" width={400} height={200} className="rounded-md mb-4" />
                <h3 className="text-black text-xl font-semibold mb-2">PEMENANG Kompetisi Design Logo 25th DIES NATALIS ISB Atma Luhur</h3>
                <p className="text-black">🔥 Inilah Sang Juara! 🔥 Dengan penuh kebanggaan, kami umumkan Marvel Luzniky dan Valentina dari SMK BAKTI PANGKALPINANg sebagai Pemenang Kompetisi...</p>
              </CardContent>
            </Card>
            </a>
            <a href="https://www.instagram.com/p/DHu0c53zyB_">
            <Card>
              <CardContent className="p-4">
                <Image src="/COVER 2.png" alt="Berita 3" width={400} height={200} className="rounded-md mb-4" />
                <h3 className="text-black text-xl font-semibold mb-2">Dokumentasi HIMASI BERBAGI 2025</h3>
                <p className="text-black">Kebahagiaan sejati bukan hanya tentang apa yang kita miliki, tetapi juga tentang apa yang bisa kita bagikan. Dalam HIMASI BERBAGI kita belajar bahwa sekecil apa pun bantuan yang diberikan,dapat...  </p>
              </CardContent>
            </Card>
            </a>
            <a href="https://www.instagram.com/p/DHKXjoUzoLQ/">
            <Card>
              <CardContent className="p-4">
                <Image src="/FEED IG HIMASI BERBAGI (FIX).png" alt="Berita 4" width={400} height={200} className="rounded-md mb-4" />
                <h3 className="text-black text-xl font-semibold mb-2">HIMASI BERBAGI 2025</h3>
                <p className="text-black">Program sosial dari HIMASI ISB Atma Luhur yang bertujuan memenebarkan kebaikan di bulan Ramadan bersama masyarakat. Dana untuk kegiatan ini dikumpulkan mandiri melalui donasi dan sponsor, sehingga setiap bantuan ... </p>
              </CardContent>
            </Card>
            </a>
          </div>

          <div className="flex justify-center mt-8">
            <a href="/berita"><Button>Berita Lainnya</Button></a>
          </div>
        </div>
        <br />
        <br />
        <FAQAccordion />
      </section>
    </main>
  );
}
