'use client';

import {
  UserRoundPlus,
  Shirt,
  Mic,
  ClipboardList,
  Trophy,
  Award,
  Megaphone,
  BookOpen,
} from 'lucide-react';
import { JSX } from 'react';

type FeatureItem = {
  title: string;
  icon: JSX.Element;
  status: 'active' | 'coming';
  link?: string;
};

const features: FeatureItem[] = [
  { title: 'Recruitment HIMASI', icon: <UserRoundPlus size={36} />, status: 'coming' },
  { title: 'Order Baju Jurusan', icon: <Shirt size={36} />, status: 'coming' },
  { title: 'Info Lomba', icon: <Trophy size={36} />, status: 'coming' },
  { title: 'SI-Apresiasi', icon: <Award size={36} />, status: 'active', link: '/berita/si-apresiasi' },
  { title: "What's on SI", icon: <Mic size={36} />, status: 'coming' },
  { title: 'KONEKSI', icon: <BookOpen size={36} />, status: 'active', link: '/berita/koneksi' },
  { title: 'ATMA LUHUR Student Central', icon: <Megaphone size={36} />,status: 'active',link: 'https://bit.ly/atmaluhurstudentcentral' },
  { title: 'PMB Atma Luhur', icon: <ClipboardList size={36} />, status: 'active',link: 'https://pmb.atmaluhur.ac.id/' },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-black text-4xl font-bold mb-2">Menu Utama</h2>
      <div className="w-24 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const isExternal = feature.link?.startsWith('http');

          const cardContent = (
            <div
              className={`transition-all duration-300 w-full 
              ${
                feature.status === 'active'
                  ? 'hover:scale-[1.02] cursor-pointer'
                  : 'cursor-not-allowed'
              } 
              rounded-xl shadow-md 
              bg-gradient-to-t from-blue-950 via-blue-800 to-blue-600
              p-4 md:px-6 md:py-5
              flex flex-col justify-between
              min-h-[50px] md:aspect-[3/2]`}
            >
              <div className="flex flex-row justify-between items-center md:flex-col md:items-start md:gap-3">
                <div className="flex items-center gap-4 text-white">
                  {feature.icon}
                  <h3 className="text-base md:text-lg font-semibold md:font-bold text-left">
                    {feature.title}
                  </h3>
                </div>

                <div className="block md:hidden text-sm font-medium text-right">
                  {feature.status === 'active' ? (
                    <span className="text-green-400">Lihat Selengkapnya</span>
                  ) : (
                    <span className="text-red-400">Coming Soon</span>
                  )}
                </div>
              </div>

              <div className="hidden md:block text-sm font-medium text-left w-full mt-4 text-white">
                {feature.status === 'active' ? (
                  <span className="text-green-400">Lihat Selengkapnya</span>
                ) : (
                  <span className="text-red-400">Coming Soon</span>
                )}
              </div>
            </div>
          );

          return feature.status === 'active' && feature.link ? (
            <a
              key={index}
              href={feature.link}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="block w-full"
            >
              {cardContent}
            </a>
          ) : (
            <div key={index}>{cardContent}</div>
          );
        })}
      </div>
    </section>
  );
}
