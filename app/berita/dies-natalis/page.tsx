import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Dies Natalis - HIMASI ISB Atma Luhur",
  description: "Dies Natalis HIMASI ISB Atma Luhur.",
};

export default function DiesNatalisPage() {
  return (
    <div className="relative bg-white text-gray-800">
      <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/back1.jpg"
            alt="DIES NATALIS Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold">DIES NATALIS HIMASI</h1>
          <p className="text-xl mt-4">
            Tunggu dan jelajahi info terbaru terkait Dies Natalis HIMASI dan Sistem Informasi
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <a href="#himasi">
            <ChevronDown className="w-10 h-10 text-white animate-bounce" />
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">COMING SOON</h2>
          <p className="text-lg mt-2">This section is currently closed.</p>
        </div>
      </section>
    </div>
  );
}
