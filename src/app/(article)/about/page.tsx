"use client";

import Link from "next/link";
import { ARTICLES } from "@/data/articles";

// Get total articles count
const TOTAL_ARTICLES = ARTICLES.length;

// Stats data
const STATS = [
  { label: "Artikel Dipublikasi", value: TOTAL_ARTICLES.toString() },
  { label: "Tahun Pengalaman", value: "5+" },
  { label: "Pembaca Bulanan", value: "10K+" },
  { label: "Kategori Topik", value: "4" },
];

// Skills
const SKILLS = [
  "Content Writing",
  "Tech Journalism",
  "Financial Analysis",
  "Digital Marketing",
  "SEO Optimization",
  "Research & Analysis",
];

// Social links
const SOCIALS = [
  { name: "Twitter", url: "#", icon: "𝕏" },
  { name: "LinkedIn", url: "#", icon: "in" },
  { name: "GitHub", url: "#", icon: "⌘" },
  { name: "Email", url: "mailto:narancia@technologia.id", icon: "✉" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-24 md:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-pink-400">
                    N
                  </span>
                </div>
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900"></div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
                Founder & Writer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Narancia
              </h1>
              <p className="text-gray-400 text-lg max-w-xl mb-6">
                Tech enthusiast dan content creator yang passionate tentang
                teknologi, keuangan, dan inovasi digital. Membagikan insight dan
                pengetahuan untuk membantu pembaca memahami dunia tech &
                finance.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <p className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Story */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <span className="text-indigo-600">📖</span>
              </span>
              Tentang Saya
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Halo! Saya Narancia, founder dan penulis utama di{" "}
                <span className="text-indigo-600 font-medium">Technologia</span>
                . Dengan pengalaman lebih dari 5 tahun di industri teknologi dan
                keuangan, saya memiliki passion untuk berbagi pengetahuan dan
                insight kepada pembaca.
              </p>
              <p>
                Perjalanan saya dimulai sebagai seorang tech enthusiast yang
                selalu curious tentang perkembangan terbaru di dunia digital.
                Dari situlah saya mulai menulis dan membagikan analisis tentang
                teknologi, fintech, dan keuangan personal.
              </p>
              <p>
                Misi saya adalah membuat informasi kompleks menjadi mudah
                dipahami oleh semua orang. Saya percaya bahwa pengetahuan
                tentang teknologi dan keuangan adalah kunci untuk sukses di era
                digital ini.
              </p>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="text-purple-600">⚡</span>
              </span>
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Area Fokus
            </h3>
            <ul className="space-y-3">
              {[
                "Teknologi & Inovasi Digital",
                "Financial Technology (Fintech)",
                "Investasi & Keuangan Personal",
                "Programming & Software Development",
              ].map((focus) => (
                <li key={focus} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {focus}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Misi Technologia
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              "Menyediakan informasi teknologi dan keuangan yang akurat,
              terpercaya, dan mudah dipahami untuk membantu pembaca membuat
              keputusan yang lebih baik di era digital."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Konten Berkualitas
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Update Terkini
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Insight Mendalam
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Mari Terhubung!
          </h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk
            menghubungi saya. Saya selalu senang berdiskusi tentang teknologi
            dan keuangan!
          </p>
          <a
            href="mailto:narancia@technologia.id"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            <span>✉</span>
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* Back to Home */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
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
