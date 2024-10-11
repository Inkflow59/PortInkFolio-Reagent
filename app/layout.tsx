import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from './contexts/ThemeContext';
import type { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "PortInkFolio Reagent",
  description: "Un portfolio innovant sur le thème des systèmes d'exploitation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}