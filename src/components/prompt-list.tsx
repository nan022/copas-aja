// src/components/prompt-list.tsx
import Link from "next/link";
import { promptsData } from "@/lib/data";

interface PromptListProps {
  categorySlug: string;
}

export default function PromptList({ categorySlug }: PromptListProps) {
  // Filter data berdasarkan kategori
  const filteredPrompts = promptsData.filter(
    (p) => p.category.toLowerCase() === categorySlug.toLowerCase()
  );

  if (filteredPrompts.length === 0) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <Link 
                href={`/kategori`} 
                className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-8 group transition-colors"
            >
                <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Kategori
            </Link>
            <div className="p-10 text-center text-gray-500">
                <p>Belum ada prompt di kategori: <span className="font-bold">{categorySlug}</span></p>
            </div>
        </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
        <Link 
            href={`/kategori`} 
            className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-8 group transition-colors"
        >
            <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Kategori
        </Link>

        <h2 className="text-xl font-bold mb-8 capitalize text-gray-800 dark:text-white">
            Kategori: {categorySlug}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((item) => (
            <Link 
                key={item.id} 
                href={`/kategori/${categorySlug}/${item.slug}`}
                className="group block"
            >
                <div className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500">
                <div className="relative mb-4">
                    <img 
                        src={item.cover} 
                        alt={item.title} 
                        className="w-full h-60 object-cover rounded-lg" 
                    />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                    {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {item.description}
                </p>
                <div className="mt-2">
                    <div className="flex flex-wrap gap-2">
                    {item.rekomAI.map((ai, index) => (
                        <span key={index} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                        {ai}
                        </span>
                    ))}
                    </div>
                </div>
                <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center">
                    Lihat Detail 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
                </div>
            </Link>
            ))}
        </div>
    </div>
  );
}