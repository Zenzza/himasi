import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-black via-blue-800 to-blue-400 text-white pt-10 pb-6 px-6 md:px-12 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          <img src="/LogoHIMASI.png" alt="HIMASI Logo" className="w-36" />
          <p>
            HIMASI ISB Atma Luhur adalah organisasi mahasiswa yang berada di bawah
            naungan Program Studi Sistem Informasi di Institut Sains dan Bisnis
            Atma Luhur Pangkalpinang ...
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">INFO KAMPUS</h4>
          <ul className="space-y-2">
            {[
              { label: "Info Beasiswa", href: "https://www.atmaluhur.ac.id/pendaftaran/info-beasiswa/" },
              { label: "Kalender Akademik",href: "https://satupintu.atmaluhur.ac.id/pengumuman/upload/kalender%20akademik%2020242025.pdf" },
              { label: "Info Kuliah", href: "/info-kuliah" },
              { label: "Perpustakan", href: "https://lib.atmaluhur.ac.id/" },
              { label: "Repository Kampus", href: "https://repository.atmaluhur.ac.id/" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdOutlineKeyboardArrowRight className="text-xs" />
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Struktural HIMASI</h4>
          <ul className="space-y-2">
            {[
              { label: "Dewan Pembina", href: "/kabinet/dewan-pembina" },
              { label: "BPH", href: "/kabinet/bph" },
              { label: "MEDKOMINFO", href: "/kabinet/medkominfo" },
              { label: "Humas", href: "/kabinet/humas" },
              { label: "Bisnis Kreatif", href: "/kabinet/bisnis-kreatif" },
              { label: "Penasihat", href: "/kabinet/penasihat" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdOutlineKeyboardArrowRight className="text-xs" />
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Berita Terkini!</h4>
          <ul className="space-y-2">
            {[
              { label: "Open Recruitment", href: "/berita/open-recruitment" },
              { label: "Order Baju Jurusan", href: "/berita/order-baju" },
              { label: "KONEKSI", href: "/berita/koneksi" },
              { label: "SI-Apresiasi", href: "/berita/si-apresiasi" },
              { label: "What's on SI", href: "/berita/whats-on-si" },
              { label: "ATMALUHUR Student Central", href: "https://bit.ly/atmaluhurstudentcentral" },
              { label: "DIES NATALIS", href: "/berita/dies-natalis" },
              { label: "Pendaftaran Mahasiswa Baru", href: "https://pmb.atmaluhur.ac.id/" },
              { label: "ISB Atma Luhur", href: "https://atmaluhur.ac.id" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdOutlineKeyboardArrowRight className="text-xs" />
                {item.href.startsWith("http") ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex gap-3 text-lg mt-6">
        <a
          href="https://www.tiktok.com/@himasi_bisniskreatif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61555101788031"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/himasi.atmaluhur/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/6281280758000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2025 - HIMASI ISB Atma Luhur - All rights reserved</p>
        <p className="md:text-right">
          Created by <Link href="/tentang/profil">Divisi MEDKOMINFO</Link>
        </p>
      </div>
    </footer>
  );
}
