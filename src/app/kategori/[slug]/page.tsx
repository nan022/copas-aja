import { getCategoryBySlug, GRADIENT_COLORS } from '@/lib/categories';
import Link from 'next/link';
import { 
  MessageSquare, BarChart, Image, GraduationCap, 
  Code, Brush, Briefcase, BookOpen, Laptop, Sparkles, 
  Crown
} from 'lucide-react';
import PromptCard from '@/components/prompt-card';
import Header from '@/components/header';

const IconMap = {
  messageSquare: MessageSquare,
  barChart: BarChart,
  image: Image,
  graduationCap: GraduationCap,
  code: Code,
  brush: Brush,
  briefcase: Briefcase,
  bookOpen: BookOpen,
  laptop: Laptop,
  sparkles: Sparkles
};

export default async function CategoryDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="text-center max-w-md mx-auto py-16">
          <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 
                        flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Kategori tidak ditemukan
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Maaf, kategori yang Anda cari tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  const IconComponent = IconMap[category.icon];
  const gradientClass = GRADIENT_COLORS[category.icon];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
    <Header />
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <Link 
          href="/kategori" 
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 
                   hover:text-indigo-700 dark:hover:text-indigo-300 mb-6 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke semua kategori
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-xl ${gradientClass} 
                         flex items-center justify-center`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {category.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-8">
          {/* Isi Prompt */}
          <PromptCard 
            title="Isi Prompt" 
            content={category.promptContent} 
            iconType="prompt" 
          />

          {/* Hasil Prompt */}
          <PromptCard 
            title="Hasil Prompt" 
            content={category.promptResult} 
            iconType="result" 
          />

          {/* CTA Section */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-indigo-50 dark:bg-indigo-900/20 
                          border border-indigo-200 dark:border-indigo-800
                          rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600 to-violet-700
                              flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-indigo-700 dark:text-indigo-400">
                  Butuh lebih banyak prompt?
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ada 1000+ prompt spesifik sesuai kebutuhan kamu!
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
        </div>
      </div>
    </div>
  );
}