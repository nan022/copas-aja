import Header from '@/components/header';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, CheckCircle, Crown, Star, Zap, TrendingUp, 
  Users, Shield, ArrowRight, ChevronRight 
} from "lucide-react";
import Link from 'next/link';
import Footer from '@/components/footer';

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
        <section className="py-16 bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Harga Terjangkau, Hasil Luar Biasa
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Akses <span className="text-indigo-600 dark:text-indigo-400">Semua Prompt Premium</span> dengan Satu Langganan
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Hemat waktu dan dapatkan hasil maksimal dengan akses unlimited ke ribuan prompt AI berkualitas tinggi. Pilih paket yang sesuai kebutuhan kamu.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-10 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-white dark:bg-gray-800 p-1 border border-gray-200 dark:border-gray-700">
                <button
                  className="px-6 py-2.5 text-sm font-medium rounded-md transition-all duration-300 bg-indigo-600 text-white shadow-sm"
                >
                  Bulanan
                </button>
                <button
                  className="px-6 py-2.5 text-sm font-medium rounded-md transition-all duration-300 text-gray-700 dark:text-gray-300"
                >
                  Tahunan <span className="ml-1 text-xs text-green-600">(-30%)</span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card
                    key={plan.id}
                    className={`group relative overflow-hidden border-2 ${
                      plan.recommended
                        ? "border-indigo-500 dark:border-indigo-400 scale-105 shadow-2xl"
                        : "border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700"
                    } bg-white dark:bg-gray-900 transition-all duration-300`}
                  >
                    {/* Recommended Badge */}
                    {plan.recommended && (
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        REKOMENDASI
                      </div>
                    )}

                    {/* Background linear */}
                    <div className={`absolute inset-0 opacity-10 bg-linear-to-br ${plan.color}`}></div>

                    <div className="relative p-8">
                      {/* Plan Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${plan.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{plan.period}</p>
                          </div>
                        </div>
                        
                        {plan.badge && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="mb-8">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-gray-900 dark:text-white">
                            {plan.price === 0 ? "Gratis" : `Rp ${plan.price.toLocaleString("id-ID")}`}
                          </span>
                          {plan.price > 0 && plan.period != "Tahunan" && (
                            <span className="ml-2 text-gray-500 dark:text-gray-400">/bulan</span>
                          )}
                          {plan.period == "Tahunan" && (
                            <span className="ml-2 text-gray-500 dark:text-gray-400">/tahun</span>
                          )}
                        </div>
                        {plan.price > 0 && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Hemat 30% dengan paket tahunan
                          </p>
                        )}
                      </div>

                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            {feature.available ? (
                              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0 mt-0.5"></div>
                            )}
                            <span className={`text-sm ${
                              feature.available
                                ? "text-gray-700 dark:text-gray-300"
                                : "text-gray-400 dark:text-gray-500 line-through"
                            }`}>
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        variant={plan.ctaVariant as any}
                        className={`w-full ${
                          plan.recommended
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg"
                            : plan.ctaVariant === "outline"
                            ? "border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                            : "bg-indigo-600 hover:bg-indigo-700 text-white"
                        } py-3 rounded-lg font-semibold text-lg transition-all duration-300`}
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Perbandingan <span className="text-indigo-600 dark:text-indigo-400">Lengkap</span> Setiap Paket
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Lihat perbedaan detail setiap paket untuk memilih yang paling sesuai dengan kebutuhan kamu
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Fitur
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Free
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Pro
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Jumlah Prompt
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      10
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      100+
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-950">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Kategori
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      Dasar
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Semua
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Semua + Eksklusif
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Update
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      Mingguan
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Harian
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Real-time
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-950">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Komunitas
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      Dasar
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Eksklusif
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      VIP
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Support
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      Email
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Prioritas
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      24/7
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-950">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Download
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      Terbatas
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Unlimited
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Request Custom
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      ✗
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      ✓
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      ✓ Prioritas
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-950">
                    <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <Crown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        Fitur Eksklusif
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      ✗
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300">
                      Early Access
                    </td>
                    <td className="px-6 py-5 text-center text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Beta + Konsultasi
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

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