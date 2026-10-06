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

export const metadata: Metadata = {
  title: "Business Motion Labs | Digital Systems That Move Businesses Forward",
  description:
    "Business Motion Labs helps businesses grow through digital experiences, technology, automation, e-commerce, online ordering, SEO, and custom digital systems.",
  keywords: [
    "Business Motion Labs",
    "digital technology company",
    "digital systems",
    "web development",
    "e-commerce",
    "online ordering",
    "business automation",
    "SEO",
    "custom software",
    "digital growth",
  ],
  authors: [{ name: "Business Motion Labs" }],
  creator: "Business Motion Labs",
  publisher: "Business Motion Labs",

  openGraph: {
    title: "Business Motion Labs | Digital Systems That Move Businesses Forward",
    description:
      "We build digital systems, experiences, and technology that help businesses move forward.",
    type: "website",
    siteName: "Business Motion Labs",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Motion Labs | Digital Systems That Move Businesses Forward",
    description:
      "We build digital systems, experiences, and technology that help businesses move forward.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}