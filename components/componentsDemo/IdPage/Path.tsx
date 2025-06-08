import Link from "next/link";
import React from "react";

type PathProps = {
  hotelName: string;
};

export default function Path({ hotelName }: PathProps) {
  return (
    <div className="bg-red-200 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Accueil
          </Link>
          <span>›</span>
          <Link href="/finedHotel" className="hover:text-blue-600">
            Hôtels
          </Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{hotelName}</span>
        </nav>
      </div>
    </div>
  );
}
