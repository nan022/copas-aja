import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageSquare, Image, Code, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function PromptExamples() {
  // Define type for result types
  type ResultType = "text" | "image" | "document" | "slides" | "code";
  
  const examples = [
    {
      id: 1,
      category: "Marketing",
      title: "Iklan Facebook yang Menjual",
      prompt: "Tulis iklan Facebook yang menjual untuk produk skincare alami dengan target audiens wanita 25-40 tahun di Indonesia. Gunakan bahasa santai tapi persuasif, sertakan 3 pain point dan 1 CTA yang kuat.",
      resultPreview: "/images/dummy-image.svg",
      resultType: "text" as ResultType,
      rating: 4.9,
      reviews: 42,
      price: 29000,
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 2,
      category: "Kreatif",
      title: "Desain Logo Minimalis",
      prompt: "Generate logo minimalis untuk brand kopi lokal bernama 'Kopi Nusantara' dengan warna earthy tones, modern typography, dan elemen tradisional Indonesia.",
      resultPreview: "/images/dummy-image.svg",
      resultType: "image" as ResultType,
      rating: 4.8,
      reviews: 38,
      price: 35000,
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      category: "Bisnis",
      title: "Analisis Data Keuangan",
      prompt: "Buat analisis laporan keuangan Q4 2024 dalam format executive summary. Highlight 3 insight utama, 2 rekomendasi strategis, dan visualisasi data sederhana untuk presentasi ke direksi.",
      resultPreview: "/images/dummy-image.svg",
      resultType: "document" as ResultType,
      rating: 4.7,
      reviews: 29,
      price: 45000,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 4,
      category: "Edukasi",
      title: "Materi Presentasi Interaktif",
      prompt: "Buat materi presentasi tentang Machine Learning untuk mahasiswa semester 3. Sertakan analogi sederhana, 3 studi kasus nyata, dan 5 pertanyaan diskusi yang memancing kritis.",
      resultPreview: "/images/dummy-image.svg",
      resultType: "slides" as ResultType,
      rating: 4.9,
      reviews: 51,
      price: 39000,
      color: "from-purple-500 to-pink-600",
    },
  ];

  const resultTypeIcons: Record<ResultType, LucideIcon> = {
    text: MessageSquare,
    image: Image,
    document: FileText,
    slides: FileText,
    code: Code,
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Hasil Prompt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dari Prompt Biasa ke <span className="text-indigo-600 dark:text-indigo-400">Hasil yang Memukau</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ini bukan sekadar teks biasa. Prompt yang tepat menghasilkan output yang bisa langsung dipakai untuk bisnis, kreatif, atau pekerjaan Anda.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {examples.map((example) => {
            const Icon = resultTypeIcons[example.resultType];
            
            return (
              <Card
                key={example.id}
                className="group overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900"
              >
                {/* Image Preview */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  
                  {/* Image Preview - Updated Path */}
                  <div className="absolute inset-0">
                    <img
                      src={example.resultPreview}
                      alt={example.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      {example.category}
                    </span>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                      <span className="text-yellow-500 text-xs">★</span>
                      <span className="text-xs font-medium ml-1 text-gray-700 dark:text-gray-300">
                        {example.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {example.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {example.prompt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-400 to-purple-500"
                          ></div>
                        ))}
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                          {example.reviews}+
                        </span>
                      </div>
                      
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Icon className="w-3 h-3 mr-1" />
                        <span>{example.resultType}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        Rp {example.price.toLocaleString("id-ID")}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Siap pakai
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}