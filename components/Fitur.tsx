'use client'

import {
  UserRoundPlus,
  Shirt,
  Mic,
  ClipboardList,
  Trophy,
  Award,
  Megaphone,
  University,
} from 'lucide-react'
import { JSX } from 'react'

type FeatureItem = {
  title: string
  icon: JSX.Element
  status: 'active' | 'coming'
  link?: string
}

const features: FeatureItem[] = [
  {
    title: 'Recruitment HIMASI',
    icon: <UserRoundPlus size={40} />,
    status: 'coming',
  },
  {
    title: 'Order Baju Jurusan',
    icon: <Shirt size={40} />,
    status: 'coming',
  },
  {
    title: 'Info Lomba',
    icon: <Trophy size={40} />,
    status: 'coming',
  },
  {
    title: 'SI-Apresiasi',
    icon: <Award size={40} />,
    status: 'active',
    link: '/berita/si-apresiasi',
  },
  {
    title: "What's on SI",
    icon: <Mic size={40} />,
    status: 'coming',
  },
  {
    title: 'ATMA LUHUR Student Central',
    icon: <Megaphone size={40} />,
    status: 'active',
    link: 'https://bit.ly/atmaluhurstudentcentral',
  },
  {
    title: 'Pendaftaran Mahasiswa Baru',
    icon: <ClipboardList size={40} />,
    status: 'active',
    link: 'https://pmb.atmaluhur.ac.id/',
  },
  {
    title: 'ISB Atma Luhur',
    icon: <University size={40} />,
    status: 'active',
    link: 'https://atmaluhur.ac.id',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-black text-4xl font-bold mb-2">Menu Utama</h2>
      <div className="w-24 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto items-stretch">
        {features.map((feature, index) => {
          const isExternal = feature.link?.startsWith('http')

          const cardContent = (
            <div
              className={`h-full bg-gradient-to-t from-blue-950 via-blue-800 to-blue-400 
              rounded-2xl shadow-md p-6 flex flex-col items-center justify-center space-y-2 
              transition min-h-[220px] ${
                feature.status === 'active' ? 'hover:scale-[1.02] cursor-pointer' : 'cursor-not-allowed'
              }`}
            >
              <div className="text-white">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white text-center">{feature.title}</h3>

              {feature.status === 'active' ? (
                <p className="text-green-500 font-medium">Lihat</p>
              ) : (
                <p className="text-red-500 font-medium">Coming Soon</p>
              )}
            </div>
          )

          return feature.status === 'active' && feature.link ? (
            <a
              key={index}
              href={feature.link}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="h-full"
            >
              {cardContent}
            </a>
          ) : (
            <div key={index} className="h-full">
              {cardContent}
            </div>
          )
        })}
      </div>

    </section>
  )
}
