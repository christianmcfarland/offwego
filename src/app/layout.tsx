import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Off We Go — Redfishing Charters",
  description: "Relaxed redfishing charters out of Wrightsville Beach, NC.",
  openGraph: {
    title: "Off We Go",
    description: "Relaxed redfishing charters out of Wrightsville Beach, NC.",
    url: "https://offwegocharters.com",
    siteName: "Off We Go",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Off We Go Charters logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off We Go",
    description: "Relaxed redfishing charters out of Wrightsville Beach, NC.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} min-h-screen bg-background text-foreground antialiased`}>
        <NavBar />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
