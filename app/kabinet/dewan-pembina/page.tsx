export const metadata = {
  title: "Dewan Pembina - HIMASI ISB Atma Luhur",
  description: "Dewan Pembina HIMASI ISB Atma Luhur.",
};

import Image from "next/image";
export default function DewanPembinaPage() {
    return (
      <main className="bg-[#f4f6fb] min-h-screen text-center">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <img
            src="/back1.jpg"
            alt="Dewan Pembina HIMASI"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold pt-16">DEWAN PEMBINA</h1>
            <p className="text-sm md:text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
            </p>
          </div>
        </div>
  
        <section className="max-w-4xl mx-auto px-4 py-10">
          <p className="text-gray-700 leading-relaxed">
            Dewan Pembina (DP) adalah sebuah struktur dalam organisasi HIMASI yang bertugas memberikan bimbingan,
            arahan, dan dukungan kepada pengurus HIMASI. Dewan Pembina merupakan salah satu pilar penting dalam organisasi
            HIMASI. Keberadaan DP sangat membantu pengurus HIMASI dalam menjalankan tugas dan mencapai tujuan organisasi.
            Dengan bimbingan dan dukungan dari DP, HIMASI dapat menjadi wadah yang efektif bagi mahasiswa dalam
            mengembangkan diri dan berkontribusi bagi masyarakat.
          </p>
        </section>
  
        <hr className="max-w-sm mx-auto border-gray-300 mb-10" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 pb-20">
        <div className="flex flex-col items-center">
          <Image
            src="/anggota/WIP.png"
            alt="Anisah, M.Kom"
            width={400}
            height={400}
            className="object-cover rounded-md mb-4"
          />
          <div className="text-center">
            <p className="font-semibold text-black">Anisah, M.Kom</p>
            <p className="text-sm text-black">Ketua Dewan Pembina</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/anggota/WIP.png" 
            alt="Elly Yanuarti, M.Kom."
            width={400}
            height={400}
            className="object-cover rounded-md mb-4"
          />
          <div className="text-center">
            <p className="font-semibold text-black">Elly Yanuarti, M.Kom.</p>
            <p className="text-sm text-black">Wakil Ketua Dewan Pembina</p>
          </div>
        </div>
      </section>
      </main>
    );
  }
  