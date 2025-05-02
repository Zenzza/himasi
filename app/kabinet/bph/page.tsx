const pengurus = [
    {
      title: "PIMPINAN HIMPUNAN MAHASISWA SISTEM INFORMASI ISB ATMA LUHUR",
      members: [
        { name: "Avanza Romadhon", position: "Ketua Umum" },
        { name: "Rania Marsela", position: "Wakil Ketua Umum" },
      ],
    },
    {
      title: "SEKRETARIS HIMPUNAN MAHASISWA SISTEM INFORMASI ISB ATMA LUHUR",
      members: [
        { name: "Aigesti Iken Haneniken", position: "Sekretaris 1" },
        { name: "Suci Dinantika", position: "Sekretaris 2" },
      ],
    },
    {
      title: "BENDAHARA HIMPUNAN MAHASISWA SISTEM INFORMASI ISB ATMA LUHUR",
      members: [
        { name: "Rifat Al Ghozali", position: "Bendahara 1" },
        { name: "Maria Fransiska Devita", position: "Bendahara 2" },
      ],
    },
  ];
  
  export default function BPHPage() {
    return (
      <main className="bg-[#f4f6fb] min-h-screen text-center">
        {/* Hero */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <img
            src="/back1.jpg"
            alt="BPH HIMASI"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold">Badan Pengurus Harian</h1>
            <p className="text-sm md:text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
            </p>
          </div>
        </div>
  
        <section className="max-w-6xl mx-auto px-4 py-6 space-y-2">
          {pengurus.map((section, index) => (
            <div key={index}>
              <h2 className="text-blue-900 font-bold text-sm md:text-base uppercase mb-6">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto px-4 pb-20">
                {section.members.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-40 h-52 bg-gray-200 rounded-md mb-4" />
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
  