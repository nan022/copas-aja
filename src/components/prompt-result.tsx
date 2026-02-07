'use client';

import { useState } from 'react';
import { Check, Copy, Sparkles, Image as ImageIcon, FileText } from 'lucide-react';

interface PromptResultProps {
  content: string;
  type?: 'text' | 'image'; // Opsional: default ke 'text'
  title?: string;
}

export default function PromptResult({ 
  content, 
  type = 'text', 
  title = "Hasil Generate" 
}: PromptResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Gagal menyalin:', error);
    }
  };

  // Cek sederhana jika type tidak diset tapi kontennya URL gambar
  const isImage = type === 'image' || (content.startsWith('http') && (content.match(/\.(jpeg|jpg|gif|png)$/) != null));

  return (
    <div className="group relative bg-white dark:bg-gray-800 border border-green-200 dark:border-green-900/50 rounded-xl shadow-sm overflow-hidden mt-6">
      
      {/* Header Result */}
      <div className="flex items-center justify-between px-5 py-3 bg-green-50/50 dark:bg-green-900/10 border-b border-green-100 dark:border-green-900/30">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-green-100 dark:bg-green-500/20 rounded-lg">
            <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <span className="font-semibold text-gray-800 dark:text-gray-100 text-md tracking-wide">
            {title}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 relative">
        {isImage ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            {/* Placeholder Image Icon jika gambar loading/broken */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                <ImageIcon className="w-10 h-10" />
            </div>
            <img 
              src={content} 
              alt="AI Result" 
              className="relative z-10 w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none">
             {/* Menggunakan whitespace-pre-wrap agar format paragraf terjaga */}
            <div className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
              {content}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Decoration (Optional) */}
      <div className="h-1 w-full bg-linear-to-r from-green-400 to-teal-500 opacity-20 dark:opacity-40"></div>
    </div>
  );
}