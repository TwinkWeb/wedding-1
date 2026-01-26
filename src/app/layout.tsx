import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Parisienne,
  Macondo,
  Fleur_De_Leah,
  Alex_Brush,
  Raleway,
  Oranienbaum,
  Forum,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const forum = Forum({
  weight: "400",
  variable: "--forum",
  subsets: ["latin"],
});

const oranienbaum = Oranienbaum({
  weight: "400",
  variable: "--oranienbaum",
  subsets: ["latin"],
});

const railway = Raleway({
  weight: "400",
  variable: "--railway",
  subsets: ["latin"],
});

const fleurDeLeah = Fleur_De_Leah({
  weight: "400",
  variable: "--fleur-de-leah",
  subsets: ["latin"],
});

const parsis = Macondo({
  weight: "400",
  variable: "--macondo",
  subsets: ["latin"],
});

const brush = Alex_Brush({
  weight: "400",
  variable: "--alex_brush",
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
        className={`${fleurDeLeah.variable} ${oranienbaum.variable} ${forum.variable} ${parsis.variable} ${brush.variable} ${railway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
