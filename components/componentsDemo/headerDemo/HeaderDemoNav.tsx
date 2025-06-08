"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Handshake,
  Search,
  Calendar,
  Link as LinkIcon,
  ArrowRight,
  FileQuestion,
  Settings,
  Sparkle,
} from "lucide-react";

// Liens de navigation avec icônes adaptées
const navLinks = [
  { id: 1, label: "Home", href: "/demo", icon: Home },
  { id: 2, label: "Blog", href: "/demo/Blog", icon: Handshake },
  { id: 3, label: "Mes\u00A0recherches", href: "/demo/links", icon: Search },
  {
    id: 4,
    label: "Mes\u00A0réservations",
    href: "/demo/links",
    icon: Calendar,
  },
  { id: 5, label: "FAQ", href: "/demo/links", icon: FileQuestion },
  { id: 6, label: "A\u00A0propos", href: "/demo/About", icon: Sparkle },
  { id: 7, label: "Liens", href: "/demo/links", icon: LinkIcon },
  { id: 8, label: "Admin", href: "/admin", icon: Settings },
];

export default function HeaderDemoNav({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-2 md:items-center">
      {navLinks.map(({ id, label, href, icon: Icon }) => {
        return (
          <Link
            key={id}
            href={href}
            onClick={onLinkClick}
            className="flex items-center p-3 md:p-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
          >
            <Icon className="w-5 h-5 text-blue-600 md:mr-2" />
            <span className="text-gray-800 font-medium">{label}</span>
            <ArrowRight className="ml-auto md:hidden w-4 h-4 text-gray-400" />
          </Link>
        );
      })}
    </nav>
  );
}
