// utils/getHotel.ts
import { hotelExample } from "@/lib/data/dataCardHotel";

export interface Hotel {
  id: string;
  name: string;
  slug: string;
  accomodationTypes: string; // Note: faute dans les données originales
  destiantion: string; // Note: faute dans les données originales
  management_type: string;
  partener: boolean;
  Label: string;
  hotel_group: string;
  star_rating: number;
  short_description: string;
  hotel_highlights: string;
  Hotel_amenity: string;
  breakfast: string;
  accessibility_options: string;
  parking_options: string;
  accommodation_types: string;
  main_image_url: string;
  gallery_images: string[];
  neighborhood: string;
  nearby_landmarks: string[];
  overall_rating: string;
  cancellation_policy: string;
  regular_price: string;
  base_price_per_night: string;
  currency: string;
  message_sur_image: string;
  nombres_avis: string;
  distance_centre: string;
  message_promo: string;
  economie_realisé: string;
  adjectif: string;
}

// Fonction pour récupérer tous les hôtels
export const getAllHotels = (): Hotel[] => {
  return hotelExample;
};

// Fonction pour récupérer un hôtel par ID
export const getHotelById = (id: string): Hotel | undefined => {
  return hotelExample.find((hotel) => hotel.id === id);
};

// Fonction pour filtrer les hôtels par gestion professionnelle
export const getProfessionalHotels = (): Hotel[] => {
  return hotelExample.filter(
    (hotel) => hotel.management_type === "professional"
  );
};

// Fonction pour récupérer les hôtels partenaires
export const getPartnerHotels = (): Hotel[] => {
  return hotelExample.filter((hotel) => hotel.partener === true);
};

// Fonction pour filtrer les hôtels par label
export const getHotelsByLabel = (label: string): Hotel[] => {
  return hotelExample.filter((hotel) =>
    hotel.Label.toLowerCase().includes(label.toLowerCase())
  );
};

// Fonction pour filtrer les hôtels par quartier
export const getHotelsByNeighborhood = (neighborhood: string): Hotel[] => {
  return hotelExample.filter((hotel) =>
    hotel.neighborhood.toLowerCase().includes(neighborhood.toLowerCase())
  );
};

// Fonction pour filtrer les hôtels par groupe hôtelier
export const getHotelsByGroup = (group: string): Hotel[] => {
  return hotelExample.filter((hotel) =>
    hotel.hotel_group.toLowerCase().includes(group.toLowerCase())
  );
};

// Fonction pour trier les hôtels par note globale (décroissante)
export const sortHotelsByRatingDesc = (hotels: Hotel[]): Hotel[] => {
  return [...hotels].sort(
    (a, b) => parseFloat(b.overall_rating) - parseFloat(a.overall_rating)
  );
};

// Fonction pour trier les hôtels par prix (croissant)
export const sortHotelsByPriceAsc = (hotels: Hotel[]): Hotel[] => {
  return [...hotels].sort(
    (a, b) =>
      parseFloat(a.base_price_per_night) - parseFloat(b.base_price_per_night)
  );
};

// Fonction pour trier les hôtels par prix (décroissant)
export const sortHotelsByPriceDesc = (hotels: Hotel[]): Hotel[] => {
  return [...hotels].sort(
    (a, b) =>
      parseFloat(b.base_price_per_night) - parseFloat(a.base_price_per_night)
  );
};

// Fonction pour trier les hôtels par nombre d'étoiles (décroissant)
export const sortHotelsByStarsDesc = (hotels: Hotel[]): Hotel[] => {
  return [...hotels].sort((a, b) => b.star_rating - a.star_rating);
};

// Fonction pour récupérer les hôtels avec promotion
export const getHotelsWithPromotion = (): Hotel[] => {
  return hotelExample.filter(
    (hotel) => hotel.message_promo && hotel.message_promo.trim().length > 0
  );
};

// Fonction pour filtrer les hôtels par gamme de prix
export const getHotelsByPriceRange = (
  minPrice: number,
  maxPrice: number
): Hotel[] => {
  return hotelExample.filter((hotel) => {
    const price = parseFloat(hotel.base_price_per_night);
    return price >= minPrice && price <= maxPrice;
  });
};

// Fonction pour filtrer les hôtels par nombre d'étoiles minimum
export const getHotelsByMinStars = (minStars: number): Hotel[] => {
  return hotelExample.filter((hotel) => hotel.star_rating >= minStars);
};

// Fonction pour récupérer les hôtels avec économies
export const getHotelsWithSavings = (): Hotel[] => {
  return hotelExample.filter(
    (hotel) => hotel.economie_realisé && parseFloat(hotel.economie_realisé) > 0
  );
};

// Fonction pour calculer l'économie en pourcentage
export const calculateDiscountPercentage = (hotel: Hotel): number => {
  const regularPrice = parseFloat(hotel.regular_price);
  const currentPrice = parseFloat(hotel.base_price_per_night);

  if (regularPrice && currentPrice && regularPrice > currentPrice) {
    return Math.round(((regularPrice - currentPrice) / regularPrice) * 100);
  }
  return 0;
};

// Fonction pour rechercher des hôtels par nom ou description
export const searchHotels = (query: string): Hotel[] => {
  const searchTerm = query.toLowerCase();
  return hotelExample.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchTerm) ||
      hotel.short_description.toLowerCase().includes(searchTerm) ||
      hotel.neighborhood.toLowerCase().includes(searchTerm)
  );
};

// Fonction pour obtenir des statistiques sur les hôtels
export const getHotelStats = () => {
  const hotels = getAllHotels();
  const totalHotels = hotels.length;
  const partnerHotels = getPartnerHotels().length;
  const averageRating =
    hotels.reduce((sum, hotel) => sum + parseFloat(hotel.overall_rating), 0) /
    totalHotels;
  const averagePrice =
    hotels.reduce(
      (sum, hotel) => sum + parseFloat(hotel.base_price_per_night),
      0
    ) / totalHotels;

  return {
    totalHotels,
    partnerHotels,
    averageRating: Math.round(averageRating * 10) / 10,
    averagePrice: Math.round(averagePrice),
    hotelsWithPromotion: getHotelsWithPromotion().length,
  };
};

// Fonction pour trier les hôtels par nom (alphabétique)
export const sortHotelsByName = (hotels: Hotel[]): Hotel[] => {
  return [...hotels].sort((a, b) => a.name.localeCompare(b.name));
};

// Fonction pour filtrer les hôtels par type d'hébergement
export const getHotelsByAccommodationType = (type: string): Hotel[] => {
  return hotelExample.filter((hotel) =>
    hotel.accomodationTypes.toLowerCase().includes(type.toLowerCase())
  );
};

// Fonction pour récupérer les hôtels de luxe (5 étoiles)
export const getLuxuryHotels = (): Hotel[] => {
  return hotelExample.filter((hotel) => hotel.star_rating === 5);
};

// Fonction pour récupérer les hôtels avec petit-déjeuner
export const getHotelsWithBreakfast = (): Hotel[] => {
  return hotelExample.filter(
    (hotel) => hotel.breakfast && hotel.breakfast.trim().length > 0
  );
};

// Fonction pour récupérer les hôtels avec annulation gratuite
export const getHotelsWithFreeCancellation = (): Hotel[] => {
  return hotelExample.filter((hotel) =>
    hotel.cancellation_policy.toLowerCase().includes("gratuite")
  );
};
