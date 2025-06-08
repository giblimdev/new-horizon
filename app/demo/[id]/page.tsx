import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getHotelById } from "@/utils/getHotel";
import HeroForm from "@/components/componentsDemo/landing/HeroForm";
import NavigationTabs from "@/components/componentsDemo/IdPage/NavigationTabs";

// Import des données complémentaires
import { hotelAdditionalInfo } from "@/lib/data/dataHotelAdd";
import { roomDetails } from "@/lib/data/dataRooms";

interface HotelDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function HotelDetailPage({
  params,
}: HotelDetailPageProps) {
  const { id } = await params;
  const hotel = getHotelById(id);

  // Chargement des infos complémentaires et des chambres
  const hotelAdd = hotelAdditionalInfo.find((h) => h.id === id);
  const rooms = roomDetails.filter((r) => r.hotel_id === id);

  if (!hotel) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-20">
        <HeroForm />
      </div>
      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-200">
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
            <span className="text-gray-900 font-medium">{hotel.name}</span>
          </nav>
        </div>
      </div>
      <div>
        <NavigationTabs />
      </div>
    </div>
  );
}
