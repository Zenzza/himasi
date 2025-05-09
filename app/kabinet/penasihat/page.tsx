export const metadata = {
  title: "Penasihat - HIMASI ISB Atma Luhur",
  description: "Divsi Penasihat HIMASI ISB Atma Luhur.",
};

import Image from "next/image";

export default function PenasihatPage() {
  const ketua = {
    name: "M.Harisetiawan",
    title: "Ketua Divisi Penasihat",
    image: "/anggota/WIP.png",
  };

  const anggota = [
    { name: "Nasir Zumali", image: "/anggota/WIP.png" },
    { name: "Cha Cha Gracia Evelyn", image: "/anggota/WIP.png" },
    { name: "Elsa Azila", image: "/anggota/WIP.png" },
  ];

  return (
    <main className="bg-[#f1f5f9] min-h-screen pt-8">
      <div className="relative h-[250px] md:h-[400px] w-full">
        <img
          src="/back1.jpg"
          alt="Divisi Penasihat HIMASI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold text-white pt-10">Divisi Penasihat</h1>
          <p className="text-sm md:text-lg mt-2 text-white">
            Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
          </p>
        </div>
      </div>

      <section className="mt-10 px-4">
        <h2 className="text-xl font-bold text-center text-blue-800 uppercase">
          Ketua Divisi Penasihat
        </h2>
        <div className="mt-6 flex justify-center">
          <div className="bg-white rounded-lg shadow p-4 w-full max-w-xs flex flex-col items-center">
            <Image
              src={ketua.image}
              alt={ketua.name}
              width={160}
              height={160}
              className="object-cover rounded mb-4"
            />
            <p className="text-center text-sm font-bold text-black">{ketua.name}</p>
            <p className="text-xs text-black text-center">{ketua.title}</p>
          </div>
        </div>
      </section>

      <section className="mt-14 px-4">
        <h2 className="text-xl font-bold text-center text-blue-800 uppercase mb-6">
          Anggota Divisi Penasihat
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {anggota.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 w-full max-w-[160px] mx-auto flex flex-col items-center"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={128}
                height={170}
                className="object-cover rounded mb-3"
              />
              <p className="text-center text-sm font-medium text-black">{person.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
}
