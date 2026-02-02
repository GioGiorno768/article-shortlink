import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Terakhir diperbarui: 2 Februari 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Introduction */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 mb-12">
            <p className="text-gray-700 dark:text-gray-300 m-0">
              Selamat datang di <strong>Technologia</strong>. Dengan mengakses
              dan menggunakan website ini, Anda menyetujui untuk terikat dengan
              syarat dan ketentuan berikut. Harap baca dengan seksama sebelum
              menggunakan layanan kami.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold">
                1
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Ketentuan Umum
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Website Technologia menyediakan konten informasi seputar
                teknologi, keuangan, dan fintech. Konten yang disediakan hanya
                untuk tujuan informasi dan edukasi.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Kami berhak mengubah, memodifikasi, atau menghentikan
                    layanan kapan saja tanpa pemberitahuan sebelumnya.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Penggunaan website ini tunduk pada hukum yang berlaku di
                    Indonesia.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-bold">
                2
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Hak Kekayaan Intelektual
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Semua konten di website ini, termasuk tetapi tidak terbatas
                pada:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Konten Terlindungi
                  </h4>
                  <ul className="text-sm space-y-1 m-0">
                    <li>• Artikel dan tulisan</li>
                    <li>• Gambar dan grafik</li>
                    <li>• Logo dan merek dagang</li>
                    <li>• Desain website</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Larangan
                  </h4>
                  <ul className="text-sm space-y-1 m-0">
                    <li>• Reproduksi tanpa izin</li>
                    <li>• Modifikasi konten</li>
                    <li>• Distribusi komersial</li>
                    <li>• Penggunaan merek dagang</li>
                  </ul>
                </div>
              </div>
              <p>
                Merupakan milik Technologia dan dilindungi oleh undang-undang
                hak cipta.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-bold">
                3
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Penggunaan yang Diperbolehkan
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>Anda diperbolehkan untuk:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0">
                    ✓
                  </span>
                  <span>
                    Membaca dan mengakses konten untuk keperluan pribadi.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0">
                    ✓
                  </span>
                  <span>
                    Membagikan link artikel melalui media sosial dengan
                    menyertakan kredit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0">
                    ✓
                  </span>
                  <span>
                    Mengutip sebagian kecil konten dengan menyebutkan sumber.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold">
                4
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Penggunaan yang Dilarang
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>Anda dilarang untuk:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 shrink-0">
                    ✗
                  </span>
                  <span>
                    Menggunakan website untuk aktivitas ilegal atau tidak sah.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 shrink-0">
                    ✗
                  </span>
                  <span>
                    Melakukan scraping, data mining, atau ekstraksi data
                    otomatis.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 shrink-0">
                    ✗
                  </span>
                  <span>Mengganggu atau merusak infrastruktur website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 shrink-0">
                    ✗
                  </span>
                  <span>Menyebarkan malware atau kode berbahaya.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-bold">
                5
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Disclaimer
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-4">
                <p className="font-medium text-amber-800 dark:text-amber-200 m-0">
                  ⚠️ Penting untuk diperhatikan:
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Konten disediakan "sebagaimana adanya" tanpa jaminan apapun.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Informasi keuangan bukan merupakan saran investasi
                    profesional.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Kami tidak bertanggung jawab atas keputusan yang diambil
                    berdasarkan konten website.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold">
                6
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Perubahan Ketentuan
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja.
                Perubahan akan berlaku efektif segera setelah dipublikasikan di
                halaman ini. Penggunaan website secara berkelanjutan setelah
                perubahan berarti Anda menyetujui ketentuan yang telah diubah.
              </p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Butuh Bantuan?
            </h3>
            <p className="text-gray-400 mb-6">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini,
              jangan ragu untuk menghubungi kami.
            </p>
            <a
              href="mailto:legal@technologia.id"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-500 transition-colors"
            >
              <span>✉</span>
              legal@technologia.id
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
