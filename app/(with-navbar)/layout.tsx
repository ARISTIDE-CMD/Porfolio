import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Arisdev",
  description: "Solutions digitales claires, utiles et orientées résultat",
  icons: {
    icon: "/reference.png",
    apple: "/reference.png",
  },
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
