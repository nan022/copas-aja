import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
// Hapus SpeedInsights jika belum install

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Copas Aja - Platform Prompt AI Berkualitas",
    template: "%s | Copas Aja",
  },
  description: "Copas Aja adalah platform jual-beli prompt AI berkualitas dari praktisi. Dapatkan hasil maksimal dengan prompt premium untuk programming, pembuatan website, pembuatan foto, bisnis, kreatif, edukasi, dan teknis.",
  keywords: [
    "prompt AI",
    "AI prompt",
    "prompt marketplace",
    "jual prompt AI",
    "prompt premium",
    "AI Indonesia",
    "chatGPT prompt",
    "Midjourney prompt",
    "AI untuk bisnis",
    "prompt marketing",
    "prompt kreatif",
    "AI automation",
    "Copas Aja",
    "platform prompt",
  ],
  authors: [{ name: "Copas Aja", url: "https://copasaja.com" }],
  creator: "Copas Aja",
  publisher: "Copas Aja",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://copasaja.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://copasaja.com",
    title: "Copas Aja - Platform Prompt AI Berkualitas",
    description: "Copas Aja adalah platform prompt AI berkualitas dari praktisi. Dapatkan hasil maksimal dengan prompt premium untuk programming, pembuatan website, pembuatan foto, bisnis, kreatif, edukasi, dan teknis.",
    siteName: "Copas Aja",
    images: [
      {
        url: "/images/logos/logocopas.svg",
        width: 1200,
        height: 630,
        alt: "Copas Aja - Platform Prompt AI Berkualitas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Copas Aja - Platform Prompt AI Berkualitas",
    description: "Platform jual-beli prompt AI berkualitas dari praktisi. Dapatkan hasil maksimal dengan prompt premium untuk bisnis, kreatif, edukasi, dan teknis.",
    creator: "@copasaja",
    site: "@copasaja",
    images: ["./images/logos/logocopas.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logos/logocopas.svg", sizes: "32x32", type: "image/png" },
      { url: "/images/logos/logocopas.svg", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/images/logos/logocopas.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Favicon - WAJIB untuk override Next.js default */}
        <link rel="icon" href="/images/logos/logocopas.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://copasaja.com" />

        {/* Theme color */}
        <meta name="theme-color" content="#4f46e5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e1b4b" media="(prefers-color-scheme: dark)" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Copas Aja",
              url: "https://copasaja.com",
              description: "Platform jual-beli prompt AI berkualitas dari praktisi",
              publisher: {
                "@type": "Organization",
                name: "Copas Aja",
                logo: {
                  "@type": "ImageObject",
                  url: "https://copasaja.com./images/logos/logocopas.svg",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://copasaja.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-white dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        {/* <SpeedInsights /> - Uncomment setelah install package */}
      </body>
    </html>
  );
}