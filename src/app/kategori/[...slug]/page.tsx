import Header from "@/components/header";
import PromptList from "@/components/prompt-list";
import PromptDetail from "@/components/prompt-detail"; // Import komponen baru
import { promptsData } from "@/lib/data"; // Import data dummy
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const categorySlug = slug[0];

  // LOGIC HALAMAN DETAIL PROMPT (slug panjangnya 2: /category/bisnis/judul-prompt)
  if (slug?.length === 2) {
    const promptSlug = slug[1];
    
    // Cari data prompt spesifik berdasarkan slug dan kategori
    const promptData = promptsData.find(
      (p) => p.slug === promptSlug && p.category === categorySlug
    );

    // Jika prompt tidak ditemukan, lempar ke 404
    if (!promptData) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <PromptDetail data={promptData} />
      </div>
    );
  } 
  
  // LOGIC HALAMAN LIST KATEGORI (slug panjangnya 1: /category/bisnis)
  else if (slug?.length === 1) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <PromptList categorySlug={categorySlug} />
      </div>
    );
  }

  return notFound();
}