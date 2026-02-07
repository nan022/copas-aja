import Link from "next/link";
import PromptCard from "@/components/prompt-card"; // Import komponen tadi
import PromptResult from "./prompt-result";

interface PromptDetailProps {
  data: {
    title: string;
    description: string;
    content: string;
    category: string;
  };
}

export default function PromptDetail({ data }: PromptDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
        {/* 1. Navigasi Back */}
        <Link 
            href={`/kategori/${data.category}`} 
            className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-8 group transition-colors"
        >
            <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke {data.category}
        </Link>

        {/* 2. Informasi Header Halaman */}
        <div className="mb-10 text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-500 uppercase bg-indigo-50 rounded-full dark:bg-indigo-900/20 dark:text-indigo-300">
            {data.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            {data.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            {data.description}
            </p>
        </div>

        {/* Render Component PromptCard */}
        <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
            {/* 1. BAGIAN PROMPT (INPUT) */}
            <section>
                <PromptCard 
                title={data.title}
                name={data.category}
                content={data.content}
                iconType="prompt"
                />
            </section>

            {/* 2. BAGIAN RESULT (OUTPUT) - Hanya muncul jika ada data hasil */}
            <section>
                <PromptResult 
                title="Output"
                content="Tentu, berikut adalah draft email penawaran jasa SEO yang Anda minta..."
                type="text"
                />
            </section>
        </div>
    </div>
  );
}