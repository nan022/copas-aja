export interface Category {
  slug: string;
  name: string;
  rekomAI: string;
  description: string;
  icon: keyof typeof ICONS;
  promptContent: string;
  promptResult: string;
}

// Icon mapping untuk gradient background
export const ICONS = {
  messageSquare: 'message-square',
  barChart: 'bar-chart',
  image: 'image',
  graduationCap: 'graduation-cap',
  code: 'code',
  sparkles: 'sparkles',
  brush: 'brush',
  briefcase: 'briefcase',
  bookOpen: 'book-open',
  laptop: 'laptop'
} as const;

// Gradient colors untuk setiap icon
export const GRADIENT_COLORS: Record<keyof typeof ICONS, string> = {
  messageSquare: 'bg-linear-to-br from-amber-500 to-orange-600',
  barChart: 'bg-linear-to-br from-blue-500 to-cyan-600',
  image: 'bg-linear-to-br from-emerald-500 to-teal-600',
  graduationCap: 'bg-linear-to-br from-purple-500 to-pink-600',
  code: 'bg-linear-to-br from-zinc-500 to-slate-600',
  sparkles: 'bg-linear-to-br from-indigo-600 to-violet-700',
  brush: 'bg-linear-to-br from-rose-500 to-pink-600',
  briefcase: 'bg-linear-to-br from-cyan-500 to-blue-600',
  bookOpen: 'bg-linear-to-br from-fuchsia-500 to-purple-600',
  laptop: 'bg-linear-to-br from-gray-500 to-gray-700'
};

export const CATEGORIES: Record<string, Category> = {
  marketing: {
    slug: "marketing",
    name: "Marketing",
    rekomAI: "Chat GPT",
    description: "Iklan, copywriting, social media",
    icon: "messageSquare",
    promptContent: "Buatkan caption Instagram untuk promo diskon 50% produk kecantikan dengan tone friendly dan urgency",
    promptResult: "✨ FLASH SALE! ✨\nDiskon 50% cuma hari ini! Kulit glowing impianmu sudah di depan mata 💖\nJangan sampai kehabisan! Klik link di bio sekarang 👆\n#BeautySale #GlowUp"
  },
  bisnis: {
    slug: "bisnis",
    name: "Bisnis",
    rekomAI: "Chat GPT",
    description: "Analisis, laporan, strategi",
    icon: "barChart",
    promptContent: "Buatkan executive summary untuk laporan keuangan Q4 dengan highlight growth 25%",
    promptResult: "📊 EXECUTIVE SUMMARY - Q4 2025\n\n✅ PERTUMBUHAN LUAR BIASA: Revenue naik 25% YoY menjadi Rp15M\n✅ MARGIN SEHAT: Gross margin stabil di 45%\n✅ CUSTOMER ACQUISITION: +500 new users (target 300)\n\n🎯 REKOMENDASI:\n1. Scale marketing budget 2x di channel A\n2. Launch product B Q1 2026\n3. Optimize operational cost -10%\n\nNext steps: Present ke board 15 Januari"
  },
  kreatif: {
    slug: "kreatif",
    name: "Kreatif",
    rekomAI: "Chat GPT, Midjourney",
    description: "Desain, konten, ide kreatif",
    icon: "image",
    promptContent: "Pria muda Indonesia akhir 20-an, rambut hitam sebahu bergelombang tertiup angin malam, kulit sawo matang bercahaya dengan tekstur pori halus, jerawat kering di dagu, bekas luka kecil di alis kiri. Meniup mie bakso kuah pedas yang mengepul dengan sumpit bambu, bibir dengan lip tint merah bata. Mengenakan kacamata bulat retro oversized frame emas lensa gradient smoke memantulkan neon (Nasihuy), jaket denim vintage indigo dengan sulaman parang Jawa di lengan. Latar warung pinggir jalan Jakarta malam: dinding bata ekspos grafiti, lampu neon kuning temaram, asap rokok bercampur uap mie. Rim light golden hour menyinari rambut dan tetesan kuah di bibir. Tangan kiri memegang mangkuk gerabah berisi bakso kuah merah, daun bawang, kerupuk udang. Postur condong depan dengan senyum tipis menggoda. Fujifilm GFX 100S, Classic Chrome, f/1.4, bokeh cahaya lampu jalan, grain halus, color grading warm keemasan, medium close-up rule of thirds, jiwa urban Indonesia.",
    promptResult: "/images/hasil-dummy.svg"
  },
  edukasi: {
    slug: "edukasi",
    name: "Edukasi",
    rekomAI: "Chat GPT",
    description: "Materi, tugas, skripsi",
    icon: "graduationCap",
    promptContent: "Buat outline materi pembelajaran AI untuk pemula dengan durasi 60 menit",
    promptResult: "🎓 OUTLINE MATERI: AI UNTUK PEMULA (60 MENIT)\n\nPART 1: APA ITU AI? (15 menit)\n- Definisi sederhana\n- Contoh AI di kehidupan sehari-hari\n- Demo: ChatGPT vs manusia\n\nPART 2: CARA KERJA AI (20 menit)\n- Training data concept\n- Machine learning basics\n- Hands-on: Buat AI sederhana dengan tools gratis\n\nPART 3: PRAKTEK LANGSUNG (20 menit)\n- Generate gambar dengan AI\n- Buat konten otomatis\n- Q&A session\n\nPART 4: NEXT STEPS (5 menit)\n- Resource belajar\n- Komunitas AI Indonesia\n- Challenge 7 hari"
  },
  teknis: {
    slug: "teknis",
    name: "Teknis",
    rekomAI: "Chat GPT",
    description: "Coding, web dev, UI & UX",
    icon: "code",
    promptContent: "Generate React component untuk card dengan hover effect dan dark mode support",
    promptResult: "```tsx\nimport { useState } from 'react';\n\ninterface CardProps {\n  title: string;\n  description: string;\n}\n\nexport default function FancyCard({ title, description }: CardProps) {\n  const [isHovered, setIsHovered] = useState(false);\n\n  return (\n    <div\n      className={`\n        rounded-xl p-6 transition-all duration-300\n        ${isHovered ? 'shadow-lg scale-[1.02] border-indigo-200 dark:border-indigo-800' : 'border border-gray-200 dark:border-gray-800'}\n        bg-white dark:bg-gray-900\n      `}\n      onMouseEnter={() => setIsHovered(true)}\n      onMouseLeave={() => setIsHovered(false)}\n    >\n      <h3 className=\"font-bold text-lg text-gray-900 dark:text-white mb-2\">\n        {title}\n      </h3>\n      <p className=\"text-gray-600 dark:text-gray-400\">\n        {description}\n      </p>\n    </div>\n  );\n}\n```"
  },
  copywriting: {
    slug: "copywriting",
    name: "Copywriting",
    rekomAI: "Chat GPT",
    description: "Email, sales page, landing page",
    icon: "brush",
    promptContent: "Tulis email newsletter untuk launch produk baru dengan subject line yang click-worthy",
    promptResult: "Subject: 🚀 Produk Baru! Ini Bisa Ubah Cara Kamu Kerja\n\nHi [Nama],\n\nKami excited banget announce tools terbaru yang bikin kerjaan kamu 3x lebih cepat!\n\n✅ Hemat 5 jam/minggu\n✅ Auto-generate report\n✅ Integrasi semua platform\n\nLimited early-bird price Rp99rb (normal Rp299rb)\n\nClaim sekarang sebelum harga naik! 👇\n[Button: GET EARLY ACCESS]\n\nP.S. Bonus 3 template siap pakai kalau order hari ini!"
  },
  startup: {
    slug: "startup",
    name: "Startup",
    rekomAI: "Chat GPT",
    description: "Pitch deck, business plan",
    icon: "briefcase",
    promptContent: "Buat pitch deck outline untuk startup edtech dengan target investor",
    promptResult: "💼 PITCH DECK OUTLINE - EDTECH STARTUP\n\n1. COVER SLIDE\n   - Nama startup + tagline\n   - Logo + contact info\n\n2. PROBLEM (1 slide)\n   - Pain point: 70% siswa kesulitan belajar online\n   - Current solutions gap\n\n3. SOLUTION (1 slide)\n   - AI-powered personalized learning\n   - Gamification + progress tracking\n\n4. MARKET SIZE (1 slide)\n   - TAM: Rp50T edukasi digital Indonesia\n   - SAM: Rp15T K-12 segment\n   - SOM: Rp2T Year 1 target\n\n5. PRODUCT DEMO (2 slides)\n   - Platform screenshot\n   - User journey flow\n\n6. BUSINESS MODEL (1 slide)\n   - Freemium: Basic free, Premium Rp99rb/bulan\n   - B2B: School license Rp5jt/tahun\n\n7. COMPETITIVE ADVANTAGE (1 slide)\n   - AI algorithm proprietary\n   - Partnerships with 50+ schools\n\n8. GO TO MARKET (1 slide)\n   - Phase 1: Jakarta (6 months)\n   - Phase 2: 5 major cities (12 months)\n\n9. TEAM (1 slide)\n   - Founders background\n   - Advisors\n\n10. FINANCIALS (1 slide)\n    - Revenue projection 3 years\n    - Unit economics\n\n11. ASK (1 slide)\n    - Seeking: Rp2M for 10% equity\n    - Use of funds breakdown\n\n12. THANK YOU + CONTACT"
  },
  akademik: {
    slug: "akademik",
    name: "Akademik",
    rekomAI: "Chat GPT",
    description: "Skripsi, jurnal, penelitian",
    icon: "bookOpen",
    promptContent: "Buat outline bab 1 skripsi tentang dampak AI terhadap produktivitas kerja",
    promptResult: "📖 OUTLINE BAB 1: PENDAHULUAN\n\n1.1 Latar Belakang\n   - Revolusi AI di dunia kerja\n   - Statistik adopsi AI di Indonesia\n   - Gap penelitian sebelumnya\n\n1.2 Rumusan Masalah\n   - Bagaimana AI mempengaruhi produktivitas?\n   - Faktor apa saja yang berperan?\n   - Perbedaan dampak antar industri?\n\n1.3 Tujuan Penelitian\n   - Mengukur dampak AI terhadap produktivitas\n   - Mengidentifikasi faktor penentu keberhasilan\n   - Memberikan rekomendasi implementasi\n\n1.4 Manfaat Penelitian\n   - Bagi akademisi: literature contribution\n   - Bagi praktisi: best practices guide\n   - Bagi kebijakan: regulatory framework\n\n1.5 Ruang Lingkup\n   - Fokus: UMKM & startup tech\n   - Periode: 2020-2025\n   - Metode: Mixed methods (kualitatif + kuantitatif)\n\n1.6 Sistematika Penulisan\n   - Bab 2: Landasan Teori\n   - Bab 3: Metodologi\n   - Bab 4: Hasil & Pembahasan\n   - Bab 5: Kesimpulan & Saran"
  },
  developer: {
    slug: "developer",
    name: "Developer",
    rekomAI: "Chat GPT",
    description: "Code, debugging, optimization",
    icon: "laptop",
    promptContent: "Generate Python script untuk web scraping dengan error handling dan export ke CSV",
    promptResult: "```python\nimport requests\nfrom bs4 import BeautifulSoup\nimport csv\nimport time\nfrom datetime import datetime\n\ndef scrape_data(url: str, max_retries: int = 3):\n    \"\"\"Scrape data dengan error handling\"\"\"\n    \n    headers = {\n        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'\n    }\n    \n    for attempt in range(max_retries):\n        try:\n            response = requests.get(url, headers=headers, timeout=10)\n            response.raise_for_status()\n            \n            soup = BeautifulSoup(response.content, 'html.parser')\n            return soup\n            \n        except requests.exceptions.RequestException as e:\n            print(f\"Attempt {attempt + 1} failed: {e}\")\n            if attempt == max_retries - 1:\n                raise\n            time.sleep(2)\n\ndef extract_items(soup):\n    \"\"\"Extract data dari HTML\"\"\"\n    items = []\n    \n    product_cards = soup.find_all('div', class_='product-card')\n    \n    for card in product_cards:\n        try:\n            name = card.find('h3', class_='product-name').text.strip()\n            price = card.find('span', class_='price').text.strip()\n            rating = card.find('div', class_='rating').get('data-score', 'N/A')\n            \n            items.append({\n                'name': name,\n                'price': price,\n                'rating': rating,\n                'scraped_at': datetime.now().isoformat()\n            })\n        except AttributeError as e:\n            print(f\"Error extracting item: {e}\")\n            continue\n    \n    return items\n\ndef save_to_csv(data, filename='output.csv'):\n    \"\"\"Save data ke CSV\"\"\"\n    if not data:\n        print(\"No data to save\")\n        return\n    \n    keys = data[0].keys()\n    \n    with open(filename, 'w', newline='', encoding='utf-8') as f:\n        writer = csv.DictWriter(f, fieldnames=keys)\n        writer.writeheader()\n        writer.writerows(data)\n    \n    print(f\"✓ Saved {len(data)} items to {filename}\")\n\ndef main():\n    url = 'https://example.com/products'\n    \n    print(\"Starting scrape...\")\n    \n    try:\n        soup = scrape_data(url)\n        items = extract_items(soup)\n        save_to_csv(items)\n        \n    except Exception as e:\n        print(f\"✗ Scraping failed: {e}\")\n\nif __name__ == '__main__':\n    main()\n```"
  }
};

export function getAllCategories(): Category[] {
  return Object.values(CATEGORIES);
}

export function getCategoryBySlug(slug: string): Category | null {
  return CATEGORIES[slug] || null;
}