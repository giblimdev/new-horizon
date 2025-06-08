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

*/

/// components/componentsDemo/HotelCard/HotelCard.tsx
import React from "react";
import { Hotel } from "@/utils/getHotel";
import { Star, MapPin, Wifi, Car, Heart, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image Mobile - En haut */}
      <div className="relative w-full h-48 block md:hidden">
        <img
          src={hotel.main_image_url}
          alt={hotel.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder-hotel.png";
          }}
        />

        {/* Heart Icon */}
        <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white shadow-sm">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 hover:fill-red-500 transition-colors" />
        </button>

        {/* Partner Badge */}
        {hotel.partener && (
          <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1">
            <Shield className="w-3 h-3 mr-1" />
            Partenaire
          </Badge>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute bottom-2 left-2 bg-red-500 text-white text-xs px-2 py-1">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Message sur image */}
        {hotel.message_sur_image && (
          <Badge className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1">
            {hotel.message_sur_image}
          </Badge>
        )}
      </div>

      {/* Contenu Mobile */}
      <div className="block md:hidden p-4">
        {/* Hotel Group */}
        {hotel.hotel_group && (
          <p className="text-xs text-gray-500 mb-1">{hotel.hotel_group}</p>
        )}

        {/* Hotel Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {hotel.name}
        </h3>

        {/* Stars and Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {[...Array(hotel.star_rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {hotel.star_rating} étoile{hotel.star_rating > 1 ? "s" : ""}
            </span>
          </div>
          <div className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">
            {hotel.overall_rating}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{hotel.neighborhood}</span>
          <span className="mx-2">•</span>
          <span className="whitespace-nowrap">{hotel.distance_centre}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {hotel.short_description}
        </p>

        {/* Highlights */}
        {hotel.hotel_highlights && (
          <p className="text-sm text-blue-600 mb-3">
            ✨ {hotel.hotel_highlights}
          </p>
        )}

        {/* Message Promo Mobile */}
        {hotel.message_promo && (
          <div className="bg-red-50 border border-red-200 rounded p-2 mb-3">
            <p className="text-xs text-red-700 font-medium">
              {hotel.message_promo}
            </p>
          </div>
        )}

        {/* Amenities */}
        <div className="flex items-center gap-4 mb-3">
          {hotel.Hotel_amenity?.toLowerCase().includes("wifi") && (
            <div className="flex items-center text-green-600 text-sm">
              <Wifi className="w-4 h-4 mr-1" />
              <span>WiFi</span>
            </div>
          )}
          {hotel.parking_options?.toLowerCase().includes("parking") && (
            <div className="flex items-center text-green-600 text-sm">
              <Car className="w-4 h-4 mr-1" />
              <span>Parking</span>
            </div>
          )}
          {hotel.cancellation_policy?.toLowerCase().includes("gratuite") && (
            <div className="flex items-center text-green-600 text-sm">
              <Check className="w-4 h-4 mr-1" />
              <span>Annulation gratuite</span>
            </div>
          )}
        </div>

        {/* Price and Button Mobile */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div>
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2">
                -{discountPercentage}%
              </span>
            )}
            {hotel.regular_price &&
              parseFloat(hotel.regular_price) >
                parseFloat(hotel.base_price_per_night) && (
                <p className="text-sm text-gray-500 line-through">
                  {hotel.regular_price}
                  {hotel.currency}
                </p>
              )}
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-gray-900">
                {hotel.base_price_per_night}
                {hotel.currency}
              </span>
              <span className="text-sm text-gray-600 ml-1">/nuit</span>
            </div>
            <p className="text-xs text-gray-500">
              {hotel.adjectif} • {hotel.nombres_avis} avis
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 text-sm">
            Voir disponibilités
          </Button>
        </div>
      </div>

      {/* Layout Desktop - Horizontal */}
      <div className="hidden md:flex h-48">
        {/* PARTIE GAUCHE - Image Desktop */}
        <div className="relative w-64 flex-shrink-0">
          <img
            src={hotel.main_image_url}
            alt={hotel.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-hotel.png";
            }}
          />

          {/* Heart Icon */}
          <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white shadow-sm">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 hover:fill-red-500 transition-colors" />
          </button>

          {/* Partner Badge */}
          {hotel.partener && (
            <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1">
              <Shield className="w-3 h-3 mr-1" />
              Partenaire
            </Badge>
          )}

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <Badge className="absolute bottom-2 left-2 bg-red-500 text-white text-xs px-2 py-1">
              -{discountPercentage}%
            </Badge>
          )}

          {/* Message sur image */}
          {hotel.message_sur_image && (
            <Badge className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1">
              {hotel.message_sur_image}
            </Badge>
          )}
        </div>

        {/* PARTIE CENTRALE - Informations Desktop */}
        <div className="flex-1 p-4 min-w-0">
          {/* Hotel Group */}
          {hotel.hotel_group && (
            <p className="text-xs text-gray-500 mb-1">{hotel.hotel_group}</p>
          )}

          {/* Hotel Name */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {hotel.name}
          </h3>

          {/* Stars */}
          <div className="flex items-center mb-2">
            {[...Array(hotel.star_rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {hotel.star_rating} étoile{hotel.star_rating > 1 ? "s" : ""}
            </span>
            {hotel.Label && (
              <Badge
                variant="secondary"
                className="ml-2 bg-purple-100 text-purple-700 text-xs"
              >
                {hotel.Label}
              </Badge>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="truncate">{hotel.neighborhood}</span>
            <span className="mx-2">•</span>
            <span className="whitespace-nowrap">{hotel.distance_centre}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {hotel.short_description}
          </p>

          {/* Highlights */}
          {hotel.hotel_highlights && (
            <p className="text-sm text-blue-600 mb-2">
              ✨ {hotel.hotel_highlights}
            </p>
          )}

          {/* Amenities */}
          <div className="flex items-center gap-4">
            {hotel.Hotel_amenity?.toLowerCase().includes("wifi") && (
              <div className="flex items-center text-green-600 text-sm">
                <Wifi className="w-4 h-4 mr-1" />
                <span>WiFi</span>
              </div>
            )}
            {hotel.parking_options?.toLowerCase().includes("parking") && (
              <div className="flex items-center text-green-600 text-sm">
                <Car className="w-4 h-4 mr-1" />
                <span>Parking</span>
              </div>
            )}
            {hotel.cancellation_policy?.toLowerCase().includes("gratuite") && (
              <div className="flex items-center text-green-600 text-sm">
                <Check className="w-4 h-4 mr-1" />
                <span>Annulation gratuite</span>
              </div>
            )}
          </div>
        </div>

        {/* PARTIE DROITE - Prix, Note et CTA Desktop */}
        <div className="w-56 flex-shrink-0 p-4 bg-gray-50 flex flex-col justify-between">
          {/* Rating */}
          <div className="mb-3">
            <div className="flex items-center justify-end mb-2">
              <div className="text-right mr-3">
                <p className="text-sm font-semibold text-gray-900">
                  {hotel.adjectif}
                </p>
                <p className="text-xs text-gray-500">
                  {hotel.nombres_avis} avis
                </p>
              </div>
              <div className="bg-blue-600 text-white text-lg font-bold px-2 py-1 rounded min-w-[40px] text-center">
                {hotel.overall_rating}
              </div>
            </div>
          </div>

          {/* Promotional Message */}
          {hotel.message_promo && (
            <div className="bg-red-50 border border-red-200 rounded p-2 mb-3">
              <p className="text-xs text-red-700 font-medium text-center">
                {hotel.message_promo}
              </p>
            </div>
          )}

          {/* Pricing */}
          <div className="mb-3 text-right">
            {discountPercentage > 0 && (
              <div className="mb-1">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{discountPercentage}%
                </span>
              </div>
            )}

            {hotel.regular_price &&
              parseFloat(hotel.regular_price) >
                parseFloat(hotel.base_price_per_night) && (
                <p className="text-sm text-gray-500 line-through">
                  {hotel.regular_price}
                  {hotel.currency}
                </p>
              )}

            <div className="flex items-baseline justify-end">
              <span className="text-2xl font-bold text-gray-900">
                {hotel.base_price_per_night}
              </span>
              <span className="text-lg font-bold text-gray-900">
                {hotel.currency}
              </span>
            </div>

            <p className="text-xs text-gray-500">par nuit</p>
            <p className="text-xs text-gray-500">taxes incluses</p>

            {discountAmount > 0 && (
              <p className="text-sm text-green-600 font-semibold mt-1">
                Économisez {Math.round(discountAmount)}
                {hotel.currency}
              </p>
            )}
          </div>

          {/* Action Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
            Voir les disponibilités
          </Button>
        </div>
      </div>
    </div>
  );
}
