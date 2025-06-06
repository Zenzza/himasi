"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-800 text-white flex flex-col justify-center items-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/LogoHIMASI.png"
          alt="Logo HIMASI"
          width={80}
          height={80}
          className="mb-6"
        />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Halaman tidak ditemukan</h2>
        <p className="text-gray-300 mb-6 max-w-md">
          Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
