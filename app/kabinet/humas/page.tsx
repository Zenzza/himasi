export const metadata = {
  title: "Humas - HIMASI ISB Atma Luhur",
  description: "Divisi HUMAS HIMASI ISB Atma Luhur.",
};

import Image from "next/image";

export default function HumasPage() {
  const ketua = {
    name: "Yuriefal Miqdad",
    title: "Ketua Divisi Humas",
    image: "/anggota/WIP.png",
  };

  const anggota = [
    { name: "Muhammad Idil Kusuma", image: "/anggota/WIP.png" },
    { name: "M. Nur Alfajri", image: "/anggota/WIP.png" },
    { name: "Zahra Azaria", image: "/anggota/WIP.png" },
    { name: "Muhammad Haikal", image: "/anggota/WIP.png" },
    { name: "Nabila Audia A.Nasution", image: "/anggota/WIP.png" },
  ];

  return (
    <main className="bg-[#f1f5f9] min-h-screen">
      <div className="relative h-[250px] md:h-[400px] w-full">
        <Image
          src="/back1.jpg"
          alt="HUMAS BACKGROUND"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-2xl md:text-5xl font-bold pt-10">Divisi Humas</h1>
          <p className="text-sm md:text-lg mt-2">
            Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
          </p>
        </div>
      </div>

      <section className="mt-12 px-4">
        <h2 className="text-xl font-bold text-center text-blue-800 uppercase">
          Ketua Divisi Humas
        </h2>
        <div className="mt-6 flex justify-center">
          <div className="bg-white rounded-lg shadow p-4 max-w-xs w-full flex flex-col items-center">
            <Image
              src={ketua.image}
              alt={ketua.name}
              width={160}
              height={213}
              className="object-cover rounded mb-4"
            />
            <p className="text-sm font-bold text-black text-center">{ketua.name}</p>
            <p className="text-xs text-black text-center">{ketua.title}</p>
          </div>
        </div>
      </section>

      <section className="mt-16 px-4 pb-16">
        <h2 className="text-xl font-bold text-center text-blue-800 uppercase mb-6">
          Anggota Divisi Humas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {anggota.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 max-w-[160px] w-full mx-auto flex flex-col items-center"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={128}
                height={170}
                className="object-cover rounded mb-3"
              />
              <p className="text-sm font-medium text-black text-center">{person.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
