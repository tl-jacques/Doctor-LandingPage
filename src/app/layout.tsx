import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { GoogleAnalytics } from "@next/third-parties/google";

import { GOOGLE_ADS_ID } from "@/constants/gtm";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/constants/site";

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
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
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
