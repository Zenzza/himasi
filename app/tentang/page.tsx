import Image from 'next/image';
import Head from 'next/head';
import { FaMapMarkerAlt, FaGlobe, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

export const metadata = {
  title: "Tentang - HIMASI ISB Atma Luhur",
  description: "Tentang HIMASI ISB Atma Luhur.",
};

export default function Tentang() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Tentang HIMASI</title>
      </Head>
     <div className="relative">
        <div className="w-full h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/back1.jpg)' }}>
          <div className="relative text-center text-white z-10">
            <h1 className="text-4xl font-bold pt-16">Tentang HIMASI</h1>
            <p className="text-lg">Yuk Kenalan dengan HIMASI!</p>
          </div>
        </div>
      </div> 

      <section className="bg-white py-12 px-4 md:px-30">
        <h2 className="text-center text-2xl font-bold mb-6 text-blue-900">Tentang HIMASI</h2>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col items-center">
            <Image src="/LogoHIMASI.png" width={200} height={200} alt="Logo HIMASI" className="mx-auto md:mx-0 text-center" />
          </div>
          <div className="flex-1 text-center md:text-justify text-black">
            <p><strong>(HIMASI)</strong> Himpunan Mahasiswa Sistem Informasi hadir sebagai wadah bagi mahasiswa program studi Sistem Informasi untuk mengembangkan diri secara akademik dan non-akademik. Organisasi ini berfungsi sebagai jembatan yang menghubungkan mahasiswa dengan dunia akademik, industri, dan masyarakat melalui serangkaian program kerja yang terstruktur. HIMASI berupaya meningkatkan kompetensi akademik anggotanya melalui seminar, workshop, dan diskusi, sekaligus mengasah keterampilan praktis melalui pelatihan teknis dan proyek kolaboratif. Dengan semangat kekeluargaan, HIMASI juga mendorong anggotanya untuk berkontribusi kepada masyarakat melalui kegiatan pengabdian yang memanfaatkan ilmu sistem informasi. Bergabung dengan HIMASI bukan hanya tentang mempersiapkan diri untuk karir di masa depan, tetapi juga tentang menjadi individu yang berintegritas, kreatif, dan peduli terhadap lingkungan sekitar.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 text-black">
          <div className="flex-1">
            <h3 className="text-blue-900 font-bold text-lg mb-2 text-center">VISI</h3>
            <ul className="list-disc list-outside pl-6">
              <li>Menjadikan HIMASI sebagai organisasi unggul dalam bidang Teknologi dan menjawab tantangan globalisasi.</li>
              <li>Menjadi wadah kreatif, inovatif, dan intelektual bagi Mahasiswa ISB Atma Luhur khususnya jurusan Sistem Informasi.</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-blue-900 font-bold text-lg mb-2 text-center">MISI</h3>
            <ul className="list-disc list-outside pl-6">
              <li>Menciptakan mahasiswa yang aktif dan inovatif di bidang teknologi dan masyarakat.</li>
              <li>Mendorong kerjasama antar mahasiswa jurusan Sistem Informasi.</li>
              <li>Menjadi pelopor kegiatan yang berdampak dalam dan luar kampus.</li>
            </ul>
          </div>
        </div>
      </section>

    <section className="bg-white py-12">
      <h2 className="text-center text-2xl font-semibold italic text-blue-600 mb-10">
        HIMASI Conection Line
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6 md:px-20">

        <div>
          <FaMapMarkerAlt className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-blue-800 font-bold text-lg">Alamat</h3>
          <p className="text-black">
            Jl. Jendral Sudirman No.Kel, <br />
            Selindung Baru, Kec. Pangkal Balam, <br />
            Kota Pangkal Pinang
          </p>
        </div>

        <div>
          <FaGlobe className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-blue-800 font-bold text-lg">Situs Kami</h3>
          <p className='text-black'>himasi.atmaluhur.ac.id</p>
        </div>

        <div>
          <FaFacebook className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-blue-800 font-bold text-lg">Facebook Page</h3>
          <p className='text-black'>Himasi ISB ATMALUHUR</p>
        </div>

        <div>
          <FaWhatsapp className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-blue-800 font-bold text-lg">No Whatsapp</h3>
          <p className='text-black'>0818291898398</p>
        </div>

        <div>
          <FaInstagram className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-blue-800 font-bold text-lg">Instagram Kami</h3>
          <p className='text-black'>himasi.atmaluhur</p>
        </div>

        <div>
          <FaTiktok className="text-black text-5xl mx-auto mb-4" />
          <h3 className="text-blue-800 font-bold text-lg">Tiktok Page</h3>
          <p className='text-black'>Himasi ISB ATMALUHUR</p>
        </div>
      </div>
      <h3 className="text-center mt-12 font-semibold italic text-blue-800">GOOGLE MAPS</h3>
        <div className="w-full h-96 mt-4">
          <iframe
            src="https://maps.google.com/maps?q=ISB%20Atma%20Luhur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="rounded-md"
            loading="lazy"
          ></iframe>
        </div>
    </section>

    </div>
  );
}
