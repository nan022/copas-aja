// app/checkout/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Smartphone, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Crown,
  Lock,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("SP");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const plan = {
    name: "Pro",
    price: 49000,
    period: "Bulanan",
    features: [
      "1000+ prompt premium", 
      "Semua kategori", 
      "Update harian",
      "Gabung grup member",
      "Prioritas support",
      "Bisa request prompt",
      "Early access fitur baru",
      "Download unlimited"
    ]
  };

  const paymentMethods = [
    { id: "SP", name: "ShopeePay", icon: Smartphone, color: "from-orange-400 to-orange-600" },
    { id: "OVO", name: "OVO", icon: Smartphone, color: "from-purple-500 to-purple-700" },
    { id: "DANA", name: "DANA", icon: Smartphone, color: "from-blue-400 to-blue-600" },
    { id: "VA", name: "Transfer Bank", icon: Smartphone, color: "from-green-400 to-green-600" },
    { id: "CC", name: "Kartu Kredit", icon: Smartphone, color: "from-indigo-500 to-indigo-700" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    if (!termsAccepted) {
      setError("Anda harus menyetujui syarat dan ketentuan");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Semua field wajib diisi");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const merchantOrderId = `COPAS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      
      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          planName: plan.name,
          amount: plan.price,
          paymentMethod: paymentMethod,
          merchantOrderId: merchantOrderId
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal membuat pembayaran');
      }

      const { paymentUrl } = await response.json();
      window.location.href = paymentUrl;

    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan saat memproses pembayaran");
      console.error('Payment error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Header />  

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 sm:py-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Plan Summary - Compact & Visual */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
            {/* Plan Header */}
            <div className="p-5 bg-linear-to-r from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-gray-900 dark:text-white">Copas Aja Pro</h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Akses semua prompt premium</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Rp 49.000</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">/bulan</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-5 space-y-3">
              <div className="grid grid-cols-1 gap-2">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 bg-gray-50 dark:bg-gray-800/50 p-2.5 rounded-lg">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-green-800 dark:text-green-300">Garansi 30 Hari</p>
                    <p className="text-xs text-green-700 dark:text-green-400">Uang kembali jika akun tidak masuk</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Payment Form - Streamlined */}
          <div className="space-y-5">
            {/* Payment Info Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                <h2 className="font-bold text-lg text-gray-900 dark:text-white flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                  Informasi Pembayaran
                </h2>
              </div>
              
              {error && (
                <div className="mx-5 mt-4 mb-3 p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg flex items-center space-x-2 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="p-5 pt-3 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3.5 py-2.5"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Aktif</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="contoh@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3.5 py-2.5"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nomor WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-sm px-3.5 py-2.5"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                <h2 className="font-bold text-lg text-gray-900 dark:text-white">Pilih Metode Pembayaran</h2>
              </div>
              
              <div className="p-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`group relative flex flex-col items-center justify-center p-3.5 rounded-xl border-2 transition-all duration-200 ${
                      paymentMethod === method.id
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                        : "border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-gray-800"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${method.color} flex items-center justify-center mb-2 transform transition-transform group-hover:scale-105`}>
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-xs font-medium ${
                      paymentMethod === method.id
                        ? "text-indigo-700 dark:text-indigo-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}>
                      {method.name}
                    </span>
                    {paymentMethod === method.id && (
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms & CTA */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-5">
              <div className="flex items-start space-x-3 mb-5">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  className="mt-1 h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <div>
                  <Label htmlFor="terms" className="font-medium text-gray-900 dark:text-white text-sm">
                    Saya menyetujui Syarat & Ketentuan
                  </Label>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Dengan melanjutkan, Anda setuju dengan{" "}
                    <Link href="/syarat-ketentuan" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline">
                      Syarat & Ketentuan
                    </Link>{" "}
                    dan{" "}
                    <Link href="/kebijakan-privasi" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 underline">
                      Kebijakan Privasi
                    </Link>
                  </p>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                disabled={isLoading || !termsAccepted}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-30 relative overflow-hidden group"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Mengarahkan ke Pembayaran...
                  </span>
                ) : (
                  <>
                    <span className="flex items-center justify-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Bayar Sekarang
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-700 to-violet-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </>
                )}
              </Button>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                <Lock className="w-3.5 h-3.5 text-green-500" />
                <span>Transaksi aman dengan enkripsi SSL • Secure Payment Gateway</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}