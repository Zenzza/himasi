'use client'
import { useState } from 'react'

export default function AspirasiForm() {
  const [form, setForm] = useState({
    email: '',
    kelas: '',
    aspirasi: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('https://sheetdb.io/api/v1/vpo2src10ndhm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: form }),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm({ email: '', kelas: '', aspirasi: '' })
      } else {
        alert('Gagal mengirim aspirasi.')
      }
    } catch (error) {
    console.error('Aspirasi submission error:', error)
    alert('Terjadi kesalahan.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="aspirasi" className="py-10 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-black mb-2">Aspirasi</h2>
        <div className="w-24 h-1 bg-blue-950 mx-auto mb-10 rounded-full" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 text-black text-lg space-y-4">
            <p>
              Suaramu penting untuk kami! Form ini disediakan untuk seluruh mahasiswa Sistem Informasi
              yang ingin menyampaikan kritik, saran, ide, maupun aspirasi lainnya terkait kegiatan, pelayanan,
              atau hal-hal yang ingin ditingkatkan di HIMASI dan Prodi SI.
            </p>
            <p>
              Semua masukan akan kami tampung dan bahas untuk menciptakan HIMASI dan Prodi SI yang lebih baik,
              terbuka, dan adaptif! Kerahasiaan data akan dijaga. Kamu bisa mengisi secara anonim atau mencantumkan identitas jika bersedia dihubungi lebih lanjut.
            </p>
            <p className="font-semibold">~ HIMASI ISB Atma Luhur</p>
          </div>

          <div className="w-full md:w-1/2 border p-6 rounded-lg shadow-lg bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-black mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Masukkan Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded placeholder-black text-black"
                />
              </div>

              <div>
                <label htmlFor="kelas" className="block text-black mb-2">
                  Kelas <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="kelas"
                  id="kelas"
                  required
                  placeholder="Masukkan Kelas"
                  value={form.kelas}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded placeholder-black text-black"
                />
              </div>

              <div>
                <label htmlFor="aspirasi" className="block text-black mb-2">
                  Aspirasi <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="aspirasi"
                  id="aspirasi"
                  required
                  placeholder="Sampaikan Aspirasimu!"
                  value={form.aspirasi}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded placeholder-black text-black"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                {loading ? 'Mengirim...' : 'Kirim'}
              </button>

              {submitted && (
                <p className="text-green-600 mt-2">
                  ✅ Aspirasi berhasil dikirim!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
