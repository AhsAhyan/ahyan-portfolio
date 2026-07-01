import type { Metadata } from "next";
import { Syne, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne-google",
});

const hanken = Hanken_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-hanken-google",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-google",
});

export const metadata: Metadata = {
  title: "Ahyan Ahsan — Full-Stack Web Developer",
  description:
    "Full-stack web developer building React & Next.js applications end to end. Based in Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        {/* Clean, query-less apple-touch-icon — iOS ignores icon URLs with query strings */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Ahyan Ahsan" />
      </head>
      <body className="bg-background text-on-surface antialiased">{children}</body>
    </html>
  );
}
