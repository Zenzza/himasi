import Navbar from "@/components/navbar";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BeritaPage() {
  const beritaItems = [
    {
      title: "SI-Apresiasi : Finalis DUTA BAHASA Provinsi Kep. Bangka Belitung 2025",
      img: "/Feed IG HIMASI SIAPRESIASI.png",
      desc: `Keluarga besar Himpunan Mahasiswa Sistem Informasi mengucapkan selamat dan apresiasi yang sebesar-besarnya kepada: 𝗭𝗮𝗵𝗿𝗮 𝗔𝘇𝗮𝗿𝗶𝗮 Sebagai 𝗙𝗶𝗻𝗮𝗹𝗶𝘀 𝗗𝘂𝘁𝗮 𝗕𝗮𝗵𝗮𝘀𝗮 𝗣𝗿𝗼𝘃𝗶𝗻𝘀𝗶 𝗞𝗲𝗽𝘂𝗹𝗮𝘂𝗮𝗻 𝗕𝗮𝗻𝗴𝗸𝗮 𝗕𝗲𝗹𝗶𝘁𝘂𝗻𝗴 𝗧𝗮𝗵𝘂𝗻 𝟮𝟬𝟮𝟱`,
      link: "https://www.instagram.com/p/DJDZD2lTTQ-/",
    },
    {
      title: "PEMENANG Kompetisi Design Logo 25th DIES NATALIS ISB ATMALUHUR",
      img: "/PemenangKDL.jpg",
      desc: `🔥 Inilah Sang Juara! 🔥 Dengan penuh kebanggaan, kami umumkan 𝗠𝗮𝗿𝘃𝗲𝗹 𝗟𝘂𝘇𝗻𝗶𝗸𝘆 𝗱𝗮𝗻 𝗩𝗮𝗹𝗲𝗻𝘁𝗶𝗻𝗮 dari 𝗦𝗠𝗞 𝗕𝗮𝗸𝘁𝗶 𝗣𝗮𝗻𝗴𝗸𝗮𝗹𝗽𝗶𝗻𝗮𝗻𝗴 sebagai 𝗣𝗲𝗺𝗲𝗻𝗮𝗻𝗴 𝗞𝗼𝗺𝗽𝗲𝘁𝗶𝘀𝗶 𝗗𝗲𝘀𝗮𝗶𝗻 𝗟𝗼𝗴𝗼 𝟮𝟱𝘁𝗵 𝗗𝗶𝗲𝘀 𝗡𝗮𝘁𝗮𝗹𝗶𝘀 𝗜𝗦𝗕 𝗔𝘁𝗺𝗮 𝗟𝘂𝗵𝘂𝗿! 🎉🏆`,
      link: "https://www.instagram.com/p/DIyeepqT5S4",
    },
    {
      title: "DOKUMENTASI HIMASI BERBAGI 2025",
      img: "/COVER 2.png",
      desc: `HIMASI BERBAGI adalah program sosial dari HIMASI ISB Atma Luhur yang dilaksanakan dalam semangat kepedulian. Acara ini sukses dilaksanakan berkat partisipasi dari panitia, donatur dan sponsor yang telah mendukung.`,
      link: "https://www.instagram.com/p/DHu0c53zyB_",
    },
    {
      title: "HIMASI BERBAGI 2025",
      img: "/FEED IG HIMASI BERBAGI (FIX).png",
      desc: `Kegiatan berbagi selama bulan Ramadan dengan pengumpulan dan distribusi donasi kepada masyarakat membutuhkanProgram sosial dari HIMASI ISB Atma Luhur yang bertujuan memenebarkan kebaikan di bulan Ramadan bersama masyarakat. Dana untuk kegiatan ini dikumpulkan mandiri melalui donasi dan sponsor, sehingga setiap bantuan ... .`,
      link: "https://www.instagram.com/p/DHKXjoUzoLQ",
    },
    {
      title: "Dokumentasi Kompetisi Design LOGO Dies Natalis ISB ATMALUHUR",
      img: "/ThanksKDL25th.jpg",
      desc: `Wah, seru banget! 𝗞𝗼𝗺𝗽𝗲𝘁𝗶𝘀𝗶 𝗗𝗲𝘀𝗮𝗶𝗻 𝗟𝗼𝗴𝗼 𝟮𝟱𝘁𝗵 𝗗𝗶𝗲𝘀 𝗡𝗮𝘁𝗮𝗹𝗶𝘀 𝗜𝗦𝗕 𝗔𝘁𝗺𝗮 𝗟𝘂𝗵𝘂𝗿 akhirnya selesai dengan penuh keseruan! 🎨🔥 Dalam rangka merayakan 𝗗𝗶𝗲𝘀 𝗡𝗮𝘁𝗮𝗹𝗶𝘀 𝗸𝗲-𝟮𝟱 𝗜𝗦𝗕 𝗔𝘁𝗺𝗮 𝗟𝘂𝗵𝘂𝗿, para peserta lomba menunjukkan kreativitas luar biasa mereka! 😱✨ Gimana sih keseruan yang terjadi di acara ini? Yuk, intip momen-momen seru bersama ...`,
      link: "https://www.instagram.com/p/DGvSNlHyi-v/",
    },
    {
      title: "Kompetisi Design LOGO Dies Natalis ISB ATMALUHUR",
      img: "/FEED IG.png",
      desc: `Panggilan untuk pelajar yang kreatif dan suka desain grafis, ini saatnya menunjukkan bakatmu!💡🎨 Dalam rangka merayakan Dies Natalis ke-25 ISB Atma Luhur. HIMASI (Himpunan Mahasiswa...`,
      link: "https://www.instagram.com/p/DGE7SNUytL_",
    },
    {
      title: "SERTIJAB Periode 2025",
      img: "/sertijab.png",
      desc: `Serah Terima Jabatan (SERTIJAB) & PELANTIKAN ORMAWA ISB Atma Luhur periode 2025 telah berlangsung sukses, menciptakan semangat baru dan kolaborasi yang terasa di setiap momen. ✨ Selamat kepada Avanza Romadhon sebagai Ketua, Rania Marsela sebagai Wakil Ketua, dan seluruh pengurus HIMASI yang resmi dilantik hari ini.`,
      link: "https://www.instagram.com/p/DEpdy9WyfoT",
    },
  ];

  return (
    <main>
      <section className="bg-[url('/back1.jpg')] bg-cover bg-center text-white py-28 text-center">
          <h1 className="text-4xl font-bold">BERITA HIMASI</h1>
          <p className="text-xl mt-4">Informasi / Berita seputar HIMASI</p>
      </section>

      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">2025</h2>
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
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <Link
                  href={item.link}
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
