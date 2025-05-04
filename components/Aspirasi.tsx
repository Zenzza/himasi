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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('https://sheetdb.io/api/v1/vpo2src10ndhm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: form }),
      })

      if (res.ok) {
        setSubmitted(true)
        setForm({ email: '', kelas: '', aspirasi: '' })
      } else {
        alert('Gagal mengirim aspirasi.')
      }
    } catch (error) {
      alert('Terjadi kesalahan.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="aspirasi" className="py-10 px-4 bg-gray-100">
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md font-center">
        <h2 className="text-3xl font-bold text-center text-black mb-10">Aspirasi</h2>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">

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
              placeholder="Masukkan Email"
              required
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
              placeholder="Masukkan Kelas"
              required
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
              placeholder="Sampaikan Aspirasimu!"
              required
              value={form.aspirasi}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded placeholder-black text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
            disabled={loading}
          >
            {loading ? 'Mengirim...' : 'Kirim'}
          </button>

          {submitted && <p className="text-green-600">✅ Aspirasi berhasil dikirim!</p>}
        </form>
      </div>

      <div className="w-full md:w-1/2">
        <p className="text-black text-lg">
          Isi form ini untuk menyampaikan aspirasi dan saran kamu. Kami sangat menghargai masukan dari kamu
          untuk membantu meningkatkan kualitas kegiatan dan program yang ada di lingkungan kita. Jangan ragu untuk
          berbagi ide atau keluhan yang mungkin kamu alami. Semua aspirasi akan dipertimbangkan dengan serius.
        </p>
        <p>
            - HIMASI ISB Atma Luhur
        </p>
      </div>
    </div>
  </div>
  </section>
  )
}
