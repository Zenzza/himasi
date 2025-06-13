'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'

const beritaList = [
  {
    title: 'HIMASI GAHESI 2025',
    desc: 'Pada tahun ini, HIMASI menggelar kegiatan healing bersama bertajuk HIMASI GAHESI 2025 — Gak Healing Sinting! 🎉 Kegiatan ini menjadi wadah bagi seluruh anggota HIMASI untuk sejenak rehat dari rutinitas akademik dan mempererat kebersamaan dalam suasana santai namun tetap positif.',
    image: '/HIMASI_GAHESI_2025.jpg',
    link: '/berita',
  },
  {
    title: 'SI-Apresiasi: Finalis DUTA BAHASA Provinsi Kep. Bangka Belitung 2025',
    desc: 'Keluarga besar Himpunan Mahasiswa Sistem Informasi mengucapkan selamat dan apresiasi yang sebesar-besarnya kepada: Zahra Azaria...',
    image: '/Feed IG HIMASI SIAPRESIASI.png',
    link: '/berita/si-apresiasi',
  },
  {
    title: 'PEMENANG Kompetisi Design Logo 25th DIES NATALIS ISB Atma Luhur',
    desc: '🔥 Inilah Sang Juara! 🔥 Dengan penuh kebanggaan, kami umumkan Marvel Luzniky dan Valentina dari SMK BAKTI PANGKALPINANG sebagai Pemenang ...',
    image: '/PemenangKDL.jpg',
    link: '/berita',
  },
  {
    title: 'Dokumentasi HIMASI BERBAGI 2025',
    desc: 'HIMASI BERBAGI adalah program sosial dari HIMASI ISB Atma Luhur yang dilaksanakan dalam semangat kepedulian. Acara ini sukses dilaksanakan berkat partisipasi dari panitia, donatur dan sponsor yang...',
    image: '/COVER 2.png',
    link: '/berita',
  },
]

export default function BeritaCarousel() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-16 bg-gray-100 relative">
      <h2 className="text-3xl font-bold text-center text-black mb-2">Berita HIMASI</h2>
      <div className="w-24 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />

      <div className="relative px-4 max-w-screen-md sm:max-w-screen-lg mx-auto">
        <div
          ref={prevRef}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-blue-600 text-3xl hidden md:block"
        >
          ❮
        </div>
        <div
          ref={nextRef}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-blue-600 text-3xl hidden md:block"
        >
          ❯
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error: ts(2349)
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-expect-error: ts(2349)
            swiper.params.navigation.nextEl = nextRef.current
          }}
          pagination={{ el: '.custom-swiper-pagination', clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {beritaList.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl p-6 shadow flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-[200px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={280}
                    className="rounded-lg object-contain w-full h-auto"
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base mb-3">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-block text-blue-600 hover:underline font-medium text-sm md:text-base"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination flex justify-center mt-6" />
      </div>
    </section>
  )
}
