import Image from "next/image";

export const metadata = {
  title: "Kabinet - HIMASI ISB Atma Luhur",
  description: "Kabinet HIMASI ISB Atma Luhur.",
};

export default function KabinetPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/back1.jpg"
            alt="Kabinet Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold">KABINET RAKSABHINAYA</h1>
          <p className="text-sm md:text-lg mt-2">
            Himpunan Mahasiswa Sistem Informasi ISB Atma Luhur
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Kabinet Raksabhinaya
        </h2>
        <div className="w-60 h-1 bg-blue-950 mx-auto mb-5 rounded-full" />
        <p className="text-gray-700 mb-6">
          Kabinet RAKSABHINAYA adalah sebuah kabinet yang dibentuk oleh dan untuk mahasiswa Sistem Informasi. Kabinet ini berperan sebagai wadah bagi mahasiswa untuk menyalurkan ide, mengembangkan potensi, serta menjadi representasi mahasiswa di tingkat program studi.
        </p>
        <p className="text-gray-700">
          <strong>RAKSABHINAYA</strong> sendiri merupakan gabungan dari dua kata bahasa Sanskerta, yakni &quot;RAKSA&quot; dan &quot;ABHINAYA&quot;. &quot;RAKSA&quot; bermakna menjaga, melindungi, menyayangi, dan memelihara, sebagai penjaga dan pelindung serta menyayangi dan memelihara hubungan baik antar sesama. Sedangkan &quot;ABHINAYA&quot; bermakna semangat dan ekspresif, yang mengibaratkan semangat untuk terus bergerak, berdedikasi, serta berani dalam mengukir prestasi.
        </p>
      </section>

      <section className="bg-white py-12 px-4">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-4">
          Struktur Kabinet
        </h2>
        <div className="w-40 h-1 bg-blue-950 mx-auto mb-5 rounded-full" />
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-5">
          Kabinet RAKSABHINAYA membentuk struktur DP, BPH, dan 4 divisi utama di bawah naungan HIMASI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-4">
          <a href="/kabinet/dewan-pembina" className="block bg-blue-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-[#1e326f] transition"> Dewan Pembina </a>
          <a href="/kabinet/pengurus-inti" className="block bg-blue-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-[#1e326f] transition"> Pengurus Inti </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <a href="/kabinet/medkominfo" className="block bg-blue-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-[#1e326f] transition"> Divisi MEDKOMINFO </a>
          <a href="/kabinet/bisnis-kreatif" className="block bg-blue-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-[#1e326f] transition"> Divisi Bisnis Kreatif </a>
          <a href="/kabinet/humas" className="block bg-blue-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-[#1e326f] transition"> Divisi Humas </a>
          <a href="/kabinet/penasihat" className="block bg-blue-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-[#1e326f] transition"> Divisi Penasihat </a>
        </div>
      </section>
    </div>
  );
}
