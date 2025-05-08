import Image from "next/image";
import Link from "next/link";

export default function BeritaPage() {
  const beritaItems = [
    {
      title: "SI-Apresiasi : Finalis DUTA BAHASA Provinsi Kep. Bangka Belitung 2025",
      img: "/Feed IG HIMASI SIAPRESIASI.png",
      desc: `Kami keluarga besar Himpunan Mahasiswa Sistem Informasi mengucapkan selamat dan apresiasi yang sebesar-besarnya kepada: 𝗭𝗮𝗵𝗿𝗮 𝗔𝘇𝗮𝗿𝗶𝗮 Sebagai 𝗙𝗶𝗻𝗮𝗹𝗶𝘀 𝗗𝘂𝘁𝗮 𝗕𝗮𝗵𝗮𝘀𝗮 𝗣𝗿𝗼𝘃𝗶𝗻𝘀𝗶 𝗞𝗲𝗽𝘂𝗹𝗮𝘂𝗮𝗻 𝗕𝗮𝗻𝗴𝗸𝗮 𝗕𝗲𝗹𝗶𝘁𝘂𝗻𝗴 𝗧𝗮𝗵𝘂𝗻 𝟮𝟬𝟮𝟱 Sebuah pencapaian yang membanggakan! Keberhasilan ini bukan hanya bukti dari kemampuan dan dedikasi, tetapi juga bentuk cinta terhadap bahasa Indonesia dan semangat dalam melestarikan bahasa daerah serta memperkuat identitas nasional. Menjadi Duta Bahasa berarti menjadi agen perubahan menginspirasi generasi muda untuk lebih mencintai bahasa, budaya, dan literasi. Teruslah bersinar dan menebar pengaruh positif melalui tutur kata, karya, dan tindakan nyata! Kami bangga memiliki sosok seperti 𝗭𝗮𝗵𝗿𝗮 𝗔𝘇𝗮𝗿𝗶𝗮 di lingkungan PRODI Sistem Informasi. Semoga langkah ini membawa kesuksesan yang lebih besar dan menjadi awal dari kontribusi luar biasa bagi bangsa.`,
      link: "https://www.instagram.com/p/DJDZD2lTTQ-/",
    },
  ];

  return (
    <main>
      <section className="bg-[url('/back1.jpg')] bg-cover bg-center text-white py-28 text-center">
          <h1 className="text-4xl font-bold pt-8">SI -  Apresiasi</h1>
          <p className="text-xl mt-4">Apresiasi terhadap Mahasiswa SISTEM INFORMASI</p>
      </section>

      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">2025</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
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
