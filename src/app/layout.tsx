import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Blackfin Construction & Painting | Tampa Bay",
    template: "%s | Blackfin Construction & Painting",
  },
  description:
    "Tampa Bay finest painting and remodeling contractor. Residential, commercial, construction, and painting services across the entire Tampa Bay region.",
  keywords: [
    "painting contractor Tampa Bay",
    "residential painting",
    "commercial painting",
    "remodeling Tampa",
    "construction Tampa Bay",
    "Blackfin Construction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
