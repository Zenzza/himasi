import Image from 'next/image';
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

export const metadata = {
  title: "Tentang - HIMASI ISB Atma Luhur",
  description: "Tentang HIMASI ISB Atma Luhur.",
};

export default function Tentang() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/back1.jpg)' }}>
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold pt-16">Tentang HIMASI</h1>
          <p className="text-lg">Yuk Kenalan dengan HIMASI!</p>
        </div>
      </div>

      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-2">Tentang HIMASI</h2>
        <div className="w-40 h-1 bg-blue-950 mx-auto mb-8 rounded-full" />

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <Image
            src="/LogoHIMASI.png"
            width={200}
            height={200}
            alt="Logo HIMASI"
            className="mx-auto"
          />
          <p className="text-black text-justify">
            <strong>HIMASI</strong> (Himpunan Mahasiswa Sistem Informasi) adalah wadah pengembangan diri mahasiswa Sistem Informasi di ISB Atma Luhur. HIMASI menjembatani mahasiswa dengan dunia akademik, industri, dan masyarakat melalui berbagai program kerja yang terstruktur. Kegiatan seperti seminar, workshop, dan pelatihan teknis diselenggarakan untuk meningkatkan kompetensi anggotanya. HIMASI juga aktif dalam pengabdian masyarakat dan mendorong mahasiswa untuk berkontribusi secara nyata. Bergabung di HIMASI berarti membangun integritas, kreativitas, dan rasa peduli.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-10 text-black">
          <div className="flex-1">
            <h3 className="text-center text-blue-900 font-bold text-lg mb-2">VISI</h3>
            <ul className="list-disc list-outside pl-6">
              <li>Menjadikan HIMASI sebagai organisasi unggul dalam bidang teknologi dan menjawab tantangan globalisasi.</li>
              <li>Menjadi wadah kreatif, inovatif, dan intelektual bagi mahasiswa Sistem Informasi ISB Atma Luhur.</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-center text-blue-900 font-bold text-lg mb-2">MISI</h3>
            <ul className="list-disc list-outside pl-6">
              <li>Menciptakan mahasiswa yang aktif dan inovatif di bidang teknologi dan masyarakat.</li>
              <li>Mendorong kerja sama antar mahasiswa jurusan Sistem Informasi.</li>
              <li>Menjadi pelopor kegiatan berdampak di dalam dan luar kampus.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-center text-2xl italic font-semibold text-blue-800 mb-2">HIMASI Connection Line</h2>
        <div className="w-40 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-black">
          <ContactCard icon={<FaMapMarkerAlt />} title="Alamat">
            Jl. Jendral Sudirman No.Kel, <br />
            Selindung Baru, Kec. Pangkal Balam, <br />
            Kota Pangkal Pinang
          </ContactCard>
          <ContactCard icon={<FaGlobe />} title="Situs Kami">
            himasi.atmaluhur.ac.id
          </ContactCard>
          <ContactCard icon={<FaFacebook />} title="Facebook Page">
            Himasi ISB ATMALUHUR
          </ContactCard>
          <ContactCard icon={<FaWhatsapp />} title="No Whatsapp">
            0818-2918-98398
          </ContactCard>
          <ContactCard icon={<FaInstagram />} title="Instagram Kami">
            @himasi.atmaluhur
          </ContactCard>
          <ContactCard icon={<FaTiktok />} title="Tiktok Page">
            Himasi ISB ATMALUHUR
          </ContactCard>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-bold text-lg text-blue-800">Google Maps</h3>
          <div className="w-full h-96 mt-4">
            <iframe
              src="https://maps.google.com/maps?q=ISB%20Atma%20Luhur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex justify-center items-center text-5xl text-black mb-4">
        {icon}
      </div>
      <h3 className="text-blue-800 font-bold text-lg">{title}</h3>
      <p className="mt-1">{children}</p>
    </div>
  );
}
