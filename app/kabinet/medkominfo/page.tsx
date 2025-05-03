import Image from "next/image"; 
export default function MedkominfoPage() {
  const ketua = {
    name: "Achmad Zacky Saputra",
    title: "Ketua Divisi MEDKOMINFO",
    photo: "/anggota/WIP.png", 
  };

const anggota = [
  { name: "Viky Saputra", photo: "/anggota/WIP.png" },
  { name: "Sakira Nabila", photo: "/anggota/WIP.png" },
  { name: "Nathan Nehrow Siregar", photo: "/anggota/WIP.png" },
  { name: "Jordi Venzen", photo: "/anggota/WIP.png" },
  { name: "Alki Fernando", photo: "/anggota/WIP.png" },
  { name: "Fakih Arif Biah", photo: "/anggota/WIP.png" },
  { name: "Muhammad Irfan", photo: "/anggota/WIP.png" },
  { name: "Rakha Pratama Winarno", photo: "/anggota/WIP.png" },
];


  return (
    <main className="bg-[#f1f5f9] min-h-screen pt-8">
      <div className="relative h-[250px] md:h-[400px] w-full">
        <img
          src="/back1.jpg"
          alt="BPH HIMASI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold text-white">Divisi MEDKOMINFO</h1>
          <p className="text-sm md:text-lg mt-2 text-white">
            Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
          </p>
        </div>
      </div>

      <section className="mt-10 px-4">
        <h2 className="text-xl font-bold text-center text-blue-800 uppercase">
          Ketua Divisi MEDKOMINFO
        </h2>
        <div className="mt-6 flex justify-center">
          <div className="bg-white rounded-lg shadow p-4 w-full max-w-xs flex flex-col items-center">
            <Image
              src={ketua.photo}
              alt={ketua.name}
              width={200}
              height={250}
              className="w-40 h-52 object-cover rounded"
            />
            <p className="mt-4 text-center text-sm font-bold text-black">{ketua.name}</p>
            <p className="text-xs text-black text-center">{ketua.title}</p>
          </div>
        </div>

      </section>

      <section className="mt-14 px-4">
        <h2 className="text-xl font-bold text-center text-blue-800 uppercase mb-6">
          Anggota Divisi MEDKOMINFO
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
          {anggota.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 w-full max-w-[160px] mx-auto flex flex-col items-center"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={160}
                height={200}
                className="w-32 h-40 object-cover rounded"
              />
              <p className="mt-3 text-center text-sm font-medium text-black">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
}
