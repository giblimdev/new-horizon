// app/demo/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getHotelById } from "@/utils/getHotel";

interface HotelDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function HotelDetailPage({ params }: HotelDetailPageProps) {
  const { id } = await params;
  const hotel = getHotelById(id);

  if (!hotel) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale - Images et informations */}
          <div className="lg:col-span-2">
            {/* Image principale */}
            <div className="relative mb-6">
              <img 
                src={hotel.main_image_url} 
                alt={hotel.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {hotel.message_sur_image && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-lg font-medium">
                  {hotel.message_sur_image}
                </div>
              )}
              {hotel.Label && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-lg font-medium">
                  {hotel.Label}
                </div>
              )}
            </div>

            {/* En-tête de l'hôtel */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {hotel.name}
                </h1>
                {hotel.partener && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                    Partenaire
                  </span>
                )}
              </div>

              {/* Étoiles et note */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(hotel.star_rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {hotel.overall_rating}/10
                  </span>
                  <span className="text-lg font-medium text-gray-700">
                    {hotel.adjectif}
                  </span>
                  <span className="text-gray-600">
                    ({hotel.nombres_avis} avis)
                  </span>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{hotel.neighborhood}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{hotel.distance_centre} du centre-ville</span>
                </div>
              </div>

              {/* Groupe hôtelier */}
              {hotel.hotel_group && (
                <div className="text-gray-600 mb-4">
                  <span className="font-medium">Groupe : </span>
                  {hotel.hotel_group}
                </div>
              )}
            </div>

            {/* Message promotionnel */}
            {hotel.message_promo && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-yellow-800 font-medium">{hotel.message_promo}</span>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {hotel.short_description}
              </p>
            </div>

            {/* Points forts */}
            {hotel.hotel_highlights && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Points forts
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {hotel.hotel_highlights}
                </p>
              </div>
            )}

            {/* Équipements */}
            {hotel.Hotel_amenity && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Équipements
                </h2>
                <p className="text-gray-700">
                  {hotel.Hotel_amenity}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar - Réservation */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6 shadow-lg">
              {/* Prix */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  {hotel.base_price_per_night}{hotel.currency}
                </div>
                <div className="text-gray-600 mb-2">par nuit</div>
                {hotel.regular_price && (
                  <div className="text-lg text-gray-500 line-through">
                    {hotel.regular_price}{hotel.currency}
                  </div>
                )}
              </div>

              {/* Bouton de réservation */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors mb-4 text-lg">
                Réserver maintenant
              </button>

              <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors mb-6">
                Ajouter aux favoris
              </button>

              {/* Informations pratiques */}
              <div className="space-y-4 text-sm">
                <h3 className="font-semibold text-gray-900 text-base">
                  Informations pratiques
                </h3>
                
                {hotel.parking_options && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Parking</div>
                      <div className="text-gray-600">{hotel.parking_options}</div>
                    </div>
                  </div>
                )}

                {hotel.cancellation_policy && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-900">Annulation</div>
                      <div className="text-gray-600">{hotel.cancellation_policy}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Check-in</div>
                    <div className="text-gray-600">À partir de 15h00</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Check-out</div>
                    <div className="text-gray-600">Jusqu'à 11h00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton retour */}
        <div className="mt-8">
          <Link 
            href="/finedHotel"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la recherche
          </Link>
        </div>
      </div>
    </div>
  );
}
