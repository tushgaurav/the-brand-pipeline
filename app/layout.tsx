import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Brand Pipeline | Marketing, Design & Development Studio",
  description:
    "The Brand Pipeline helps brands get noticed. Strategy, marketing, design and development — end to end, under one roof.",
  openGraph: {
    title: "The Brand Pipeline",
    description:
      "We get brands noticed. Marketing, design and development — end to end.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#3A22F2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${hand.variable} antialiased`}
    >
      <body className="bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
