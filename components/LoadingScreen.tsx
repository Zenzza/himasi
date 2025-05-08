'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const loadingMessages = [
  'Menyiapkan data...',
  'Menghubungkan ke server...',
  'Memuat konten...',
  'Cek koneksi...',
  'Mohon tunggu sebentar...',
]

export default function LoadingScreen() {
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const nextIndex = (loadingMessages.indexOf(prev) + 1) % loadingMessages.length
        return loadingMessages[nextIndex]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-800 text-center">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <Image src="/LogoHIMASI.png" alt="Logo HIMASI" fill className="object-contain p-3" />
      </div>
      <h1 className="text-xl font-semibold text-white">HIMASI ISB Atma Luhur</h1>
      <p className="text-white text-sm italic mt-2">{currentMessage}</p>
    </div>
  )
}
