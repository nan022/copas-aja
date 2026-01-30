import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import PromptShowcase from "@/components/prompt-showcase";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <PromptShowcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}