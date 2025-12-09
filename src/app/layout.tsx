import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Parisienne,
  Dancing_Script,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--font-fancy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Свадьба Дмитрия и Ольги",
  description: "Приглашение на свадьбу",
  icons: {
    icon: "/rings.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${parisienne.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
