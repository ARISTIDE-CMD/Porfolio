import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "porfilio",
  description: "Mon porfilio perso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* ✅ Flex column pour coller le footer en bas */}
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar reste en haut */}
        <Navbar />

        {/* Le contenu prend tout l’espace disponible */}
        <main className="flex-grow">{children}</main>

        {/* Footer reste collé en bas */}
        <Footer />
      </body>
    </html>
  );
}
