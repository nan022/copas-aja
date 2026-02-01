import Header from '@/components/header';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, CheckCircle, Crown, Star, Zap, TrendingUp, 
  Users, Shield, ArrowRight, ChevronRight 
} from "lucide-react";
import Link from 'next/link';
import Footer from '@/components/footer';
import Pricing from '@/components/pricing';

export default function PricingPage() {
  const plans = [
    {
      id: 1,
      name: "Free = Miskuy",
      price: 0,
      period: "Izin 🫷🏻",
      icon: Star,
      color: "from-gray-400 to-gray-500",
      features: [
        { name: "Akses 10 prompt gratis", available: true },
        { name: "Kategori dasar", available: true },
        { name: "Update mingguan", available: true },
        { name: "Komunitas (Discord)", available: false },
        { name: "Prompt premium", available: false },
        { name: "Kategori eksklusif", available: false },
        { name: "Prioritas support", available: false },
        { name: "Download unlimited", available: false },
        { name: "Early access fitur baru", available: false },
      ],
      cta: "Mulai Gratis",
      ctaVariant: "outline",
      recommended: false,
    },
    {
      id: 2,
      name: "Pro",
      price: 12000,
      period: "Bulanan",
      icon: Zap,
      color: "from-indigo-500 to-purple-600",
      features: [
        { name: "Akses semua prompt", available: true },
        { name: "Semua kategori", available: true },
        { name: "Update harian", available: true },
        { name: "Komunitas eksklusif (Discord)", available: true },
        { name: "Request prompt custom", available: true },
        { name: "Download unlimited", available: true },
        { name: "Prioritas support", available: true },
        { name: "Early access fitur baru", available: true },
      ],
      cta: "Berlangganan Pro",
      ctaVariant: "default",
      recommended: true,
      badge: "POPULER",
    },
    {
      id: 3,
      name: "Premium",
      price: 99000,
      period: "Tahunan",
      icon: Crown,
      color: "from-amber-500 to-orange-600",
      features: [
        { name: "Akses semua prompt", available: true },
        { name: "Semua kategori + eksklusif", available: true },
        { name: "Update real-time", available: true },
        { name: "Komunitas VIP (Discord)", available: true },
        { name: "Request prompt custom prioritas", available: true },
        { name: "Download unlimited", available: true },
        { name: "Support 24/7", available: true },
        { name: "Early access + beta features", available: true },
      ],
      cta: "Berlangganan Premium",
      ctaVariant: "default",
      recommended: false,
      badge: "TERBAIK",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
        {/* Hero Section */}

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Pertanyaan <span className="text-indigo-600 dark:text-indigo-400">Umum</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Temukan jawaban untuk pertanyaan yang sering ditanyakan
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Apakah ada masa trial untuk paket Pro atau Premium?",
                  answer: "Tidak, langganan cuma 9 ribu doang masa ga bisa sih."
                },
                {
                  question: "Bagaimana cara pembayaran?",
                  answer: "Kami menerima pembayaran melalui Qris, transfer bank, e-wallet (GoPay, OVO, DANA), dan kartu kredit/debit. Proses pembayaran aman dan instan."
                },
                {
                  question: "Bagaimana cara cancel langganan?",
                  answer: "Kamu bisa cancel kapan aja di dashboard akun. Langganan akan tetap aktif sampai akhir periode pembayaran."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}