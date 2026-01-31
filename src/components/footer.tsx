import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Github, Twitter, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Kategori", href: "/kategori" },
    { name: "Jelajahi", href: "/jelajahi" },
    { name: "Panduan", href: "/panduan" },
    { name: "Blog", href: "/blog" },
    { name: "Tentang Kami", href: "/tentang" },
  ];

  const categories = [
    { name: "Marketing", href: "/kategori/marketing" },
    { name: "Bisnis", href: "/kategori/bisnis" },
    { name: "Kreatif", href: "/kategori/kreatif" },
    { name: "Edukasi", href: "/kategori/edukasi" },
    { name: "Teknis", href: "/kategori/teknis" },
    { name: "Semua Kategori", href: "/kategori" },
  ];

  const legalLinks = [
    { name: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    { name: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    { name: "Kebijakan Cookie", href: "/kebijakan-cookie" },
    { name: "FAQ", href: "/faq" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@copasaja.com", href: "mailto:info@copasaja.com" },
    { icon: Phone, text: "+62 812-1111-1111", href: "/" },
    { icon: MapPin, text: "Jakarta, Indonesia", href: "/" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/copasaja", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/copasaja", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/copasaja", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/copasaja", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/copasaja", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
                <img src="/images/logos/logocopas.svg" alt="Logo" className="w-10" />
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    <span className="text-indigo-600 dark:text-indigo-400">Copas Aja</span>
                </Link>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Platform prompt AI berkualitas buat kalian yang butuh untuk programming, bisnis, kreatif, dan edukasi!
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Kategori</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Kontak</h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                    >
                      {item.text}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} copasaja.com. All rights reserved.
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Made with</span>
                <span className="text-red-500">❤️</span>
                <span>in Indonesia</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  href="/karir"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                >
                  Karir
                </Link>
                <Link
                  href="/press"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                >
                  Press
                </Link>
                <Link
                  href="/partnership"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors"
                >
                  Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}