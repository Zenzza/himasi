'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: 'Apa itu HIMASI ISB Atma Luhur?',
    answer: '"HIMASI" adalah organisasi mahasiswa yang berada di bawah naungan Program Studi Sistem Informasi di Institut Sains dan Bisnis Atma Luhur. Organisasi ini bertujuan untuk menjadi wadah pengembangan diri, kreativitas, dan keterampilan mahasiswa dalam bidang akademik, sosial, serta teknologi informasi.',
  },
  {
    question: 'Berapa Divisi dalam HIMASI ISB Atma Luhur?',
    answer: 'Terdapat 4 Divisi yaitu Divisi Penasihat, Divisi Humas, Divisi Kreatif, dan Divisi MEDKOMINFO.',
  },
  {
    question: 'Siapa Saja Yang Ada di HIMASI ISB Atma Luhur?',
    answer: 'Terdiri dari dewan pembinan, BPH, kepala divisi, dan anggota aktif.',
  },
  {
    question: 'Apa Saja Program Kerja yang Telah Direncanakan oleh HIMASI ISB Atma Luhur?',
    answer: 'Program kerja meliputi seminar, workshop, pengabdian masyarakat, dan lainnya.',
  },
  {
    question: 'Bagaimana Cara Bergabung di HIMASI ISB Atmna Luhur?',
    answer: 'Mahasiswa Sistem Informasi dapat mendaftar melalui open recruitment ORMAWA.',
  },
  {
    question: 'Seseru apa sih di HIMASI ISB Atma Luhur?',
    answer: 'Behh, kalau dari MinSI sih ratingnya 100/100!! Ayo Join HIMASI.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-blue-950 py-12 px-4 md:px-16 max-w-4xl mx-auto rounded-2xl">
      <h2 className="text-3xl font-bold mb-2">FAQ</h2>
      <h3 className="text-2xl font-extrabold mb-8">HIMASI ISB Atma Luhur</h3>
      <div className="divide-y divide-gray-300">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="py-4 cursor-pointer flex justify-between items-center"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex-1">
              <p className="font-semibold uppercase text-white">{item.question}</p>
              {activeIndex === index && (
                <p className="text-sm mt-2 text-white normal-case">{item.answer}</p>
              )}
            </div>
            <div className="ml-4 text-xl text-gray-600">
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
