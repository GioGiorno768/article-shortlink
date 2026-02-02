// Technosia - Real Article Data
// Niche: Technology & Finance (Bahasa Indonesia)

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: string;
  author: string;
  readTime: string;
}

// Categories
export const CATEGORIES = [
  { name: "Teknologi", slug: "teknologi", color: "indigo" },
  { name: "Keuangan", slug: "keuangan", color: "emerald" },
  { name: "Fintech", slug: "fintech", color: "purple" },
  { name: "Gadget", slug: "gadget", color: "blue" },
  { name: "Programming", slug: "programming", color: "orange" },
];

// All Articles Data
export const ARTICLES: Article[] = [
  // ========== TECHNOLOGY ARTICLES ==========
  {
    slug: "ai-machine-learning-tren-2025",
    title: "AI dan Machine Learning: Tren yang Akan Mendominasi 2025",
    excerpt:
      "Artificial Intelligence terus berkembang pesat. Simak tren AI dan Machine Learning yang akan mengubah industri di tahun 2025.",
    category: "Teknologi",
    date: "2 Februari 2025",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "5 menit",
    content: `
      <p class="lead">Artificial Intelligence (AI) dan Machine Learning (ML) telah menjadi bagian integral dari kehidupan modern. Dari asisten virtual hingga sistem rekomendasi, teknologi ini terus mengubah cara kita berinteraksi dengan dunia digital.</p>

      <h2>Apa itu AI dan Machine Learning?</h2>
      <p>AI adalah cabang ilmu komputer yang bertujuan menciptakan mesin yang dapat berpikir dan belajar seperti manusia. Machine Learning adalah subset dari AI yang memungkinkan sistem belajar dari data tanpa diprogram secara eksplisit.</p>

      <h2>Tren AI di Tahun 2025</h2>
      <p>Beberapa tren yang akan mendominasi industri AI tahun ini:</p>
      <ul>
        <li><strong>Generative AI</strong> - Kemampuan AI untuk membuat konten kreatif seperti teks, gambar, dan video</li>
        <li><strong>AI dalam Healthcare</strong> - Diagnosis penyakit yang lebih akurat dengan bantuan AI</li>
        <li><strong>Autonomous Vehicles</strong> - Mobil self-driving yang semakin canggih</li>
        <li><strong>Edge AI</strong> - Pemrosesan AI langsung di perangkat tanpa cloud</li>
      </ul>

      <h2>Dampak pada Industri</h2>
      <p>Berbagai industri akan merasakan transformasi besar berkat AI. Sektor perbankan menggunakan AI untuk deteksi fraud, retail mengoptimalkan inventory, dan manufaktur meningkatkan efisiensi produksi.</p>

      <div class="callout">
        <h3>Kesimpulan</h3>
        <p>AI dan Machine Learning bukan lagi teknologi masa depan, tetapi realita hari ini. Memahami dan mengadopsi teknologi ini akan menjadi kunci keberhasilan di era digital.</p>
      </div>
    `,
  },
  {
    slug: "cara-memilih-laptop-programmer",
    title: "Cara Memilih Laptop Terbaik untuk Programmer di 2025",
    excerpt:
      "Panduan lengkap memilih laptop yang tepat untuk kebutuhan programming. Dari spesifikasi hingga brand recommendation.",
    category: "Gadget",
    date: "1 Februari 2025",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "7 menit",
    content: `
      <p class="lead">Memilih laptop untuk programming bukanlah keputusan yang mudah. Ada banyak faktor yang perlu dipertimbangkan, mulai dari performa hingga portabilitas.</p>

      <h2>Spesifikasi Minimum untuk Programming</h2>
      <p>Berikut spesifikasi yang direkomendasikan untuk aktivitas programming:</p>
      <ul>
        <li><strong>Processor:</strong> Intel Core i5/i7 Gen 12+ atau AMD Ryzen 5/7 5000+</li>
        <li><strong>RAM:</strong> Minimal 16GB, idealnya 32GB untuk development berat</li>
        <li><strong>Storage:</strong> SSD NVMe minimal 512GB</li>
        <li><strong>Display:</strong> FHD atau lebih tinggi, minimal 14 inch</li>
      </ul>

      <h2>Rekomendasi Laptop per Budget</h2>
      <h3>Budget 10-15 Juta</h3>
      <p>ASUS VivoBook Pro, Lenovo IdeaPad Gaming, Acer Aspire 7 adalah pilihan solid di range ini.</p>

      <h3>Budget 15-25 Juta</h3>
      <p>MacBook Air M2, Dell XPS 13, ThinkPad X1 Carbon menawarkan performa premium.</p>

      <h3>Budget 25 Juta+</h3>
      <p>MacBook Pro M3, Dell XPS 15, Razer Blade untuk produktivitas maksimal.</p>

      <div class="callout">
        <h3>Tips Pro</h3>
        <p>Prioritaskan RAM dan SSD daripada GPU jika fokus pada web development. Untuk game development atau ML, GPU menjadi lebih penting.</p>
      </div>
    `,
  },
  {
    slug: "5g-internet-of-things-konektivitas",
    title: "5G dan Internet of Things: Masa Depan Konektivitas Global",
    excerpt:
      "Bagaimana teknologi 5G akan merevolusi Internet of Things dan membuka peluang baru di berbagai industri.",
    category: "Teknologi",
    date: "31 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "6 menit",
    content: `
      <p class="lead">Teknologi 5G bukan sekadar internet lebih cepat. Ini adalah fondasi untuk era baru Internet of Things (IoT) yang akan menghubungkan miliaran perangkat di seluruh dunia.</p>

      <h2>Apa Keunggulan 5G?</h2>
      <p>5G menawarkan beberapa keunggulan signifikan dibanding 4G:</p>
      <ul>
        <li><strong>Kecepatan:</strong> Hingga 10 Gbps, 100x lebih cepat dari 4G</li>
        <li><strong>Latency:</strong> Hanya 1ms, ideal untuk real-time applications</li>
        <li><strong>Kapasitas:</strong> 1 juta perangkat per km²</li>
      </ul>

      <h2>Dampak pada IoT</h2>
      <p>Dengan 5G, berbagai aplikasi IoT menjadi praktis:</p>
      <ul>
        <li>Smart City dengan sensor real-time</li>
        <li>Telemedicine dan remote surgery</li>
        <li>Autonomous vehicles yang saling berkomunikasi</li>
        <li>Industrial IoT untuk manufaktur pintar</li>
      </ul>

      <h2>Adopsi 5G di Indonesia</h2>
      <p>Indonesia telah mulai mengadopsi 5G di kota-kota besar. Telkomsel, XL, dan Indosat telah meluncurkan layanan 5G komersial dengan coverage yang terus diperluas.</p>

      <div class="callout">
        <h3>Kesimpulan</h3>
        <p>5G dan IoT akan menciptakan ekosistem digital yang saling terhubung, membuka peluang inovasi di berbagai sektor industri.</p>
      </div>
    `,
  },
  {
    slug: "cybersecurity-pemula-lindungi-data",
    title: "Cybersecurity untuk Pemula: Cara Melindungi Data Pribadi Anda",
    excerpt:
      "Panduan dasar keamanan siber untuk melindungi privasi dan data pribadi Anda dari ancaman digital.",
    category: "Teknologi",
    date: "30 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "8 menit",
    content: `
      <p class="lead">Di era digital, keamanan data pribadi menjadi semakin penting. Setiap hari, jutaan orang menjadi korban cybercrime. Artikel ini akan membantu Anda memahami dasar-dasar cybersecurity.</p>

      <h2>Ancaman Siber yang Perlu Diwaspadai</h2>
      <ul>
        <li><strong>Phishing:</strong> Email atau pesan palsu yang mencuri kredensial</li>
        <li><strong>Malware:</strong> Software berbahaya yang merusak sistem</li>
        <li><strong>Ransomware:</strong> Mengunci data dan meminta tebusan</li>
        <li><strong>Social Engineering:</strong> Manipulasi psikologis untuk mendapat akses</li>
      </ul>

      <h2>Tips Keamanan Dasar</h2>
      <h3>1. Password yang Kuat</h3>
      <p>Gunakan kombinasi huruf besar, kecil, angka, dan simbol. Minimal 12 karakter. Jangan gunakan password yang sama untuk semua akun.</p>

      <h3>2. Two-Factor Authentication (2FA)</h3>
      <p>Aktifkan 2FA di semua akun penting. Ini menambah lapisan keamanan ekstra.</p>

      <h3>3. Update Software Reguler</h3>
      <p>Selalu update sistem operasi dan aplikasi untuk menutup celah keamanan.</p>

      <h3>4. Hati-hati dengan Link dan Attachment</h3>
      <p>Jangan klik link mencurigakan atau download file dari sumber tidak dikenal.</p>

      <div class="callout">
        <h3>Ingat!</h3>
        <p>Keamanan siber dimulai dari kesadaran pribadi. Selalu waspada dan jangan lengah terhadap potensi ancaman digital.</p>
      </div>
    `,
  },
  {
    slug: "cloud-computing-aws-azure-gcp",
    title: "Cloud Computing: Perbandingan AWS vs Azure vs Google Cloud",
    excerpt:
      "Analisis mendalam tiga penyedia cloud terbesar. Mana yang paling cocok untuk kebutuhan bisnis Anda?",
    category: "Teknologi",
    date: "29 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "10 menit",
    content: `
      <p class="lead">Cloud computing telah mengubah cara bisnis mengelola infrastruktur IT. Tiga pemain utama - AWS, Azure, dan Google Cloud - masing-masing memiliki kelebihan unik.</p>

      <h2>Amazon Web Services (AWS)</h2>
      <p>AWS adalah pemimpin pasar dengan market share terbesar. Kelebihannya:</p>
      <ul>
        <li>Layanan paling lengkap (200+ services)</li>
        <li>Ekosistem mature dengan dokumentasi luas</li>
        <li>Global infrastructure terluas</li>
      </ul>

      <h2>Microsoft Azure</h2>
      <p>Azure unggul untuk enterprise yang sudah menggunakan produk Microsoft:</p>
      <ul>
        <li>Integrasi seamless dengan Office 365 dan Windows Server</li>
        <li>Hybrid cloud terbaik</li>
        <li>Kuat di AI dan enterprise solutions</li>
      </ul>

      <h2>Google Cloud Platform (GCP)</h2>
      <p>GCP ideal untuk data analytics dan machine learning:</p>
      <ul>
        <li>BigQuery untuk big data analytics</li>
        <li>TensorFlow dan AI/ML tools terbaik</li>
        <li>Kubernetes (dikembangkan Google)</li>
      </ul>

      <h2>Perbandingan Harga</h2>
      <p>Ketiga provider menawarkan model pay-as-you-go dengan harga kompetitif. GCP sering dianggap paling murah untuk komputasi, AWS untuk storage, dan Azure untuk enterprise licensing.</p>

      <div class="callout">
        <h3>Rekomendasi</h3>
        <p>Pilih berdasarkan kebutuhan spesifik: AWS untuk fleksibilitas, Azure untuk enterprise Microsoft, GCP untuk data/ML workloads.</p>
      </div>
    `,
  },
  {
    slug: "framework-web-react-vue-angular",
    title: "React vs Vue vs Angular: Framework Mana yang Harus Dipelajari?",
    excerpt:
      "Perbandingan lengkap tiga framework JavaScript populer untuk membantu Anda memilih yang tepat.",
    category: "Programming",
    date: "28 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "9 menit",
    content: `
      <p class="lead">Memilih framework JavaScript yang tepat bisa membingungkan. React, Vue, dan Angular adalah tiga opsi paling populer dengan karakteristik berbeda.</p>

      <h2>React</h2>
      <p>Dikembangkan oleh Facebook, React adalah library untuk membangun UI.</p>
      <ul>
        <li><strong>Kelebihan:</strong> Fleksibel, komunitas besar, banyak job opportunities</li>
        <li><strong>Kekurangan:</strong> Perlu setup tambahan untuk routing, state management</li>
        <li><strong>Cocok untuk:</strong> Aplikasi skala besar, perusahaan tech</li>
      </ul>

      <h2>Vue</h2>
      <p>Vue dikenal dengan learning curve yang gentle dan dokumentasi excellent.</p>
      <ul>
        <li><strong>Kelebihan:</strong> Mudah dipelajari, lightweight, progressive adoption</li>
        <li><strong>Kekurangan:</strong> Ekosistem lebih kecil dari React</li>
        <li><strong>Cocok untuk:</strong> Startup, solo developer, migrasi dari jQuery</li>
      </ul>

      <h2>Angular</h2>
      <p>Angular adalah framework full-featured dari Google.</p>
      <ul>
        <li><strong>Kelebihan:</strong> All-in-one solution, TypeScript native, enterprise-ready</li>
        <li><strong>Kekurangan:</strong> Learning curve tinggi, verbose</li>
        <li><strong>Cocok untuk:</strong> Enterprise applications, tim besar</li>
      </ul>

      <div class="callout">
        <h3>Kesimpulan</h3>
        <p>Untuk pemula, Vue adalah pilihan terbaik. Untuk job market, React paling diminati. Untuk enterprise, Angular masih relevan.</p>
      </div>
    `,
  },
  {
    slug: "optimasi-website-loading-cepat",
    title: "Tips Optimasi Website untuk Loading Lebih Cepat",
    excerpt:
      "Panduan praktis meningkatkan kecepatan website Anda untuk pengalaman pengguna yang lebih baik dan SEO.",
    category: "Programming",
    date: "27 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "7 menit",
    content: `
      <p class="lead">Kecepatan website adalah faktor krusial untuk user experience dan SEO. Website lambat kehilangan pengunjung dan ranking di Google.</p>

      <h2>Mengapa Kecepatan Penting?</h2>
      <ul>
        <li>53% pengguna meninggalkan website yang loading lebih dari 3 detik</li>
        <li>Google menggunakan Core Web Vitals sebagai ranking factor</li>
        <li>Setiap detik delay mengurangi konversi 7%</li>
      </ul>

      <h2>Tips Optimasi</h2>
      <h3>1. Optimasi Gambar</h3>
      <p>Gunakan format WebP, lazy loading, dan ukuran yang tepat. Tools seperti ImageOptim sangat membantu.</p>

      <h3>2. Minify CSS dan JavaScript</h3>
      <p>Hapus whitespace dan komentar dari file production. Gunakan build tools seperti Webpack atau Vite.</p>

      <h3>3. Leverage Browser Caching</h3>
      <p>Set cache headers yang tepat untuk static assets. Browser tidak perlu download ulang file yang sama.</p>

      <h3>4. Gunakan CDN</h3>
      <p>Content Delivery Network menyimpan salinan website di server global, mengurangi latency.</p>

      <h3>5. Enable Compression</h3>
      <p>Gzip atau Brotli compression dapat mengurangi ukuran transfer hingga 70%.</p>

      <div class="callout">
        <h3>Tools Berguna</h3>
        <p>Gunakan Google PageSpeed Insights, GTmetrix, dan Chrome DevTools untuk mengidentifikasi bottleneck.</p>
      </div>
    `,
  },
  {
    slug: "ai-kehidupan-sehari-hari",
    title: "Artificial Intelligence dalam Kehidupan Sehari-hari",
    excerpt:
      "Tanpa disadari, AI sudah ada di sekitar kita. Kenali berbagai aplikasi AI yang Anda gunakan setiap hari.",
    category: "Teknologi",
    date: "26 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "5 menit",
    content: `
      <p class="lead">AI bukan lagi konsep futuristik. Setiap hari, kita berinteraksi dengan berbagai sistem AI tanpa menyadarinya.</p>

      <h2>AI di Smartphone Anda</h2>
      <ul>
        <li><strong>Voice Assistant:</strong> Siri, Google Assistant, Alexa</li>
        <li><strong>Face Unlock:</strong> Pengenalan wajah untuk keamanan</li>
        <li><strong>Camera AI:</strong> Scene detection, portrait mode</li>
        <li><strong>Keyboard Prediction:</strong> Auto-complete dan koreksi</li>
      </ul>

      <h2>AI di Media Sosial</h2>
      <p>Platform seperti Instagram, TikTok, dan YouTube menggunakan AI untuk:</p>
      <ul>
        <li>Rekomendasi konten yang relevan</li>
        <li>Filter spam dan konten berbahaya</li>
        <li>Face filters dan AR effects</li>
      </ul>

      <h2>AI di E-commerce</h2>
      <p>Tokopedia, Shopee, dan marketplace lain menggunakan AI untuk product recommendation, chatbot customer service, dan fraud detection.</p>

      <h2>AI di Transportasi</h2>
      <p>Gojek dan Grab menggunakan AI untuk route optimization, surge pricing, dan driver matching.</p>

      <div class="callout">
        <h3>Fakta Menarik</h3>
        <p>Diperkirakan pada tahun 2025, rata-rata orang akan berinteraksi dengan AI lebih dari 50 kali per hari.</p>
      </div>
    `,
  },

  // ========== FINANCE ARTICLES ==========
  {
    slug: "investasi-saham-pemula",
    title: "Cara Memulai Investasi Saham untuk Pemula",
    excerpt:
      "Panduan lengkap untuk memulai investasi saham dari nol. Pelajari dasar-dasar, tips, dan kesalahan yang harus dihindari.",
    category: "Keuangan",
    date: "25 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "10 menit",
    content: `
      <p class="lead">Investasi saham adalah salah satu cara terbaik untuk membangun kekayaan jangka panjang. Namun, banyak pemula yang bingung harus mulai dari mana.</p>

      <h2>Apa itu Saham?</h2>
      <p>Saham adalah bukti kepemilikan atas suatu perusahaan. Ketika membeli saham, Anda menjadi pemilik sebagian kecil dari perusahaan tersebut.</p>

      <h2>Cara Memulai Investasi Saham</h2>
      <h3>1. Buka Rekening Sekuritas</h3>
      <p>Pilih sekuritas terpercaya seperti Indo Premier, Mandiri Sekuritas, atau BCA Sekuritas. Proses pembukaan akun sekarang bisa online.</p>

      <h3>2. Pelajari Analisis Dasar</h3>
      <ul>
        <li><strong>Analisis Fundamental:</strong> Menilai kesehatan keuangan perusahaan</li>
        <li><strong>Analisis Teknikal:</strong> Membaca chart dan pola harga</li>
      </ul>

      <h3>3. Mulai dari Nominal Kecil</h3>
      <p>Tidak perlu jutaan untuk mulai. Banyak sekuritas memungkinkan investasi mulai dari Rp100.000.</p>

      <h3>4. Diversifikasi</h3>
      <p>Jangan taruh semua telur dalam satu keranjang. Beli saham dari berbagai sektor.</p>

      <h2>Kesalahan Umum Pemula</h2>
      <ul>
        <li>FOMO (Fear of Missing Out) - beli saat harga sudah naik tinggi</li>
        <li>Tidak riset sebelum beli</li>
        <li>Panik jual saat harga turun</li>
      </ul>

      <div class="callout">
        <h3>Tips Penting</h3>
        <p>Investasi saham adalah marathon, bukan sprint. Fokus pada jangka panjang dan konsisten menabung saham setiap bulan.</p>
      </div>
    `,
  },
  {
    slug: "panduan-cryptocurrency-bitcoin",
    title: "Panduan Lengkap Cryptocurrency dan Bitcoin untuk Pemula",
    excerpt:
      "Memahami cryptocurrency dari dasar. Apa itu Bitcoin, bagaimana cara kerjanya, dan risiko yang perlu diketahui.",
    category: "Keuangan",
    date: "24 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "8 menit",
    content: `
      <p class="lead">Cryptocurrency telah menjadi topik hangat di dunia keuangan. Bitcoin, Ethereum, dan ribuan kripto lainnya menawarkan cara baru bertransaksi dan berinvestasi.</p>

      <h2>Apa itu Cryptocurrency?</h2>
      <p>Cryptocurrency adalah mata uang digital yang menggunakan kriptografi untuk keamanan. Tidak dikontrol oleh pemerintah atau bank sentral, melainkan berjalan di jaringan terdesentralisasi (blockchain).</p>

      <h2>Bitcoin: Cryptocurrency Pertama</h2>
      <p>Bitcoin diciptakan tahun 2009 oleh seseorang dengan pseudonim Satoshi Nakamoto. Karakteristik:</p>
      <ul>
        <li>Supply terbatas: Maksimal 21 juta Bitcoin</li>
        <li>Terdesentralisasi: Tidak ada otoritas pusat</li>
        <li>Transparan: Semua transaksi tercatat di blockchain</li>
      </ul>

      <h2>Cara Membeli Cryptocurrency di Indonesia</h2>
      <ol>
        <li>Daftar di exchange terdaftar Bappebti (Indodax, Tokocrypto, Pintu)</li>
        <li>Verifikasi identitas (KYC)</li>
        <li>Deposit Rupiah</li>
        <li>Beli crypto pilihan</li>
      </ol>

      <h2>Risiko yang Perlu Diketahui</h2>
      <ul>
        <li>Volatilitas tinggi - harga bisa turun drastis</li>
        <li>Tidak ada jaminan pemerintah</li>
        <li>Risiko keamanan jika tidak hati-hati</li>
      </ul>

      <div class="callout">
        <h3>Peringatan</h3>
        <p>Hanya investasikan uang yang Anda siap kehilangan. Crypto sangat volatile dan berisiko tinggi.</p>
      </div>
    `,
  },
  {
    slug: "financial-planning-era-digital",
    title: "Financial Planning: Mengatur Keuangan di Era Digital",
    excerpt:
      "Strategi dan tools untuk mengelola keuangan pribadi dengan bantuan teknologi modern.",
    category: "Keuangan",
    date: "23 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "7 menit",
    content: `
      <p class="lead">Mengelola keuangan di era digital menjadi lebih mudah dengan berbagai aplikasi dan tools. Namun, prinsip dasar financial planning tetap sama.</p>

      <h2>Prinsip Dasar Financial Planning</h2>
      <h3>1. Budgeting (Anggaran)</h3>
      <p>Aturan 50/30/20:</p>
      <ul>
        <li>50% untuk kebutuhan (makan, transport, tagihan)</li>
        <li>30% untuk keinginan (hiburan, shopping)</li>
        <li>20% untuk tabungan dan investasi</li>
      </ul>

      <h3>2. Emergency Fund</h3>
      <p>Siapkan dana darurat 3-6 bulan pengeluaran. Simpan di tempat yang mudah diakses seperti rekening tabungan atau deposito.</p>

      <h3>3. Proteksi (Asuransi)</h3>
      <p>Asuransi kesehatan dan jiwa adalah proteksi dasar yang wajib dimiliki.</p>

      <h2>Aplikasi Keuangan Populer di Indonesia</h2>
      <ul>
        <li><strong>Money Lover:</strong> Tracking pengeluaran harian</li>
        <li><strong>Bibit:</strong> Investasi reksa dana</li>
        <li><strong>Ajaib:</strong> Investasi saham</li>
        <li><strong>Flip:</strong> Transfer gratis antar bank</li>
      </ul>

      <h2>Otomasi Keuangan</h2>
      <p>Set auto-debit untuk tabungan dan investasi. Dengan otomasi, Anda tidak perlu ingat untuk menabung setiap bulan.</p>

      <div class="callout">
        <h3>Tips</h3>
        <p>Track pengeluaran selama 1 bulan untuk tahu kemana uang Anda pergi. Ini langkah pertama menuju financial freedom.</p>
      </div>
    `,
  },
  {
    slug: "passive-income-5-cara",
    title: "Passive Income: 5 Cara Menghasilkan Uang Secara Pasif",
    excerpt:
      "Strategi membangun penghasilan pasif untuk mencapai kebebasan finansial tanpa bekerja terus-menerus.",
    category: "Keuangan",
    date: "22 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "6 menit",
    content: `
      <p class="lead">Passive income adalah penghasilan yang terus mengalir meskipun Anda tidak aktif bekerja. Ini adalah kunci menuju kebebasan finansial.</p>

      <h2>5 Sumber Passive Income</h2>
      
      <h3>1. Investasi Saham Dividen</h3>
      <p>Beli saham perusahaan yang rutin membagi dividen. Bank-bank besar dan perusahaan consumer goods biasanya membagi dividen konsisten.</p>

      <h3>2. Reksa Dana dan Obligasi</h3>
      <p>Reksa dana pendapatan tetap dan obligasi memberikan return reguler dengan risiko lebih rendah dari saham.</p>

      <h3>3. Properti (Rental)</h3>
      <p>Sewakan properti seperti kos-kosan, apartemen, atau rumah kontrakan. Bisa juga melalui platform seperti Airbnb.</p>

      <h3>4. Digital Products</h3>
      <p>Buat produk digital sekali, jual berulang kali:</p>
      <ul>
        <li>E-book</li>
        <li>Online course</li>
        <li>Template design</li>
        <li>Preset Lightroom</li>
      </ul>

      <h3>5. Affiliate Marketing</h3>
      <p>Promosikan produk orang lain dan dapat komisi dari setiap penjualan melalui link affiliate Anda.</p>

      <div class="callout">
        <h3>Realita Passive Income</h3>
        <p>Tidak ada passive income yang benar-benar "passive" di awal. Semua membutuhkan kerja keras dan investasi waktu/uang di depan.</p>
      </div>
    `,
  },
  {
    slug: "tips-menabung-investasi-milenial",
    title: "Tips Menabung dan Investasi untuk Generasi Milenial",
    excerpt:
      "Strategi finansial khusus untuk milenial yang ingin mulai membangun kekayaan sejak dini.",
    category: "Keuangan",
    date: "21 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "6 menit",
    content: `
      <p class="lead">Generasi milenial sering dianggap boros, padahal banyak yang sudah mulai sadar pentingnya menabung dan investasi. Tantangannya adalah gaji yang belum tinggi dengan biaya hidup yang meningkat.</p>

      <h2>Tantangan Finansial Milenial</h2>
      <ul>
        <li>Biaya hidup di kota besar yang tinggi</li>
        <li>Godaan lifestyle dan FOMO</li>
        <li>Student loan atau hutang</li>
        <li>Gaji yang tidak naik secepat inflasi</li>
      </ul>

      <h2>Strategi Menabung untuk Milenial</h2>
      <h3>1. Pay Yourself First</h3>
      <p>Saat gaji masuk, langsung sisihkan untuk tabungan sebelum digunakan untuk hal lain.</p>

      <h3>2. Potong Subscription yang Tidak Perlu</h3>
      <p>Review subscription Netflix, Spotify, dan lainnya. Apakah benar-benar digunakan?</p>

      <h3>3. Masak di Rumah</h3>
      <p>Makan di luar adalah "silent killer" keuangan milenial. Meal prep bisa hemat jutaan per bulan.</p>

      <h2>Mulai Investasi dari Kecil</h2>
      <p>Dengan aplikasi seperti Bibit dan Ajaib, Anda bisa mulai investasi dari Rp10.000. Tidak ada alasan untuk tidak mulai.</p>

      <div class="callout">
        <h3>Mindset Shift</h3>
        <p>Jangan tunda investasi sampai gaji besar. Compound interest bekerja lebih baik semakin awal Anda mulai.</p>
      </div>
    `,
  },

  // ========== FINTECH ARTICLES ==========
  {
    slug: "fintech-revolution-perbankan",
    title: "Fintech Revolution: Bagaimana Teknologi Mengubah Dunia Perbankan",
    excerpt:
      "Transformasi digital di sektor perbankan Indonesia. Dari e-wallet hingga pinjaman online.",
    category: "Fintech",
    date: "20 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "8 menit",
    content: `
      <p class="lead">Financial Technology (Fintech) telah merevolusi cara kita bertransaksi. Bank tradisional kini harus beradaptasi atau tertinggal.</p>

      <h2>Jenis-jenis Fintech di Indonesia</h2>
      <h3>1. E-Wallet dan Payment</h3>
      <p>GoPay, OVO, DANA, ShopeePay telah mengubah cara orang bertransaksi. Cashless society bukan lagi mimpi.</p>

      <h3>2. P2P Lending</h3>
      <p>Platform seperti Investree dan Modalku menghubungkan peminjam dengan pemberi pinjaman tanpa perantara bank.</p>

      <h3>3. Digital Banking</h3>
      <p>Bank digital seperti Jago, Blu, dan Seabank menawarkan layanan perbankan full-digital.</p>

      <h3>4. Insurtech</h3>
      <p>Asuransi digital seperti Lifepal dan Igloo membuat asuransi lebih accessible.</p>

      <h2>Dampak pada Bank Tradisional</h2>
      <p>Bank besar merespons dengan:</p>
      <ul>
        <li>Meluncurkan digital banking (BCA Mobile, M-Banking)</li>
        <li>Akuisisi atau partnership dengan fintech</li>
        <li>Transformasi digital internal</li>
      </ul>

      <h2>Regulasi OJK</h2>
      <p>OJK mengatur ketat industri fintech untuk melindungi konsumen, terutama di sektor P2P lending yang pernah banyak kasus ilegal.</p>

      <div class="callout">
        <h3>Masa Depan</h3>
        <p>Open Banking dan integrasi yang lebih seamless antara fintech dan bank tradisional akan menjadi tren ke depan.</p>
      </div>
    `,
  },
  {
    slug: "blockchain-masa-depan-keuangan",
    title: "Blockchain dan Masa Depan Sistem Keuangan Global",
    excerpt:
      "Bagaimana teknologi blockchain dapat merevolusi sistem keuangan dan berbagai industri lainnya.",
    category: "Fintech",
    date: "19 Januari 2025",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop",
    author: "Tim Technosia",
    readTime: "9 menit",
    content: `
      <p class="lead">Blockchain adalah teknologi di balik Bitcoin yang kini diaplikasikan jauh melampaui cryptocurrency. Potensinya untuk mengubah sistem keuangan global sangat besar.</p>

      <h2>Apa itu Blockchain?</h2>
      <p>Blockchain adalah database terdistribusi yang menyimpan data dalam blok-blok yang terhubung secara kronologis. Karakteristik utamanya:</p>
      <ul>
        <li>Immutable - data tidak bisa diubah setelah dicatat</li>
        <li>Transparan - semua transaksi bisa diverifikasi</li>
        <li>Terdesentralisasi - tidak ada single point of failure</li>
      </ul>

      <h2>Aplikasi Blockchain di Keuangan</h2>
      <h3>1. Cross-border Payments</h3>
      <p>Transfer internasional yang biasanya butuh berhari-hari bisa selesai dalam menit dengan biaya jauh lebih murah.</p>

      <h3>2. Smart Contracts</h3>
      <p>Kontrak yang dieksekusi otomatis saat kondisi terpenuhi, mengurangi kebutuhan perantara.</p>

      <h3>3. Supply Chain Finance</h3>
      <p>Tracking transparansi supply chain untuk memudahkan pembiayaan.</p>

      <h3>4. Digital Identity</h3>
      <p>Identitas digital yang aman untuk proses KYC yang lebih efisien.</p>

      <h2>Central Bank Digital Currency (CBDC)</h2>
      <p>Bank Indonesia sedang mengembangkan Rupiah Digital. Berbeda dengan crypto, CBDC diterbitkan dan dijamin oleh bank sentral.</p>

      <div class="callout">
        <h3>Kesimpulan</h3>
        <p>Blockchain bukan hanya tentang crypto. Teknologi ini akan menjadi infrastruktur keuangan masa depan dengan berbagai aplikasi revolusioner.</p>
      </div>
    `,
  },
];

// Get featured article (most recent)
export const FEATURED_ARTICLE = ARTICLES[0];

// Get recent articles (exclude featured)
export const RECENT_ARTICLES = ARTICLES.slice(1, 5);

// Get all articles for homepage
export const HOMEPAGE_ARTICLES = ARTICLES.slice(0, 8);

// Get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return ARTICLES.find((article) => article.slug === slug);
};

// Sidebar trending topics
export const TRENDING_TOPICS = [
  "AI dan Machine Learning",
  "Investasi Saham Pemula",
  "Cryptocurrency Bitcoin",
  "Cloud Computing",
  "Financial Planning",
];
