import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

// SEO Metadata Configuration
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
    languages: {
      "id-ID": "/id-ID",
    },
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
    images: ["/images/logos/logocopas.svg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Copas Aja",
  },
  applicationName: "Copas Aja",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        <link rel="icon" href="/logos/logocopas.svg" sizes="any" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://copasaja.com" />

        {/* Theme color for browsers */}
        <meta name="theme-color" content="#4f46e5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e1b4b" media="(prefers-color-scheme: dark)" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Additional SEO tags */}
        <meta name="author" content="Copas Aja" />
        <meta name="language" content="Indonesian" />
        <meta name="country" content="Indonesia" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="classification" content="Technology, AI, Software" />

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
                  url: "https://copasaja.com/images/logos/logocopas.svg",
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
        <SpeedInsights />
      </body>
    </html>
  );
}