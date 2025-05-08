import Image from "next/image";
const pengurus = [
  {
    title: "PIMPINAN HIMPUNAN MAHASISWA SISTEM INFORMASI ISB ATMA LUHUR",
    members: [
      { name: "Avanza Romadhon", position: "Ketua Umum", image: "/anggota/WIP.png" },
      { name: "Rania Marsela", position: "Wakil Ketua Umum", image: "/anggota/WIP.png" },
    ],
  },
  {
    title: "SEKRETARIS HIMPUNAN MAHASISWA SISTEM INFORMASI ISB ATMA LUHUR",
    members: [
      { name: "Aigesti Iken Haneniken", position: "Sekretaris 1", image: "/anggota/WIP.png" },
      { name: "Suci Dinantika", position: "Sekretaris 2", image: "/anggota/WIP.png" },
    ],
  },
  {
    title: "BENDAHARA HIMPUNAN MAHASISWA SISTEM INFORMASI ISB ATMA LUHUR",
    members: [
      { name: "Rifat Al Ghozali", position: "Bendahara 1", image: "/anggota/WIP.png" },
      { name: "Maria Fransiska Devita", position: "Bendahara 2", image: "/anggota/WIP.png" },
    ],
  },
];

  export default function BPHPage() {
    return (
      <main className="bg-[#f4f6fb] min-h-screen text-center">
        {/* Hero */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src="/back1.jpg"
            alt="BPH HIMASI"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold pt-16">Badan Pengurus Harian</h1>
            <p className="text-sm md:text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
            </p>
          </div>
        </div>
        <section className="max-w-6xl mx-auto px-4 py-6 space-y-2">
          {pengurus.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-black">{section.title}</h2><br />
              <hr className="max-w-sm mx-auto border-black mb-10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto pb-12">
              {section.members.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center">
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
  