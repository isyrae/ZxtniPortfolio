/**
 * ZxtniPortfolio - Root Layout
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 * 
 * Main application layout with global styles and metadata
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

/**
 * End of ZxtniPortfolio - Root Layout
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 */
