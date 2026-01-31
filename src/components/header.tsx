"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Search, Upload, User, MessageSquare, Code, BarChart, GraduationCap, Image } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            <img src="/images/logos/logocopas.svg" alt="Logo" className="w-10" />
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-indigo-600 font-bold">Copas Aja</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Beranda
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 data-[state=open]:text-indigo-600 dark:data-[state=open]:text-indigo-400 bg-transparent">
                    Kategori
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-125 p-4 border-gray-200 dark:border-gray-800 dark:bg-gray-900 shadow-xl rounded-xl z-9999 mt-2">
                    <div className="grid grid-cols-2 gap-2">
                      {/* Kolom 1 */}
                      <div className="space-y-1">
                        <NavigationMenuLink
                          href="/kategori/marketing"
                          className="flex items-left gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              Marketing
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Iklan, copywriting, social media
                            </div>
                          </div>
                        </NavigationMenuLink>

                        <NavigationMenuLink
                          href="/kategori/bisnis"
                          className="flex items-left gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                            <BarChart className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              Bisnis
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Analisis, laporan, strategi
                            </div>
                          </div>
                        </NavigationMenuLink>

                        <NavigationMenuLink
                          href="/kategori/kreatif"
                          className="flex items-left gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                            <Image className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              Kreatif
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Desain, konten, ide kreatif
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </div>

                      {/* Kolom 2 */}
                      <div className="space-y-1">
                        <NavigationMenuLink
                          href="/kategori/edukasi"
                          className="flex items-left gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              Edukasi
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Materi, tugas, skripsi
                            </div>
                          </div>
                        </NavigationMenuLink>

                        <NavigationMenuLink
                          href="/kategori/teknis"
                          className="flex items-left gap-2 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-zinc-500 to-slate-600 flex items-center justify-center flex-shrink-0">
                            <Code className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              Teknis
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Coding, web dev, UI & UX
                            </div>
                          </div>
                        </NavigationMenuLink>

                        <NavigationMenuLink
                          href="/jelajahi"
                          className="flex items-left gap-2 px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-600 to-violet-700 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-indigo-700 dark:text-indigo-400">
                              Lihat Semua Kategori
                            </div>
                            <div className="text-xs text-indigo-600 dark:text-indigo-500">
                              1000+ prompt siap pakai
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#pricing"
                    className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Harga
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/panduan"
                    className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Panduan
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/blog"
                    className="px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4 ml-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari prompt..."
                  className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <ModeToggle />
            
            <Link href={"/login"}>
              <Button variant="outline" className="border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            </div>
          </nav>

          {/* Mobile Menu - ModeToggle & Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4">
          <div className="px-4 space-y-1">
            {/* Navigation Links */}
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

          {/* Divider */}
          <div className="px-4 py-3">
            <div className="h-px bg-gray-200 dark:bg-gray-800"></div>
          </div>

          {/* Categories Section */}
          <div className="px-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Kategori Populer
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
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

            {/* Search Bar Mobile */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Cari prompt..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
                <Link href={"/login"}>
                    <Button variant="outline" className="w-full border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                        <User className="w-4 h-4 " />
                        Login
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}