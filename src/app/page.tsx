import Header from "@/components/header";
import Hero from "@/components/hero";
import PromptExamples from "@/components/prompt-example";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <PromptExamples />
      </main>
    </div>
  );
}