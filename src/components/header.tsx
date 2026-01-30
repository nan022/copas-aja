"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Search, Upload, User } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Kategori", href: "/kategori" },
    { name: "Jelajahi", href: "/jelajahi" },
    { name: "Panduan", href: "/panduan" },
    { name: "Blog", href: "/blog" },
  ];

  const categories = [
    { name: "Marketing", href: "/kategori/marketing" },
    { name: "Bisnis", href: "/kategori/bisnis" },
    { name: "Kreatif", href: "/kategori/kreatif" },
    { name: "Edukasi", href: "/kategori/edukasi" },
    { name: "Teknis", href: "/kategori/teknis" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logos/logocopas.svg" alt="Logo" className="w-10"/>
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-indigo-500 font-bold">Copas Aja</span>
            </Link>
          </div>
        
        <div className="flex md:hidden">
          <ModeToggle />
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-8">
                <ModeToggle />

              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari prompt..."
                  className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <Button variant="outline" className="border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-6">
            {/* Search Bar Mobile */}
            <div className="relative">
              <input
                type="text"
                placeholder="Cari prompt..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Categories Dropdown */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                Kategori Populer
              </p>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
              <Button variant="outline" className="w-full border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}