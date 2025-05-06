"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-950 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/LogoHIMASI.png"
              alt="Logo HIMASI"
              width={32}
              height={32}
              className="mr-2"
            />
            <Link href="/" className="font-bold text-white text-sm md:text-base">
              HIMASI ISB ATMA LUHUR
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center relative" ref={dropdownRef}>
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/berita" className="hover:text-blue-400">Berita</Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white font-medium hover:text-blue-500 transition"
              >
                Kabinet ▼
              </button>

              {isDropdownOpen && (
                <div className="absolute top-12 right-0 bg-blue-950 rounded-xl w-[600px] p-4 grid grid-cols-2 gap-4 z-50">
                  <div className="space-y-4">
                    {[
                      ["🏛️", "Dewan Pembina", "Dewan Pembina HIMASI ISB Atma Luhur", "/kabinet/dewan-pembina"],
                      ["👑", "BPH", "Badan Pengurus Harian HIMASI", "/kabinet/bph"],
                      ["📸", "Divisi MEDKOMINFO", "Media, Komunikasi dan Informasi", "/kabinet/medkominfo"],
                      ["🤝", "Divisi Humas", "Hubungan Masyarakat", "/kabinet/humas"],
                      ["💵", "Divisi Bisnis Kreatif", "Divisi Bisnis Kreatif", "/kabinet/bisnis-kreatif"],
                      ["⚖️", "Divisi Penasihat", "Divisi Penasihat", "/kabinet/penasihat"],
                    ].map(([icon, title, desc, href]) => (
                      <Link key={title} href={href} className="flex items-start gap-3 hover:text-blue-500 transition">
                        <span className="text-2xl">{icon}</span>
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="text-sm text-gray-500">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
  
                  <div className="bg-gray-100 rounded-lg p-3 flex flex-col items-center">
                    <Image
                      src="/Placeholder.jpg"
                      alt="fotokabinet"
                      width={230}
                      height={200}
                      className="rounded-md mb-2 object-cover"
                    />
                    <p className="font-semibold text-black text-sm">Kabinet RAKSABHINAYA</p>
                    <p className="text-xs text-gray-500">Kabinet HIMASI ISB Atma Luhur 2025</p>
                    <Link href="/kabinet" className="text-blue-600 text-xs mt-2 inline-block">
                      Lihat Selengkapnya →
                    </Link>
                  </div>
                  </div>
              )}
            </div>
            <Link href="/tentang" className="hover:text-blue-400">Tentang Himasi</Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-950 px-4 pt-4 pb-6 space-y-4">
          <Link href="/" className="block hover:text-blue-400">Home</Link>
          <Link href="/berita" className="block hover:text-blue-400">Berita</Link>
          <div className="space-y-2">
          <Link href="/kabinet" className="block text-sm hover:text-blue-400 font-semibold">Kabinet</Link>
            <div className="pl-4 space-y-1">
              <Link href="/kabinet/dewan-pembina" className="block text-sm hover:text-blue-400">Dewan Pembina</Link>
              <Link href="/kabinet/bph" className="block text-sm hover:text-blue-400">BPH</Link>
              <Link href="/kabinet/medkominfo" className="block text-sm hover:text-blue-400">MEDKOMINFO</Link>
              <Link href="/kabinet/humas" className="block text-sm hover:text-blue-400">Humas</Link>
              <Link href="/kabinet/bisnis-kreatif" className="block text-sm hover:text-blue-400">Bisnis Kreatif</Link>
              <Link href="/kabinet/penasihat" className="block text-sm hover:text-blue-400">Penasihat</Link>
            </div>
          </div>
          <Link href="/tentang" className="block hover:text-blue-400">Tentang Himasi</Link>
        </div>
      )}
    </nav>
  );
}
