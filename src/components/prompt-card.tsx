'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface PromptCardProps {
  title: string;
  content: string;
  iconType: 'prompt' | 'result';
  onCopy?: () => void;
}

export default function PromptCard({ 
  title, 
  content, 
  iconType,
  onCopy 
}: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      onCopy?.();
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                  rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          {iconType === 'prompt' ? (
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30
                          flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30
                          flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
          <h2 className="font-bold text-lg text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        <button 
          onClick={handleCopy}
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 
                   dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors
                   px-3 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-green-600 dark:text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className={`p-5 rounded-lg ${iconType === 'prompt' ? 'bg-gray-50 dark:bg-gray-900/50 font-sans' : 'bg-blue-50 dark:bg-blue-900/20 font-mono text-sm'}`}>
        <p className="whitespace-pre-line text-gray-800 dark:text-gray-200">
          {content}
        </p>
      </div>
    </div>
  );
}