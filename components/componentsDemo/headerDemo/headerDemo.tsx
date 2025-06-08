"use client";

import React from "react";
import Link from "next/link";
import { Plus, HelpCircle } from "lucide-react";
import Logo from "./Logo";
import Social from "./Social";
import HeaderDemoNav from "./HeaderDemoNav";

export default function HeaderNav({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  return (
    <header className="w-full px-4 py-3 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        {/* Navigation centrée */}
        <nav className="flex-1 flex justify-center">
          <HeaderDemoNav onLinkClick={onLinkClick} />
        </nav>
        {/* Social + boutons à droite */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Social />
        </div>
        <div className="flex px-5">
          <Link
            href="/ajouter-etablissement"
            className="mx-2 flex items-center px-3 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4 mr-1" />
            Ajouter mon établissement
          </Link>
          <Link
            href="/aide"
            className="mx-2 flex items-center px-3 py-2 rounded-md bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition"
          >
            <HelpCircle className="w-4 h-4 mr-1" />
            Aide
          </Link>
        </div>
      </div>
    </header>
  );
}
