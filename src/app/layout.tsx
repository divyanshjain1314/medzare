import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "../providers/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medzare Pharma Private Limited | Advancing Health Through Science",
  description:
    "Medzare Pharma Private Limited - A premium pharmaceutical company in New Delhi, India committed to delivering quality healthcare solutions with integrity and innovation.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Medzare Pharma Private Limited",
    description: "Advancing Health Through Science — Premium pharmaceutical solutions from New Delhi, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased min-h-screen bg-background">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}