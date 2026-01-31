import Link from 'next/link';
import { getAllCategories, GRADIENT_COLORS } from '@/lib/categories';
import { 
  MessageSquare, BarChart, Image, GraduationCap, 
  Code, Brush, Briefcase, BookOpen, Laptop, Sparkles, 
  Crown
} from 'lucide-react';
import Header from '@/components/header';

// Mapping icon component
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

export default function KategoriPage() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
    <Header />
      {/* Hero Section */}
      <section className="py-16 bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Hasil Prompt
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Semua Kategori <span className='text-indigo-600 dark:text-indigo-400'>Prompt</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Temukan <span className='text-indigo-500 font-semibold'>1000+</span> prompt siap pakai untuk berbagai kebutuhan Anda. 
                    Tinggal copas, langsung pakai!
                </p>
            </div>
          </div>
        </section>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = IconMap[category.icon];
            const gradientClass = GRADIENT_COLORS[category.icon];
            
            return (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="group block border border-gray-200 dark:border-gray-800 rounded-xl p-6 
                          hover:border-indigo-200 dark:hover:border-indigo-800 
                          hover:shadow-lg transition-all duration-300
                          bg-white dark:bg-gray-800/50"
              >
                <div className="flex items-start gap-4">
                  {/* Icon dengan gradient */}
                  <div className={`w-12 h-12 rounded-xl ${gradientClass} 
                                 flex items-center justify-center shrink-0
                                 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-900 dark:text-white 
                                  group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                                  transition-colors mb-1">
                      {category.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {category.description}
                    </div>
                    <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400
                                  flex items-center gap-1">
                      Lihat prompt →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
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
      </div>
    </div>
  );
}