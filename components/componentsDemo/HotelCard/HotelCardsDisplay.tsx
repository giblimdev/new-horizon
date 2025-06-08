
// components/HotelCardsDisplay.tsx
"use client";
import React, { useState, useMemo } from "react";
import {
  getAllHotels,
  getPartnerHotels,
  sortHotelsByRatingDesc,
  sortHotelsByPriceAsc,
  Hotel,
} from "@/utils/getHotel";
import CardHotel from "@/components/componentsDemo/HotelCard/HotelCard";
import Link from "next/link";

export default function HotelCardsDisplay() {
  const [sortBy, setSortBy] = useState<"rating" | "price" | "name">("rating");
  const [showOnlyPartners, setShowOnlyPartners] = useState(false);

  const hotels = useMemo(() => {
    let baseHotels: Hotel[] = showOnlyPartners
      ? getPartnerHotels()
      : getAllHotels();

    switch (sortBy) {
      case "rating":
        return sortHotelsByRatingDesc(baseHotels);
      case "price":
        return sortHotelsByPriceAsc(baseHotels);
      case "name":
        return [...baseHotels].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return baseHotels;
    }
  }, [sortBy, showOnlyPartners]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}

{/* Hotels Grid */}
<div className="space-y-6">
  {hotels.map((hotel) => (
    <Link key={hotel.id} href={`/demo/${hotel.id}`} className="block">
      <CardHotel hotel={hotel} />
    </Link>
  ))}
</div>
      {/* Empty State */}
      {hotels.length === 0 && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Aucun hôtel trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos filtres pour voir plus de résultats.
            </p>
          </div>
        </div>
      )}

      {/* Load More Button (optionnel) */}
      {hotels.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            Voir plus d'hôtels
          </button>
        </div>
      )} 
    </div>
  );
}

