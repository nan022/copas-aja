import GridPattern from "./ui/grid-pattern";
import { Button } from "@/components/ui/button";
import { Sparkles, Crown, Zap, TrendingUp, Copy, Laugh, User, Instagram } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      {/* Grid Pattern Background - subtle & professional */}
      <div className="absolute inset-0 opacity-40">
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
                Prompt Berkualitas, Hasil Maksimal.
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Stop Asal Ketik! <br /> <span className="text-indigo-600 dark:text-indigo-400">Mulai Pakai Prompt yang Bener.</span>
              </h1>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                Prompt yang dirancang tepat bikin hasil AI jadi sangat lebih baik. Dapetin prompt siap pakai dari ahli kami, daripada mikir lama buat prompting mending <span className="text-indigo-600 dark:text-indigo-400"> Copas Aja!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                Cari Prompt
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center gap-1 px-4 py-2">
                <Crown className="h-7 w-7 text-indigo-500 dark:text-indigo-400" />
                    <div className="flex -space-x-1">
                        <Avatar className="h-8 w-8 rounded-2xl ring-2 ring-background grayscale">
                            <AvatarImage className="rounded-2xl" src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>NA</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8 rounded-2xl ring-2 ring-background grayscale">
                            <AvatarImage className="rounded-2xl" src="https://github.com/maxleiter.png" alt="@maxleiter" />
                            <AvatarFallback>N</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-8 w-8 rounded-2xl ring-2 ring-background grayscale">
                            <AvatarImage className="rounded-2xl" src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                            <AvatarFallback>DA</AvatarFallback>
                        </Avatar>
                    </div>
                <span className="text-md font-medium text-indigo-500 dark:text-indigo-400">500+</span>
            </div>
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

          {/* Visual Section - Prompt Preview - FULL RESPONSIVE */}
          <div className="relative w-full">
            <div className="relative max-w-xl mx-auto">
              {/* Main Prompt Card - Kategori Kreatif */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-linear-to-r from-emerald-500 to-teal-600 text-white text-xs font-medium rounded-full">
                      Kreatif
                    </span>
                    <div className="mt-2 flex items-center">
                      <span className="text-xs text-green-600 dark:text-green-400 font-bold mr-2">⭐ 4.9</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">(156 reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Result Image Preview */}
                <div className="relative mb-4 rounded-xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-700 shadow-md">
                  <div className="absolute flex flex-row items-center gap-1 top-2 left-2 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    Hasil Generate AI <Sparkles className="w-3 h-3" />
                  </div>
                  <img 
                    src="/images/hasil-dummy.svg" 
                    alt="Hasil prompt kreatif" 
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Prompt Preview */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 mb-4 border-3 border-dashed border-emerald-300 dark:border-emerald-700">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">💡</span>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Prompt yang Digunakan:
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                    Buat potret sinematik hiper-realistis seorang pria muda Indonesia akhir 20-an 
                    dengan aura effortless cool, rambut hitam legam sebahu bergelombang alami (wavy) 
                    tertiup angin malam ...
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Digunakan</div>
                    <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">1.2K+</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Disimpan</div>
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400">890+</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 border-2 border-white dark:border-gray-800">
                      <User className="text-white dark:text-gray-600" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-200 border-2 border-white dark:border-gray-800">
                      <User className="text-white dark:text-gray-600" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-200 border-2 border-white dark:border-gray-800">
                      <User className="text-white dark:text-gray-600" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 border-2 border-white dark:border-gray-800">
                      <User className="text-white dark:text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">+24 lainnya</span>
                  </div>
                  <Button className="bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg px-5 py-2.5 font-medium shadow-lg hover:shadow-xl transition-all">
                    <Copy className="w-4 h-4 mr-1.5" />
                    Salin Prompt
                  </Button>
                </div>
              </div>

              {/* Floating Stat Badge - Hanya desktop */}
              <div className="absolute hidden lg:block -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-indigo-200 dark:border-indigo-800/50 transform -rotate-3">
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 text-red-500 dark:text-red-400 mr-2" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">"Kece Banget 🤩"</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">@nadia26</div>
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