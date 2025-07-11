'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem('hasShownSplash')
    if (!hasShown) {
      setIsVisible(true)
      sessionStorage.setItem('hasShownSplash', 'true')

      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 2700)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/LogoHIMASI.png"
              alt="Logo HIMASI"
              width={120}
              height={120}
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            className="text-xl md:text-2xl font-bold text-blue-950 mt-6"
          >
            HIMASI ISB ATMA LUHUR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            className="text-sm md:text-base text-center text-gray-700 mt-1"
          >
            Himpunan Mahasiswa Sistem Informasi <br /> 
            ISB Atma Luhur Pangkalpinang
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
