'use client'

import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqData = [
  {
    question: 'Apa itu HIMASI ISB Atma Luhur?',
    answer:
      '"HIMASI" adalah organisasi mahasiswa yang berada di bawah naungan Program Studi Sistem Informasi di Institut Sains dan Bisnis Atma Luhur. Organisasi ini bertujuan untuk menjadi wadah pengembangan diri, kreativitas, dan keterampilan mahasiswa dalam bidang akademik, sosial, serta teknologi informasi.',
  },
  {
    question: 'Berapa Divisi dalam HIMASI ISB Atma Luhur?',
    answer: 'Terdapat 4 Divisi yaitu Divisi Penasihat, Divisi Humas, Divisi Kreatif, dan Divisi MEDKOMINFO.',
  },
  {
    question: 'Siapa Saja Yang Ada di HIMASI ISB Atma Luhur?',
    answer: 'Terdiri dari dewan pembina, BPH, kepala divisi, dan anggota aktif.',
  },
  {
    question: 'Apa Saja Program Kerja yang Telah Direncanakan oleh HIMASI ISB Atma Luhur?',
    answer: 'Program kerja meliputi seminar, workshop, pengabdian masyarakat, dan lainnya.',
  },
  {
    question: 'Bagaimana Cara Bergabung di HIMASI ISB Atma Luhur?',
    answer: 'Mahasiswa Sistem Informasi dapat mendaftar melalui open recruitment ORMAWA.',
  },
  {
    question: 'Seseru apa sih di HIMASI ISB Atma Luhur?',
    answer: 'Behh, kalau dari MinSI sih ratingnya 100/100!! Ayo Join HIMASI.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="bg-blue-800 py-10 px-6 md:px-16 max-w-4xl mx-auto md:rounded-2xl rounded-none text-white">
      <h2 className="text-3xl font-bold mb-2">FAQ</h2>
      <h3 className="text-2xl font-extrabold mb-8">HIMASI ISB Atma Luhur</h3>

      <div className="divide-y divide-white/30">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className="py-4 cursor-pointer flex justify-between items-start gap-4"
          >
            <div className="flex-1">
              <p className="font-semibold uppercase">{item.question}</p>
              {activeIndex === index && (
                <p className="mt-2 text-sm normal-case">{item.answer}</p>
              )}
            </div>
            <div className="text-xl mt-1">
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
