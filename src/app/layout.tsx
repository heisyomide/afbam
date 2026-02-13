import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Add this line to fix the warning
  metadataBase: new URL("https://afbam.vercel.app"), 
  
  title: "AFBAM Plumbing & Integrated Services | 24/7 Smart Plumbing Solutions",
  description: "Expert plumbing, leak detection, and smart home water integration. AFBAM provides reliable residential and commercial services you can trust.",
  keywords: ["Plumbing", "Smart Leak Detection", "Emergency Plumber", "Integrated Water Systems"],
  openGraph: {
    title: "AFBAM Plumbing & Integrated Services",
    description: "Reliable Plumbing & Smart Integration",
    url: "https://afbam.com", // You can update this once you have your custom domain
    siteName: "AFBAM",
    images: [
      {
        url: "/logo.PNG", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
// app/layout.tsx
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20"> {/* pt-20 accounts for the fixed navbar height */}
          {children}
        </main>
      </body>
    </html>
  );
}