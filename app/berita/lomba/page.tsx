import Image from "next/image";
import Link from "next/link";

export default function BeritaPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-[url('/back1.jpg')] bg-cover bg-center text-white py-28 text-center">
          <h1 className="text-4xl font-bold">Info LOMBA seputar SISTEM INFORMASI</h1>
          <p className="text-xl mt-4">Ayo ikut lomba dan kembangkan skill anda!</p>
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
