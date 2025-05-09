export const metadata = {
  title: "Baju Jurusan - HIMASI ISB Atma Luhur",
  description: "Order Baju Jurusan HIMASI ISB Atma Luhur.",
};
export default function BeritaPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-[url('/back1.jpg')] bg-cover bg-center text-white py-28 text-center">
          <h1 className="text-4xl font-bold pt-16">ORDER Baju Jurusan</h1>
          <p className="text-xl mt-4">Ayo segara order baju jurusan dan kenakan dengan bangga!</p>
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
