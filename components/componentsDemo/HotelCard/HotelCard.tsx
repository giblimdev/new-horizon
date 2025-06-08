/*
Propriétés principales :
main_image_url : URL de l'image principale de l'hôtel
name : Nom de l'hôtel
star_rating : Nombre d'étoiles (1-5)
overall_rating : Note globale de l'hôtel
adjectif : Adjectif descriptif de la note (ex: "Excellent", "Très bien")
nombres_avis : Nombre d'avis clients

Informations de localisation :
neighborhood : Quartier de l'hôtel
distance_centre : Distance du centre-ville

Pricing et promotions :
base_price_per_night : Prix de base par nuit
regular_price : Prix régulier (optionnel)
currency : Devise (ex: "€", "$")

Descriptions et contenus :
short_description : Description courte de l'hôtel
hotel_highlights : Points forts de l'hôtel (optionnel)
message_promo : Message promotionnel (optionnel)
message_sur_image : Message affiché sur l'image (optionnel)

Informations complémentaires :
hotel_group : Groupe hôtelier (optionnel)
Label : Label spécial (optionnel)
partener : Booléen indiquant si c'est un partenaire
Hotel_amenity : Équipements de l'hôtel
parking_options : Options de parking
cancellation_policy : Politique d'annulation

information manquante :


*/

// components/componentsDemo/HotelCard/HotelCard.tsx
import React from "react";
import { Hotel } from "@/utils/getHotel";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Heart,
  Shield,
  Check,
  Coffee,
  Utensils,
  Dumbbell,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CatCardHotel from "@/components/componentsDemo/HotelCard/CatCardHotel";
import Image from "next/image";

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const discountAmount = hotel.regular_price
    ? parseFloat(hotel.regular_price) - parseFloat(hotel.base_price_per_night)
    : 0;

  const discountPercentage = hotel.regular_price
    ? Math.round(
        ((parseFloat(hotel.regular_price) -
          parseFloat(hotel.base_price_per_night)) /
          parseFloat(hotel.regular_price)) *
          100
      )
    : 0;

  // Fonction pour afficher les étoiles
  const renderStars = (rating: string) => {
    const numStars = parseInt(rating) || 0;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < numStars
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Fonction pour afficher les icônes d'équipements
  const renderAmenityIcon = (amenity: string) => {
    const amenityLower = amenity?.toLowerCase() || "";
    if (amenityLower.includes("wifi"))
      return <Wifi className="w-4 h-4 text-blue-600" />;
    if (amenityLower.includes("parking") || amenityLower.includes("car"))
      return <Car className="w-4 h-4 text-gray-600" />;
    if (amenityLower.includes("restaurant") || amenityLower.includes("food"))
      return <Utensils className="w-4 h-4 text-orange-600" />;
    if (amenityLower.includes("gym") || amenityLower.includes("fitness"))
      return <Dumbbell className="w-4 h-4 text-red-600" />;
    if (amenityLower.includes("pool") || amenityLower.includes("piscine"))
      return <Waves className="w-4 h-4 text-blue-500" />;
    if (amenityLower.includes("coffee") || amenityLower.includes("café"))
      return <Coffee className="w-4 h-4 text-brown-600" />;
    return <Check className="w-4 h-4 text-green-600" />;
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* Section Image - cachée sur mobile */}
      <section className="hidden md:block md:w-1/3 relative">
        <div className="relative h-full min-h-[200px]">
          <Image
            src={hotel.main_image_url}
            alt={hotel.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 0px, (max-width: 1200px) 33vw, 25vw"
          />
          {hotel.message_sur_image && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              {hotel.message_sur_image}
            </div>
          )}
          {/* Heart Icon */}
          <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white shadow-sm">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 hover:fill-red-500 transition-colors" />
          </button>
        </div>
      </section>

      {/* Section Informations principales */}
      <section className="flex-1 p-4 md:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {hotel.hotel_group && (
            <Badge
              variant="outline"
              className="text-xs text-blue-700 border-blue-200"
            >
              {hotel.hotel_group}
            </Badge>
          )}
          {hotel.Label && (
            <Badge
              variant="secondary"
              className="text-xs bg-green-100 text-green-800"
            >
              {hotel.Label}
            </Badge>
          )}
          {hotel.partener && (
            <Badge className="text-xs bg-purple-100 text-purple-800">
              Partenaire
            </Badge>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {hotel.name}
        </h3>

        <div className="mb-2">{renderStars(String(hotel.star_rating))}</div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{hotel.neighborhood}</span>
          </div>
          {hotel.distance_centre && (
            <span className="text-gray-500">{hotel.distance_centre}</span>
          )}
        </div>

        {hotel.Hotel_amenity && (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {hotel.Hotel_amenity.split(",")
              .slice(0, 4)
              .map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 text-xs text-gray-600"
                >
                  {renderAmenityIcon(amenity.trim())}
                  <span className="hidden sm:inline">{amenity.trim()}</span>
                </div>
              ))}
          </div>
        )}

        <p className="text-sm text-gray-700 mb-2 line-clamp-2">
          {hotel.short_description}
        </p>

        {hotel.hotel_highlights && (
          <p className="text-xs text-blue-600 font-medium line-clamp-1">
            {hotel.hotel_highlights}
          </p>
        )}
      </section>

      {/* Section Prix et réservation */}
      <section className="w-full md:w-80 p-4 md:p-6 bg-gray-50 md:bg-white border-t md:border-t-0 md:border-l border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className=" flex items-center gap-2 mb-1">
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                {hotel.overall_rating}
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {hotel.adjectif}
              </span>{" "}
              <p className="text-xs text-gray-600">
                {hotel.nombres_avis} avis vérifier
              </p>
            </div>
          </div>
        </div>

        {hotel.message_promo && (
          <div className="bg-yellow-100 border border-yellow-300 rounded p-2 mb-3">
            <p className="text-xs text-yellow-800 font-medium">
              {hotel.message_promo}
            </p>
          </div>
        )}

        <div className="text-right mb-3">
          {hotel.regular_price && (
            <div className="text-sm text-gray-500 line-through">
              {hotel.regular_price} {hotel.currency}
            </div>
          )}
          <div className=" flex items-baseline justify-end gap-1">
            <span className="text-2xl font-bold text-gray-900">
              {hotel.base_price_per_night}
            </span>
            <span className="text-lg font-semibold text-gray-900">
              {hotel.currency}
            </span>
            <span className="text-xs text-gray-600">par nuit</span>
          </div>
        </div>

        {hotel.cancellation_policy && (
          <p className="text-xs text-green-600 mb-3 flex items-center gap-1">
            <Check className="w-3 h-3" />
            {hotel.cancellation_policy}
          </p>
        )}

        <div className="w-full">
          <CatCardHotel />
        </div>
      </section>
    </div>
  );
}
