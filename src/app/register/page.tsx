"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Sparkles, Mail, Lock, User as UserIcon, Eye, EyeOff, Github, Chrome } from "lucide-react";
import GridPattern from "@/components/ui/grid-pattern";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Register dengan:", formData);
    setIsLoading(false);
  };

  return (
    <div className="h-screen bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900 md:overflow-hidden relative flex items-center justify-center p-4">
      {/* Grid Pattern Background - Full Screen */}
        <div className="absolute inset-0 opacity-40">
            <GridPattern 
                width={32} 
                height={32} 
                x={-1} 
                y={-1} 
                strokeDasharray={"0"} 
                className="text-indigo-300/50 dark:text-indigo-700/30 w-full"
            />
        </div>

        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 via-transparent to-transparent" />

      {/* Content - Wider Card */}
      <div className="relative z-20 w-full max-w-2xl">
        <Card className="border border-gray-200 dark:border-gray-800 dark:bg-gray-900 shadow-2xl">
          <div className="px-8 py-2">
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <img src="/images/logos/logocopas.svg" alt="Logo" className="w-10" />
                <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                <span className="text-indigo-600 font-bold">Copas Aja</span>
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Buat akun dan mulai gunakan prompt AI berkualitas
              </p>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                    Nama Lengkap
                  </Label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimal 8 karakter"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-12 py-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Password minimal 8 karakter, kombinasi huruf dan angka
                </p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                  Konfirmasi Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Ulangi password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 pr-12 py-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Saya setuju dengan {" "}
                    <Link href={"syarat-ketentuan"}>
                        <span className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 hover:underline">
                        Syarat & Ketentuan
                        </span>
                    </Link>
                </span>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                    Memproses...
                  </span>
                ) : (
                  "Daftar"
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  atau daftar dengan
                </span>
              </div>
            </div>

            {/* Social Register */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                    type="button"
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    <Chrome className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                    Register with Google
                </Button>

                <Button
                    type="button"
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    <Github className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                    Register with GitHub
                </Button>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sudah punya akun?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  Masuk sekarang
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}