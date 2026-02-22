import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Technosia. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  openGraph: {
    title: "Kebijakan Privasi — Technosia",
    description:
      "Kebijakan privasi Technosia tentang pengumpulan dan penggunaan data.",
    url: "https://technosia.web.id/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kebijakan Privasi
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
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 mb-12">
            <p className="text-gray-700 dark:text-gray-300 m-0">
              Di <strong>Technologia</strong>, kami menghargai privasi Anda dan
              berkomitmen untuk melindungi data pribadi Anda. Kebijakan privasi
              ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
              melindungi informasi Anda saat Anda menggunakan website kami.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold">
                1
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Informasi yang Kami Kumpulkan
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Kami dapat mengumpulkan informasi berikut ketika Anda
                menggunakan website kami:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    <strong>Informasi Teknis:</strong> Alamat IP, jenis browser,
                    perangkat yang digunakan, dan waktu akses.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    <strong>Data Penggunaan:</strong> Halaman yang dikunjungi,
                    durasi kunjungan, dan interaksi dengan konten.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    <strong>Cookies:</strong> Data yang disimpan di browser Anda
                    untuk meningkatkan pengalaman pengguna.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold">
                2
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Bagaimana Kami Menggunakan Informasi
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>Informasi yang kami kumpulkan digunakan untuk:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Menyediakan dan meningkatkan layanan website kami.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Menganalisis tren penggunaan untuk optimasi konten.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Mencegah aktivitas berbahaya dan menjaga keamanan website.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 shrink-0"></span>
                  <span>Mematuhi kewajiban hukum yang berlaku.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold">
                3
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Cookies dan Teknologi Pelacakan
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Website kami menggunakan cookies untuk meningkatkan pengalaman
                Anda:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Cookies Esensial
                  </h4>
                  <p className="text-sm m-0">
                    Diperlukan agar website berfungsi dengan baik.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Cookies Analitik
                  </h4>
                  <p className="text-sm m-0">
                    Membantu kami memahami bagaimana pengunjung berinteraksi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold">
                4
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Keamanan Data
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Kami menerapkan langkah-langkah keamanan yang sesuai untuk
                melindungi informasi Anda dari akses tidak sah, perubahan,
                pengungkapan, atau penghancuran. Namun, tidak ada metode
                transmisi internet yang 100% aman.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-bold">
                5
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Hak Anda
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>Anda memiliki hak untuk:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                  <span>
                    Mengakses informasi pribadi yang kami simpan tentang Anda.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                  <span>Meminta koreksi data yang tidak akurat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                  <span>Meminta penghapusan data pribadi Anda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                  <span>Menarik persetujuan atas penggunaan cookies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-bold">
                6
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                Perubahan Kebijakan
              </h2>
            </div>
            <div className="pl-14 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke
                waktu. Perubahan akan diberitahukan melalui pembaruan tanggal di
                bagian atas halaman ini. Kami menyarankan Anda untuk meninjau
                kebijakan ini secara berkala.
              </p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Ada Pertanyaan?
            </h3>
            <p className="text-gray-400 mb-6">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini,
              silakan hubungi kami.
            </p>
            <a
              href="mailto:privacy@technologia.id"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-500 transition-colors"
            >
              <span>✉</span>
              privacy@technologia.id
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
