import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/componentsDemo/footer/Footer";
import HeaderDemo from "@/components/componentsDemo/headerDemo/headerDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastBooking - Gestion d'hébergements",
  description:
    "Solution complète pour la gestion et la réservation d'hébergements",
  keywords: "réservation, hébergement, gestion, booking, hôtel",
};

export default function ComLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HeaderDemo />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
