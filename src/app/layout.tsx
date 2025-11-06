import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Off We Go Charters — Wrightsville Beach & Cape Fear",
  description: "Private fishing, island hops, and sunset cruises. USCG-licensed captain.",
  openGraph: {
    title: "Off We Go Charters",
    description: "Private fishing, island hops, and sunset cruises.",
    url: "https://offwegocharters.com",
    siteName: "Off We Go Charters",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Off We Go on the water" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off We Go Charters",
    description: "Private fishing, island hops, and sunset cruises.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <NavBar />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
