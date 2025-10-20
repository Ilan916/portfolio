import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Front-End Developer",
    template: "%s | Portfolio",
  },
  description:
    "Portfolio moderne d'un développeur Front-End: projets, compétences, contact.",
  metadataBase: new URL("https://example.com"),
  keywords: [
    "Développeur Front-End",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ilan" }],
  creator: "Ilan",
  openGraph: {
    title: "Portfolio | Front-End Developer",
    description:
      "Portfolio moderne d'un développeur Front-End: projets, compétences, contact.",
    type: "website",
    url: "https://example.com",
    siteName: "Ilan Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ilan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Front-End Developer",
    description:
      "Portfolio moderne d'un développeur Front-End: projets, compétences, contact.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
