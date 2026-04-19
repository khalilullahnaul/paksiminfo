import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PakSimInfo - Official Guide to SIM Verification & Ownership Details in Pakistan (2024-2026)",
    template: "%s | PakSimInfo",
  },
  description:
    "Access the official Pak Sim Info guide. Learn how to check SIM owner details, verify SIMs via PTA/CNIC, and stay safe with the latest data on Pakistan SIMs 2026. Secure & Legal methods only.",
  keywords: [
    "pak sim info",
    "sim owner detail",
    "sim details",
    "check sim owner name",
    "pta sim database",
    "cnic sim information",
    "how to check sim number",
    "pta sim check via cnic",
    "sim ownership verification",
    "sim information system 668",
    "latest data pakistan sims 2026",
    "pakistan telecommunication authority",
    "jazz sim owner detail",
    "telenor sim owner check",
    "zong sim ownership check",
    "ufone sim details",
  ],
  authors: [{ name: "Muhammad Aoun Yousaf Naul" }],
  creator: "Muhammad Aoun Yousaf Naul",
  publisher: "PakSimInfo",
  metadataBase: new URL("https://paksiminfo-gules.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paksiminfo-gules.vercel.app",
    siteName: "PakSimInfo",
    title: "PakSimInfo - Official Guide to SIM Verification & Ownership Details in Pakistan",
    description:
      "Learn how to check SIM owner details, verify SIMs via PTA/CNIC, and stay safe with the latest data on Pakistan SIMs 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PakSimInfo - SIM Verification Guide Pakistan",
    description:
      "Official guide to check SIM owner details, verify SIMs via PTA, and stay safe with latest Pakistan telecom data.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PakSimInfo",
              url: "https://paksiminfo-gules.vercel.app",
              logo: "https://paksiminfo-gules.vercel.app/logo.png",
              description:
                "PakSimInfo is an independent informational platform dedicated to providing guides on telecom safety and SIM verification in Pakistan.",
              author: {
                "@type": "Person",
                name: "Muhammad Aoun Yousaf Naul",
              },
              sameAs: [],
            }),
          }}
        />
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Aoun Yousaf Naul",
              jobTitle: "Telecom Analyst & Tech Strategist",
              description:
                "Muhammad Aoun Yousaf Naul is the founder and author of PakSimInfo, providing comprehensive guides on SIM verification, telecom regulations, and digital safety in Pakistan.",
              knowsAbout: [
                "Pakistan Telecommunications",
                "SIM Verification",
                "PTA Regulations",
                "Cybersecurity",
                "Mobile Networks",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
