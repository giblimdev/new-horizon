// app/admin/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import HeaderAdmin from "@/components/componentsAdmim/headerAdmin/HeaderAdmin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administration panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fle-1 ">
      <HeaderAdmin />
      <main className="admin-main">{children}</main>
    </div>
  );
}
