import { Montserrat } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from './contexts/ThemeContext';
import type { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ['latin'],
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
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}