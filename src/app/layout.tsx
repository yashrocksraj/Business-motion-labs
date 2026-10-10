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
  title: "Business Motion Labs | Websites, Online Booking & Follow-up for Local Businesses",
  description:
    "We help gyms, studios, salons, restaurants and home-service businesses turn website visitors into bookings, orders and calls: fast websites, online booking and automatic follow-up.",
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
    title: "Business Motion Labs | Websites, Online Booking & Follow-up for Local Businesses",
    description:
      "More customers from the people who already find you online: websites, online booking and automatic follow-up for local businesses.",
    type: "website",
    siteName: "Business Motion Labs",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Motion Labs | Websites, Online Booking & Follow-up for Local Businesses",
    description:
      "More customers from the people who already find you online: websites, online booking and automatic follow-up for local businesses.",
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