"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 w-full z-50 text-white transition-all duration-300 
        ${isScrolled ? 'h-14 bg-gradient-to-b from-blue-950 to-blue-800 shadow-md' : 'h-20 bg-gradient-to-b from-blue-950 to-blue-800 shadow-lg'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isScrolled ? 'h-14' : 'h-20'}`}>
          <div className="flex items-center">
            <Image
              src="/LogoHIMASI.png"
              alt="Logo HIMASI"
              width={isScrolled ? 28 : 40}
              height={isScrolled ? 28 : 40}
              className="mr-2 transition-all duration-300 object-contain"
            />
            <Link
              href="/"
              className={`font-bold text-white transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-xl'
              }`}
            >
              HIMASI ISB ATMA LUHUR
            </Link>
          </div>

          <div className={`hidden md:flex space-x-6 items-center relative transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`} ref={dropdownRef}>
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/berita" className="hover:text-blue-400">Berita</Link>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white font-medium hover:text-blue-500 transition"
              >
                Kabinet ▼
              </button>

              {isDropdownOpen && (
                <div className="absolute top-12 right-0 bg-blue-800 rounded-xl w-[600px] p-6 grid grid-cols-2 gap-4 z-50 text-center">
                  <div className="space-y-4">
                    {[
                      ["➤", "Dewan Pembina", "Dewan Pembina HIMASI ISB Atma Luhur", "/kabinet/dewan-pembina"],
                      ["➤", "BPH", "Badan Pengurus Harian HIMASI", "/kabinet/bph"],
                      ["➤", "Divisi MEDKOMINFO", "Media, Komunikasi dan Informasi", "/kabinet/medkominfo"],
                      ["➤", "Divisi Humas", "Hubungan Masyarakat", "/kabinet/humas"],
                      ["➤", "Divisi Bisnis Kreatif", "Divisi Bisnis Kreatif", "/kabinet/bisnis-kreatif"],
                      ["➤", "Divisi Penasihat", "Divisi Penasihat", "/kabinet/penasihat"],
                    ].map(([icon, title, desc, href]) => (
                      <Link key={title} href={href} className="flex items-start gap-3 hover:text-blue-500 transition">
                        <span className="text-2xl">{icon}</span>
                        <div className="text-left">
                          <p className="font-semibold">{title}</p>
                          <p className="text-sm text-amber-50">{desc}</p>
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
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

{isMobileMenuOpen && (
  <div className="md:hidden bg-blue-800 items-left min-h-60vh px-4 pt-4 pb-6 space-y-4 text-left">
    <Link href="/" className="w-full text-left block hover:text-blue-400">Home</Link>
    <Link href="/berita" className="w-full text-left block hover:text-blue-400">Berita</Link>

    <div className="space-y-2">
      <Link href="/kabinet" className="w-full text-left block text-sm hover:text-blue-400 font-semibold">Kabinet</Link>
      <div className="pl-4 space-y-1">
        <Link href="/kabinet/dewan-pembina" className="w-full text-left block text-sm hover:text-blue-400">Dewan Pembina</Link>
        <Link href="/kabinet/bph" className="w-full text-left block text-sm hover:text-blue-400">BPH</Link>
        <Link href="/kabinet/medkominfo" className="w-full text-left block text-sm hover:text-blue-400">MEDKOMINFO</Link>
        <Link href="/kabinet/humas" className="w-full text-left block text-sm hover:text-blue-400">Humas</Link>
        <Link href="/kabinet/bisnis-kreatif" className="w-full text-left block text-sm hover:text-blue-400">Bisnis Kreatif</Link>
        <Link href="/kabinet/penasihat" className="w-full text-left block text-sm hover:text-blue-400">Penasihat</Link>
      </div>
    </div>

    <Link href="/tentang" className="w-full text-left block hover:text-blue-400">Tentang Himasi</Link>
  </div>
)}
    </nav>
  );
}
