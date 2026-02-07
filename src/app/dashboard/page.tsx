// app/dashboard/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  Star, 
  Copy, 
  Download, 
  Clock, 
  TrendingUp, 
  Crown, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import GridPattern from "@/components/ui/grid-pattern";
import { ModeToggle } from "@/components/mode-toggle";
import NavbarUser from "@/components/navbar-user";

// Mock data untuk demo
const mockPrompts = [
  {
    id: 1,
    title: "Prompt Kreatif Sinematik",
    category: "Kreatif",
    rating: 4.9,
    usage: "1.2K+",
    saved: "890+",
    preview: "Buat potret sinematik hiper-realistis seorang pria muda Indonesia akhir 20-an...",
    image: "/images/hasil-dummy.svg",
    aiModel: "ChatGPT"
  },
  {
    id: 2,
    title: "Prompt Marketing Copy",
    category: "Bisnis",
    rating: 4.8,
    usage: "980+",
    saved: "750+",
    preview: "Buat copywriting produk skincare dengan tone friendly dan persuasif...",
    image: "/images/hasil-dummy.svg",
    aiModel: "Gemini"
  },
  {
    id: 3,
    title: "Prompt Coding Assistant",
    category: "Teknologi",
    rating: 4.7,
    usage: "1.5K+",
    saved: "1.1K+",
    preview: "Buat fungsi React untuk handling form validation dengan error messages...",
    image: "/images/hasil-dummy.svg",
    aiModel: "Claude"
  },
  {
    id: 4,
    title: "Prompt Kreatif Sinematik",
    category: "Kreatif",
    rating: 4.9,
    usage: "1.2K+",
    saved: "890+",
    preview: "Buat potret sinematik hiper-realistis seorang pria muda Indonesia akhir 20-an...",
    image: "/images/hasil-dummy.svg",
    aiModel: "ChatGPT"
  },
  {
    id: 5,
    title: "Prompt Marketing Copy",
    category: "Bisnis",
    rating: 4.8,
    usage: "980+",
    saved: "750+",
    preview: "Buat copywriting produk skincare dengan tone friendly dan persuasif...",
    image: "/images/hasil-dummy.svg",
    aiModel: "Gemini"
  },
  {
    id: 6,
    title: "Prompt Coding Assistant",
    category: "Teknologi",
    rating: 4.7,
    usage: "1.5K+",
    saved: "1.1K+",
    preview: "Buat fungsi React untuk handling form validation dengan error messages...",
    image: "/images/hasil-dummy.svg",
    aiModel: "Claude"
  }
];

const stats = [
  { label: "Prompt Digunakan", value: "247", icon: Zap, color: "text-emerald-500" },
  { label: "Prompt Disimpan", value: "58", icon: Star, color: "text-amber-500" },
  { label: "Kategori Diakses", value: "12", icon: TrendingUp, color: "text-blue-500" },
  { label: "Sisa Download", value: "42/50", icon: Download, color: "text-purple-500" }
];

export default async function DashboardPage() {

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-violet-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <GridPattern 
          width={32} 
          height={32} 
          x={-0.5} 
          y={-0.5} 
          strokeDasharray={"0"} 
          className="text-indigo-300/50 dark:text-indigo-700/30"
        />
      </div>

      <NavbarUser />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/5 via-transparent to-transparent" />

      <div className="relative">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Halo, Agus! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Selamat datang di dashboard Copas Aja!
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Badge variant="default" className="bg-indigo-600 px-4 py-1.5">
                    <Crown className="mr-1.5 h-5 w-5 text-gray-100" />
                    <span className="text-gray-200">Premium Member</span>
                </Badge>
                <ModeToggle />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </CardTitle>
                        <Icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Tabs Section */}
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-white dark:bg-gray-900">
              <TabsTrigger value="recent" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <Clock className="mr-2 h-4 w-4" />
                Terbaru
              </TabsTrigger>
              <TabsTrigger value="favorites" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <Star className="mr-2 h-4 w-4" />
                Favorit
              </TabsTrigger>
              <TabsTrigger value="categories" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <TrendingUp className="mr-2 h-4 w-4" />
                Kategori
              </TabsTrigger>
            </TabsList>

            {/* Recent Prompts */}
            <TabsContent value="recent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockPrompts.map((prompt) => (
                  <Card key={prompt.id} className="hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <Badge variant="default" className="bg-linear-to-r from-emerald-500 to-teal-600">
                          {prompt.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {prompt.rating}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="relative mb-4 rounded-xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-700">
                        <div className="absolute flex flex-row items-center gap-1 top-2 left-2 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded">
                          Hasil {prompt.aiModel} <Sparkles className="w-3 h-3" />
                        </div>
                        <img 
                          src={prompt.image} 
                          alt={prompt.title} 
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <CardTitle className="text-lg mb-2">{prompt.title}</CardTitle>
                      <CardDescription className="mb-4 line-clamp-2">
                        {prompt.preview}
                      </CardDescription>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Digunakan</div>
                          <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{prompt.usage}</div>
                        </div>
                        <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Disimpan</div>
                          <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{prompt.saved}</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          variant="default" 
                          className="flex-1 bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 cursor-pointer"
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Salin
                        </Button>
                        <Button variant="outline" className="flex-1 cursor-pointer">
                          <Star className="mr-2 h-4 w-4" />
                          Simpan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Favorites - Empty State */}
            <TabsContent value="favorites">
              <Card className="bg-white dark:bg-gray-900">
                <CardContent className="pt-6 text-center">
                  <Star className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Belum ada prompt favorit
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Mulai simpan prompt yang Anda sukai untuk akses cepat nanti
                  </p>
                  <Button asChild>
                    <Link href="/kategori">
                      Jelajahi Prompt
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Categories */}
            <TabsContent value="categories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Kreatif', 'Bisnis', 'Teknologi', 'Pendidikan', 'Marketing', 'Kesehatan'].map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-900">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{category}</CardTitle>
                          <CardDescription className="mt-1">
                            {index * 10 + 15} prompt tersedia
                          </CardDescription>
                        </div>
                        <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}