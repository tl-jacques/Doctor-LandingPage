import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Jorge Medeiros | Dermatologista",
  description: "Dermatologia especializada em Sobral-CE ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16683907811"
        />
        <GoogleAnalytics gaId="AW-16683907811" />
        <GoogleTagManager gtmId="AW-16683907811" />
      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EDF5F7]")}>
        {children}
      </body>
    </html>
  );
}
