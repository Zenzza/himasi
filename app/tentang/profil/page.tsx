'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const metadata = {
  title: "Secret - HIMASI ISB Atma Luhur",
  description: "Secret HIMASI ISB Atma Luhur.",
};

export default function EasterEgg() {
  const [found, setFound] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white relative px-6">
      <div className="text-center max-w-lg">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-black"
        >
          {found ? 'Created by ' : 'Nothing to Found'}
        </motion.h1>

        {!found ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFound(true)}
            className="mt-4 bg-white text-black font-semibold py-2 px-6 rounded-lg  hover:bg-lime-400 transition"
          >
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-white"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image
                src="/anggota/WIP.png" 
                alt="Profil"
                width={120}
                height={120}
                className="border-2 border-blue-950 shadow-lg"
              />
              <div>
                <p className="text-xl font-bold text-black">Jordi Venzen</p>
                <p className="text-sm text-black">Divisi MEDKOMINFO</p>               
                <p className="text-sm text-black">Web Developer | HIMASI ISB Atma Luhur</p>

              </div>
              <p className="text-sm mt-2 text-black">Selamat telah menemukan Halaman Rahasia ini.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
