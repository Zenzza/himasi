import Image from "next/image";

export const metadata = {
  title: "Open Recruitment - HIMASI ISB Atma Luhur",
  description: "Open Recruitment HIMASI ISB Atma Luhur.",
};

export default function OPRECPage() {
  return (
    <div className="relative bg-white text-gray-800">
      <section className="relative h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/back1.jpg"
            alt="OPREC Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold">Open Recruitment HIMASI sedang <span className="text-red-700">DITUTUP</span></h1>
          <p className="text-xl mt-4">
            Tunggu dan jelajahi info terbaru terkait OPEN RECRUITMENT kami di MEDIA SOSIAL HIMASI ISB Atma Luhur
          </p>
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
