import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

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
    <html
      lang="pt-BR"
      className={twMerge(
        dmSans.variable,
        instrumentSerif.variable,
        "scroll-smooth",
      )}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16683907811"
        />
        <GoogleAnalytics gaId="AW-16683907811" />
        <GoogleTagManager gtmId="AW-16683907811" />
      </head>
      <body className="font-sans antialiased bg-[#EDF5F7]">{children}</body>
    </html>
  );
}
