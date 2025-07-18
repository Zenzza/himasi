import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Berita - HIMASI ISB Atma Luhur",
  description: "Berita Fresh dari HIMASI ISB Atma Luhur.",
};

export default function BeritaPage() {
  const beritaItems = [
    {
      title: "HIMASI GAHESI 2025",
      desc: "Pada tahun ini, HIMASI menggelar kegiatan healing bersama bertajuk HIMASI GAHESI 2025 — Gak Healing Sinting! 🎉 ...",
      img: "/HIMASI_GAHESI_2025.jpg",
      link: "https://www.instagram.com/p/DKLip7XTAxl/",
    },
    {
      title: "SI-Apresiasi : Finalis DUTA BAHASA Provinsi Kep. Bangka Belitung 2025",
      img: "/Feed IG HIMASI SIAPRESIASI.png",
      desc: "Keluarga besar Himpunan Mahasiswa Sistem Informasi mengucapkan selamat dan apresiasi kepada: Zahra Azaria ...",
      link: "https://www.instagram.com/p/DJDZD2lTTQ-/",
    },
    {
      title: "PEMENANG Kompetisi Design Logo 25th DIES NATALIS ISB ATMALUHUR",
      img: "/PemenangKDL.jpg",
      desc: "🔥 Inilah Sang Juara! 🔥 Kami umumkan Marvel Luzniky dan Valentina sebagai pemenang ...",
      link: "https://www.instagram.com/p/DIyeepqT5S4",
    },
    {
      title: "DOKUMENTASI HIMASI BERBAGI 2025",
      img: "/COVER 2.png",
      desc: "HIMASI BERBAGI adalah program sosial dari HIMASI ISB Atma Luhur ...",
      link: "https://www.instagram.com/p/DHu0c53zyB_",
    },
    {
      title: "HIMASI BERBAGI 2025",
      img: "/FEED IG HIMASI BERBAGI (FIX).png",
      desc: "Kegiatan berbagi selama bulan Ramadan dengan distribusi donasi kepada masyarakat ...",
      link: "https://www.instagram.com/p/DHKXjoUzoLQ",
    },
    {
      title: "Dokumentasi Kompetisi Design LOGO Dies Natalis ISB ATMALUHUR",
      img: "/ThanksKDL25th.jpg",
      desc: "Wah, seru banget! Kompetisi Desain Logo 25th Dies Natalis ISB Atma Luhur ...",
      link: "https://www.instagram.com/p/DGvSNlHyi-v/",
    },
    {
      title: "Kompetisi Design LOGO Dies Natalis ISB ATMALUHUR",
      img: "/FEED IG.png",
      desc: "Panggilan untuk pelajar kreatif! Dalam rangka Dies Natalis ke-25 ISB Atma Luhur ...",
      link: "https://www.instagram.com/p/DGE7SNUytL_",
    },
    {
      title: "SERTIJAB Periode 2025",
      img: "/sertijab.png",
      desc: "Serah Terima Jabatan (SERTIJAB) & PELANTIKAN ORMAWA ISB Atma Luhur periode 2025 telah berlangsung sukses ...",
      link: "https://www.instagram.com/p/DEpdy9WyfoT",
    },
  ];

  return (
    <main>
      <section 
        className="bg-[url('/back1.jpg')] bg-cover bg-center text-white py-28 text-center inset-0 bg-black/50"
      >
        <h1 className="text-4xl font-bold pt-16">BERITA HIMASI</h1>
        <p className="text-xl mt-4">Informasi / Berita seputar HIMASI</p>
      </section>

      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-3">2025</h2>
        <div className="w-16 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {beritaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col md:flex-row gap-4"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full md:w-48"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="text-blue-600 hover:underline text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
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

