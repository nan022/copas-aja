import Header from "@/components/header";
import { Search, Copy, Terminal, CheckCircle2, Crown, Sparkles } from "lucide-react"
import Link from "next/link";

export default function PanduanPage() {
  const langkah = [
    {
      title: "Cari Prompt",
      desc: "Jelajahi berbagai kategori atau gunakan fitur pencarian untuk menemukan prompt yang sesuai dengan kebutuhanmu.",
      icon: <Search className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      color: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Salin Prompt",
      desc: "Klik tombol 'Salin' pada kartu prompt. Teks akan otomatis tersimpan ke clipboard perangkatmu.",
      icon: <Copy className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      color: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      title: "Tempel di AI",
      desc: "Buka ChatGPT, Claude, atau Gemini, lalu paste (Ctrl+V) prompt tadi ke kolom chat.",
      icon: <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      color: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Siap Digunakan",
      desc: "Tunggu AI memproses, dan hasil berkualitas tinggi siap kamu gunakan untuk pekerjaanmu.",
      icon: <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />,
      color: "bg-green-100 dark:bg-green-900/30",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section Panduan */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Copas Aja Mudah Digunakan!
            </div>
            <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
                Cara Menggunakan <span className="text-indigo-600">CopasAja</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                Dapatkan hasil AI terbaik hanya dalam hitungan detik dengan 4 langkah mudah.
            </p>
        </div>

        {/* Stepper Vertical / List */}
        <div className="space-y-12 relative">
          {/* Line dekorasi di belakang (Desktop) */}
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-100 dark:bg-gray-800 hidden md:block"></div>

          {langkah.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
              {/* Bulatan Nomor & Icon */}
              <div className={`relative z-10 shrink-0 w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-800 border-2 border-current text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              {/* Teks Penjelasan */}
              <div className="flex-1 pt-2">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-indigo-50 dark:bg-indigo-900/20 
                        border border-indigo-200 dark:border-indigo-800
                        rounded-xl p-5 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600 to-violet-700
                            flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-indigo-700 dark:text-indigo-400">
                Ribuan Prompt Siap Pakai
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Kamu juga bisa request prompt yang kamu mau, dengan cara berlangganan aja!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 
                         text-white rounded-lg font-medium transition-colors
                         flex items-center justify-center gap-2"
              >
                <Crown className="w-4 h-4" />
                Langganan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}