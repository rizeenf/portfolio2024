import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimationWrapper from "@/components/AnimationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizki Nurp - Portfolio",
  description: "Portfolio Rizki Nur Padilah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationWrapper>{children}</AnimationWrapper>
      </body>
    </html>
  );
}
