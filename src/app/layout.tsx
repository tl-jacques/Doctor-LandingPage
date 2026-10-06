import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { GoogleAnalytics } from "@next/third-parties/google";

import { GOOGLE_ADS_ID } from "@/constants/gtm";

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
      {/* Carrega o gtag.js uma vez e cria window.gtag (Google Ads) */}
      <GoogleAnalytics gaId={GOOGLE_ADS_ID} />
      <body className="bg-porcelain font-sans text-espresso antialiased">
        {children}
      </body>
    </html>
  );
}
