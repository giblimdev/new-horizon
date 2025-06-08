"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks = [
  { id: 1, label: "Home", href: "/", icon: "Home" },
  {
    id: 2,
    label: "Host Communication",
    href: "/com/host/hostCom",
    icon: "MessageCircle",
  },
  {
    id: 3,
    label: "Host Features",
    href: "/com/host/hostFeatures",
    icon: "LayoutGrid",
  },
  { id: 4, label: "Pricing", href: "/com/host/pricing", icon: "Tag" },
  { id: 5, label: "Labels", href: "/com/host/label", icon: "Award" },
];

export default function HeaderNavComHost({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-2 md:items-center bg-white p-5">
      {navLinks.map(({ id, label, href, icon }) => {
        const Icon = (LucideIcons[icon as keyof typeof LucideIcons] ||
          ArrowRight) as LucideIcon;

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
