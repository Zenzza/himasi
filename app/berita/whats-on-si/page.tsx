export const metadata = {
  title: "What's On SI - HIMASI ISB Atma Luhur",
  description: "Secret HIMASI ISB Atma Luhur.",
};
import VideoCard from "@/components/WhatsonSI";

export default function BeritaPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-[url('/back1.jpg')] bg-cover bg-center text-white py-28 text-center">
          <h1 className="text-4xl font-bold pt-16">Whats On SI?</h1>
          <p className="text-xl mt-4">FAQ dan Fun Fact around SISTEM INFORMASI</p>
      </section>
        <section className="max-w-5xl mx-auto px-6 py-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 p-6 bg-white">
            <VideoCard videoSrc="/video/testreels.mp4" title="WOS Epsiode 1 : Keseharian HIMASI" />
            <VideoCard videoSrc="/video/testreels.mp4" title="WOS Epsiode 2 : Tips and Trick TUGAS by KAPRODI" />
            <VideoCard videoSrc="/video/testreels.mp4" title="WOS Epsiode 3 : Fun Fact SISTEM INFORMASI" />
            <VideoCard videoSrc="/video/testreels.mp4" title="WOS Epsiode 4 : " />
            <VideoCard videoSrc="/video/testreels.mp4" title="WOS Epsiode 5 : " />
            <VideoCard videoSrc="/video/testreels.mp4" title="WOS Epsiode 6 : " />
            </div>
        </section>
    </div>
  );
}


