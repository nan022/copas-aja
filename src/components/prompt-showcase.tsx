import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, Image, BarChart, Code, TrendingUp, ArrowRight } from "lucide-react";

export default function PromptShowcase() {
  const showcaseItems = [
    {
      id: 1,
      category: "Marketing",
      title: "Iklan Facebook yang Menjual",
      prompt: "Tulis iklan Facebook yang menjual untuk produk skincare alami dengan target audiens wanita 25-40 tahun di Indonesia...",
      resultPreview: "/images/dummy-image.svg",
      resultType: "text",
      icon: MessageSquare,
      color: "from-amber-500 to-orange-600",
      stats: [
        { label: "CTR", value: "+35%" },
        { label: "Konversi", value: "+40%" },
        { label: "Engagement", value: "+50%" },
      ],
      rating: 4.9,
      reviews: 42,
    },
    {
      id: 2,
      category: "Kreatif",
      title: "Desain Logo Minimalis",
      prompt: "Generate logo minimalis untuk brand kopi lokal bernama 'Kopi Nusantara' dengan warna earthy tones...",
      resultPreview: "/images/dummy-image.svg",
      resultType: "image",
      icon: Image,
      color: "from-emerald-500 to-teal-600",
      stats: [
        { label: "Brand Recall", value: "+60%" },
        { label: "Profesional", value: "95%" },
        { label: "Unique", value: "100%" },
      ],
      rating: 4.8,
      reviews: 38,
    },
    {
      id: 3,
      category: "Bisnis",
      title: "Analisis Data Keuangan",
      prompt: "Buat analisis laporan keuangan Q4 2024 dalam format executive summary...",
      resultPreview: "/images/dummy-image.svg",
      resultType: "document",
      icon: BarChart,
      color: "from-blue-500 to-cyan-600",
      stats: [
        { label: "Insight", value: "15+" },
        { label: "Akurasi", value: "98%" },
        { label: "Actionable", value: "100%" },
      ],
      rating: 4.7,
      reviews: 29,
    },
    {
      id: 4,
      category: "Edukasi",
      title: "Materi Presentasi Interaktif",
      prompt: "Buat materi presentasi tentang Machine Learning untuk mahasiswa semester 3...",
      resultPreview: "/images/dummy-image.svg",
      resultType: "slides",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-600",
      stats: [
        { label: "Pemahaman", value: "+70%" },
        { label: "Retention", value: "+55%" },
        { label: "Engagement", value: "+80%" },
      ],
      rating: 4.9,
      reviews: 51,
    },
    {
      id: 5,
      category: "Teknis",
      title: "Kode Python untuk Automation",
      prompt: "Buat script Python untuk otomatisasi scraping data dari website e-commerce...",
      resultPreview: "/images/dummy-image.svg",
      resultType: "code",
      icon: Code,
      color: "from-zinc-500 to-slate-600",
      stats: [
        { label: "Efisiensi", value: "+90%" },
        { label: "Error Rate", value: "-95%" },
        { label: "Time Saved", value: "8 jam" },
      ],
      rating: 4.8,
      reviews: 35,
    },
    {
      id: 6,
      category: "Content",
      title: "Script Video YouTube",
      prompt: "Buat script video YouTube durasi 10 menit tentang cara menggunakan AI untuk bisnis...",
      resultPreview: "/images/dummy-image.svg",
      resultType: "text",
      icon: MessageSquare,
      color: "from-rose-500 to-pink-600",
      stats: [
        { label: "Watch Time", value: "+45%" },
        { label: "Retention", value: "+60%" },
        { label: "CTR", value: "+35%" },
      ],
      rating: 4.7,
      reviews: 48,
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Hasil Prompt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Prompt yang Tepat Untuk <span className="text-indigo-600 dark:text-indigo-400">Hasil yang Maksimal</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ini bukan sekedar teks biasa. Prompt yang tepat bisa hasilin output yang langsung dipakai buat programming, web dev, bisnis, kreatif, atau kerjaan kamu.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="group overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900"
              >
                {/* Image Preview */}
                <div className="relative h-56 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <div className="absolute inset-0">
                    <img
                      src={item.resultPreview}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                      <span className="text-yellow-500 text-xs">★</span>
                      <span className="text-xs font-bold ml-1 text-gray-900 dark:text-white">
                        {item.rating}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                    {item.prompt}
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {item.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                          {stat.label}
                        </div>
                        <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Before/After Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Perbedaan Prompt Biasa vs Prompt Premium
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Lihat perbedaan hasil yang signifikan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/20">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                    <span className="text-red-600 dark:text-red-400 font-bold text-lg">✗</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Prompt Biasa
                  </h4>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mb-4 border-2 border-dashed border-red-300 dark:border-red-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-mono leading-relaxed">
                    Buat iklan untuk skincare
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      Hasil terlalu umum dan tidak spesifik
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      Tidak ada pain point yang ditargetkan
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      CTA lemah, konversi rendah
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      Butuh editing manual berjam-jam
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* After */}
            <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">✓</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Prompt Premium
                  </h4>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4 border-2 border-dashed border-green-300 dark:border-green-700">
                  <p className="text-sm text-gray-800 dark:text-gray-200 font-mono leading-relaxed">
                    Tulis iklan Facebook yang menjual untuk produk skincare alami dengan target audiens wanita 25-40 tahun di Indonesia. Gunakan bahasa santai tapi persuasif, sertakan 3 pain point dan 1 CTA yang kuat.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      Hasil spesifik dan ter-target
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      Pain point relevan dengan audiens
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      CTA kuat, konversi meningkat 40%
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 text-xl mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      Siap pakai tanpa editing manual
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}