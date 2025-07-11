import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SI-Apresiasi - HIMASI ISB Atma Luhur",
  description: "Secret HIMASI ISB Atma Luhur.",
};

export default function ApresiasiPage() {
  const beritaItems = [
    {
      title: "SI-Apresiasi : Finalis DUTA BAHASA Provinsi Kep. Bangka Belitung 2025",
      img: "/Feed IG HIMASI SIAPRESIASI.png",
      desc: `Kami keluarga besar Himpunan Mahasiswa Sistem Informasi mengucapkan selamat dan apresiasi yang sebesar-besarnya kepada: 𝗭𝗮𝗵𝗿𝗮 𝗔𝘇𝗮𝗿𝗶𝗮 Sebagai 𝗙𝗶𝗻𝗮𝗹𝗶𝘀 𝗗𝘂𝘁𝗮 𝗕𝗮𝗵𝗮𝘀𝗮 𝗣𝗿𝗼𝘃𝗶𝗻𝘀𝗶 𝗞𝗲𝗽𝘂𝗹𝗮𝘂𝗮𝗻 𝗕𝗮𝗻𝗴𝗸𝗮 𝗕𝗲𝗹𝗶𝘁𝘂𝗻𝗴 𝗧𝗮𝗵𝘂𝗻 𝟮𝟬𝟮𝟱. Sebuah pencapaian yang membanggakan! Keberhasilan ini bukan hanya bukti dari kemampuan dan dedikasi, tetapi juga bentuk cinta terhadap bahasa Indonesia dan semangat dalam melestarikan bahasa daerah serta memperkuat identitas nasional. Menjadi Duta Bahasa berarti menjadi agen perubahan yang menginspirasi generasi muda untuk lebih mencintai bahasa, budaya, dan literasi. Teruslah bersinar dan menebar pengaruh positif melalui tutur kata, karya, dan tindakan nyata! Kami bangga memiliki sosok seperti 𝗭𝗮𝗵𝗿𝗮 𝗔𝘇𝗮𝗿𝗶𝗮 di lingkungan PRODI Sistem Informasi. `,
      link: "https://www.instagram.com/p/DJDZD2lTTQ-/",
    },
  ];

  return (
    <main>
      <section className="relative h-190 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/back1.jpg"
            alt="SI-Apresiasi Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 px-6 md:pl-40 max-w-2xl text-white space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">SI - Apresiasi</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Sebuah ruang untuk memberikan penghargaan dan apresiasi kepada mahasiswa Sistem Informasi yang berprestasi, berdedikasi, dan menginspirasi. Di sinilah kita merayakan setiap langkah, pencapaian, dan kontribusi hebat dari keluarga besar SI.
          </p>
          <Link
            href="#konten"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-medium"
          >
            Explore →
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-3">
          2025
        </h2>
        <div className="w-10 h-1 bg-blue-950 mx-auto mb-5 rounded-full" />
        <div className="grid gap-8 max-w-6xl mx-auto">
          {beritaItems.map((item, index) => (
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
