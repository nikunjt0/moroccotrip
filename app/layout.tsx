import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morocco Trip Itinerary | Jan 2-14, 2026",
  description: "Complete travel itinerary for our Morocco adventure - Marrakesh, Atlas Mountains, and more. Explore our day-by-day plans from January 2-14, 2026.",
  keywords: ["Morocco", "travel itinerary", "Marrakesh", "Atlas Mountains", "Imlil", "travel planning"],
  authors: [{ name: "Morocco Trip Group" }],
  openGraph: {
    title: "Morocco Trip Itinerary | Jan 2-14, 2026",
    description: "Complete travel itinerary for our Morocco adventure - Marrakesh, Atlas Mountains, and more. Explore our day-by-day plans from January 2-14, 2026.",
    type: "website",
    locale: "en_US",
    siteName: "Morocco Trip Itinerary",
    images: [
      {
        url: "/jan-11/chefchaouen.jpg",
        width: 1200,
        height: 630,
        alt: "Morocco Trip - Chefchaouen Blue City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morocco Trip Itinerary | Jan 2-14, 2026",
    description: "Complete travel itinerary for our Morocco adventure - Marrakesh, Atlas Mountains, and more.",
    images: ["/jan-11/chefchaouen.jpg"],
  },
  icons: {
    icon: "/morocco_flag.svg",
    apple: "/morocco_flag.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
