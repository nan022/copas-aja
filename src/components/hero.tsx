import GridPattern from "./ui/grid-pattern";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Zap, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      {/* Grid Pattern Background - subtle & professional */}
      <div className="absolute inset-0 opacity-15">
        <GridPattern 
          width={32} 
          height={32} 
          x={-0.5} 
          y={-0.5} 
          strokeDasharray={"0"} 
          className="text-indigo-300/50 dark:text-indigo-700/30"
        />
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section - Focused on Prompt Marketplace */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Prompt Berkualitas, Hasil Maksimal
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Stop Asal Ketik. <span className="text-indigo-600 dark:text-indigo-400">Mulai Pakai Prompt yang Bener.</span>
              </h1>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                Prompt yang dirancang tepat bikin hasil AI jadi 40% lebih baik. Dapatkan prompt siap pakai dari praktisi, tanpa trial-error berjam-jam.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-shadow">
                Cari Prompt
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 px-8 py-6 rounded-xl font-semibold text-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                Jual Prompt
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">40%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Hasil Lebih Baik</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">300%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Pertumbuhan Pasar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">5 Menit</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Hemat Waktu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">1000+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Prompt Terverifikasi</div>
              </div>
            </div>
          </div>

          {/* Visual Section - Prompt Preview */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Prompt Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
                      Marketing
                    </span>
                    <div className="mt-2 flex items-center">
                      <span className="text-xs text-green-600 dark:text-green-400 font-bold mr-2">⭐ 4.9</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">(128 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 mb-5 border-4 border-dashed border-indigo-300 dark:border-indigo-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                    Tulis iklan Facebook yang menjual untuk produk [PRODUK] 
                    dengan target audiens [TARGET] di Indonesia. 
                    Gunakan bahasa santai tapi persuasif, 
                    sertakan 3 pain point dan 1 CTA yang kuat.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white dark:border-gray-800"></div>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-5 py-2.5 font-medium">
                    <Sparkles className="w-4 h-4 mr-1.5" />
                    Salin Prompt
                  </Button>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-indigo-200 dark:border-indigo-800/50 transform -rotate-3">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">+300%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Transaksi 2 Tahun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}