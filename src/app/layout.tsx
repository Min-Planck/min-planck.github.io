import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoàng Quang Duy | Portfolio",
  description: "Portfolio of Hoàng Quang Duy - AI/ML Researcher & Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white antialiased`}>
        <Stars />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
