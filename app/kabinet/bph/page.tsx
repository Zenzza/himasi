export const metadata = {
  title: "BPH - HIMASI ISB Atma Luhur",
  description: "Badan Pengurus Harian HIMASI ISB Atma Luhur.",
};

import Image from "next/image";

// Data Pengurus
const pengurus = [
  {
    title: "PIMPINAN HIMPUNAN",
    members: [
      { name: "Avanza Romadhon", position: "Ketua Umum", image: "/anggota/WIP.png" },
      { name: "Rania Marsela", position: "Wakil Ketua Umum", image: "/anggota/WIP.png" },
    ],
  },
  {
    title: "SEKRETARIS HIMPUNAN",
    members: [
      { name: "Aigesti Iken Haneniken", position: "Sekretaris 1", image: "/anggota/WIP.png" },
      { name: "Suci Dinantika", position: "Sekretaris 2", image: "/anggota/WIP.png" },
    ],
  },
  {
    title: "BENDAHARA HIMPUNAN",
    members: [
      { name: "Rifat Al Ghozali", position: "Bendahara 1", image: "/anggota/WIP.png" },
      { name: "Maria Fransiska Devita", position: "Bendahara 2", image: "/anggota/WIP.png" },
    ],
  },
];

export default function BPHPage() {
  return (
    <main className="bg-[#f4f6fb] min-h-screen text-center">
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/back1.jpg"
          alt="HIMASI Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold pt-16">Badan Pengurus Harian</h1>
          <p className="text-sm md:text-lg mt-2">
            Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {pengurus.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold text-black mb-1">{section.title}</h2>
            <div className="w-40 h-1 bg-blue-950 mx-auto mb-8 rounded-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {section.members.map((member, mIdx) => (
                <div key={mIdx} className="flex flex-col items-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={266}
                    className="object-cover rounded-md mb-4"
                  />
                  <p className="font-semibold text-black">{member.name}</p>
                  <p className="text-sm text-black">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
