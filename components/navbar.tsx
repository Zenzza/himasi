"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
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

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 
        ${isScrolled ? 'h-14 bg-gradient-to-b from-blue-950 to-blue-800 shadow-md' : 'h-20 bg-gradient-to-b from-blue-950 to-blue-800 shadow-lg'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isScrolled ? 'h-14' : 'h-20'}`}>
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/LogoHIMASI.png"
                alt="Logo HIMASI"
                width={isScrolled ? 28 : 40}
                height={isScrolled ? 28 : 40}
                className="mr-2 transition-all duration-300 object-contain"
              />
            </Link>
            <Link
              href="/"
              className={`font-bold text-white transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-xl'
              }`}
            >
              HIMASI ISB ATMA LUHUR
            </Link>
          </div>

          <div
            className={`hidden md:flex space-x-6 items-center relative transition-all duration-300 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}
            ref={dropdownRef}
          >
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/berita" className="hover:text-blue-400">Berita</Link>
            <Link href="/berita/koneksi" className="hover:text-blue-400">KONEKSI</Link>
            <Link href="/berita/whats-on-si" className="hover:text-blue-400">WOS</Link>

            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <div className="flex items-center gap-1 cursor-pointer text-white hover:text-blue-500 transition">
                <span>Kabinet</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 bg-blue-800 rounded-xl w-[600px] p-6 grid grid-cols-2 gap-4 z-50 text-center"
                  >
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
                        width={215}
                        height={170}
                        className="rounded-md mb-2 object-cover"
                      />
                      <p className="font-semibold text-black text-sm">Kabinet RAKSABHINAYA</p>
                      <p className="text-xs text-gray-500">Kabinet HIMASI ISB Atma Luhur 2025</p>
                      <Link href="/kabinet" className="text-blue-600 text-xs mt-2 inline-block">
                        Lihat Selengkapnya →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-blue-900 px-4 pt-6 pb-6 flex flex-col justify-between text-left z-50 shadow-lg md:hidden"
            >
              <div>
                <div className="flex justify-end mb-4">
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} className="text-white" />
                  </button>
                </div>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm hover:text-blue-400 space-y-2 mt-2 font-semibold">Home</Link>
                <Link href="/berita" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm hover:text-blue-400 space-y-2 mt-2 font-semibold">Berita</Link>
                <Link href="/berita/koneksi" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm hover:text-blue-400 space-y-2 mt-2 font-semibold">KONEKSI</Link>
                <Link href="/berita/whats-on-si" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm hover:text-blue-400 space-y-2 mt-2 font-semibold">What&apos;s on SI</Link>
                <div className="space-y-2 mt-2">
                  <Link href="/kabinet" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm hover:text-blue-400 font-semibold">Kabinet</Link>
                  <div className="pl-4 space-y-1">
                    <Link href="/kabinet/dewan-pembina" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm hover:text-blue-400">
                      <FiChevronRight /> Dewan Pembina
                    </Link>
                    <Link href="/kabinet/bph" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm hover:text-blue-400">
                      <FiChevronRight /> BPH
                    </Link>
                    <Link href="/kabinet/medkominfo" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm hover:text-blue-400">
                      <FiChevronRight /> MEDKOMINFO
                    </Link>
                    <Link href="/kabinet/humas" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm hover:text-blue-400">
                      <FiChevronRight /> Humas
                    </Link>
                    <Link href="/kabinet/bisnis-kreatif" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm hover:text-blue-400">
                      <FiChevronRight /> Bisnis Kreatif
                    </Link>
                    <Link href="/kabinet/penasihat" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm hover:text-blue-400">
                      <FiChevronRight /> Penasihat
                    </Link>
                  </div>
                </div>
                <Link href="/tentang" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm hover:text-blue-400 space-y-2 mt-2 font-semibold">Tentang Himasi</Link>
              </div>
              <div className="flex justify-around text-xl text-white pt-4 border-t border-white">
                <a href="https://www.tiktok.com/@himasi_bisniskreatif" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="hover:text-blue-400" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61555101788031" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-blue-400" />
                </a>
                <a href="https://www.instagram.com/himasi.atmaluhur/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-blue-400" />
                </a>
                <a href="https://wa.me/6281280758000" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="hover:text-blue-400" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}