'use client'

import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const faqData = [
  {
    question: 'Apa itu HIMASI ISB Atma Luhur?',
    answer:
      '"HIMASI" adalah organisasi mahasiswa yang berada di bawah naungan Program Studi Sistem Informasi di Institut Sains dan Bisnis Atma Luhur. Organisasi ini bertujuan untuk menjadi wadah pengembangan diri, kreativitas, dan keterampilan mahasiswa dalam bidang akademik, sosial, serta teknologi informasi.',
  },
  {
    question: 'Berapa Divisi dalam HIMASI ISB Atma Luhur?',
    answer:
      'Dalam HIMASI terdapat empat divisi utama, yaitu Divisi Penasihat yang berperan memberikan arahan dan nasihat strategis, Divisi Humas yang bertugas menjalin komunikasi serta hubungan dengan pihak luar, Divisi Kreatif yang menangani desain dan ide-ide visual untuk menunjang kegiatan organisasi, serta Divisi MEDKOMINFO yang bertanggung jawab dalam pengelolaan media sosial, informasi digital, dan komunikasi internal organisasi.',
  },
  {
    question: 'Bagaimana Cara Bergabung di HIMASI ISB Atma Luhur?',
    answer:
      'Untuk bergabung dengan HIMASI ISB Atma Luhur, kamu dapat mendaftar melalui kegiatan Open Recruitment (Oprec) yang diadakan satu kali dalam setahun. Melalui proses ini, kamu akan dikenalkan lebih jauh dengan struktur, program kerja, dan budaya organisasi. Untuk tahun 2026, jadwal pelaksanaan Open Recruitment masih menunggu konfirmasi resmi dari DPM. Jadi, tetap pantau terus informasi terbaru melalui media sosial HIMASI!',
  },
  {
    question: 'Apa Saja Program Kerja yang Telah Direncanakan oleh HIMASI ISB Atma Luhur?',
    answer:
      'Program kerja organisasi mencakup berbagai kegiatan yang dirancang untuk mendukung pengembangan pengetahuan, keterampilan, dan kontribusi sosial anggota. Beberapa di antaranya meliputi seminar dan workshop yang bertujuan untuk menambah wawasan serta meningkatkan kompetensi di bidang tertentu, kegiatan pengabdian kepada masyarakat sebagai bentuk nyata peran sosial organisasi, serta program lainnya yang bersifat edukatif, inspiratif, dan kolaboratif guna mendukung tujuan organisasi secara menyeluruh.',
  },
  {
    question: 'Apakah HIMASI memiliki media sosial resmi? Apa saja?',
    answer:
      'HIMASI ISB Atma Luhur memiliki beberapa media sosial resmi yang aktif digunakan untuk menyampaikan informasi, membagikan dokumentasi kegiatan, serta menghadirkan konten edukatif dan hiburan. Kamu bisa mengikuti kami di Instagram (@himasi.atmaluhur), Facebook (HIMASI ISB Atma Luhur), TikTok (@himasi.atmaluhur), YouTube (HIMASI Atma Luhur), dan juga LINE yang akan dibagikan secara khusus saat Open Recruitment atau kegiatan tertentu. Jangan lupa follow agar tidak ketinggalan info terbaru!',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className="px-4 md:px-8 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-blue-800 rounded-2xl shadow-lg p-10 md:p-14">
        <div className="md:flex md:items-start md:justify-between mb-10">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-white text-sm">
              Masih ada pertanyaan? Tanyakan di Media <br />
              Sosial Kami di bawah ini!
            </p>
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
              <br />
          </div>

          <div className="md:w-2/3 divide-y divide-gray-200">
            {faqData.map((item, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between text-left"
                >
                  <div className="flex gap-4">
                    <span className="text-white font-bold min-w-[30px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium text-white">
                      {item.question}
                    </span>
                  </div>

                  <div className="text-white">
                    {openIndex === index ? <X size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="pl-12 pr-6 mt-2 text-white text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
