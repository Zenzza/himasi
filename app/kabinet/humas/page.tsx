export default function HumasPage() {
    const ketua = {
      name: "Yuriefal Miqdad",
      title: "Ketua Divisi Humas",
    };
  
    const anggota = [
      "Muhammad Idil Kusuma",
      "M. Nur Alfajri",
      "Zahra Azaria",
      "Muhammad Haikal",
      "Nabila Audia A.Nasution",
    ];
  
    return (
      <main className="bg-[#f1f5f9] min-h-screen pt-8">
         <div className="relative h-[300px] md:h-[400px] w-full">
          <img
            src="/back1.jpg"
            alt="BPH HIMASI"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold">Divisi Humas</h1>
            <p className="text-sm md:text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
            </p>
          </div>
        </div>
  
        <section className="mt-10">
          <h2 className="text-xl font-bold text-center text-blue-800 uppercase">
            Ketua Divisi Humas
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="bg-white rounded-lg shadow p-4 w-60 h-72 flex flex-col items-center">
              <div className="w-52 h-52 bg-gray-100 rounded border border-dashed" />
              <p className="mt-4 text-center text-sm text-black font-bold">{ketua.name}</p>
              <p className="text-xs text-black text-center">{ketua.title}</p>
            </div>
          </div>
        </section>
  
        <section className="mt-14 px-4">
          <h2 className="text-xl font-bold text-center text-blue-800 uppercase mb-6">
            Anggota Divisi Humas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {anggota.map((name, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-4 w-50 h-68 flex flex-col items-center"
              >
                <div className="w-40 h-52 bg-gray-100 rounded border border-dashed" />
                <p className="mt-3 text-center text-sm font-medium text-black">{name}</p>
              </div>
            ))}
          </div>
        </section>
        <br />
        <br />
      </main>
    );
  }
  