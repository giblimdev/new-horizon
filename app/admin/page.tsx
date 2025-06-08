/*


Property type:
Resort
Hotel
Bed & breakfast
Villa
Guesthouse
Lodge
Hostel/Backpacker accommodation
Inn
Motel
Aparthotel
Private vacation home
Condo
Apartment
Condo resort
Cabin
Camping
Farm
Hostal
Capsule Hotel
Pension
Residence


Guest rating :
Any
Wonderful 9+
Very good 8+
Good 7+



Neighborhood:




Meal plans :
Breakfast included
All inclusive
Dinner included
Lunch included


Traveler experience :
Adults only
Romantic
Beach
Family friendly
LGBTQ welcoming
Luxury
Eco-certified
Wedding
Business friendly
Budget



Accessibility :
Elevator
Stair-free path to entrance
Roll-in shower
Service animals allowed
In-room accessibility
Wheelchair accessible parking
Accessible bathroom
Sign language-capable staff



hotel_highlights
Remarkable view, Prime location, Vibrant nightlife, Romantic atmosphere, Quiet and relaxing. petit dejeune gratuit. annulation gratuite



Nombre d'étoiles de l'hôtel

5 étoiles
4 étoiles
3 étoiles
2 étoiles
1 étoile
Aucune évaluation




Types de chambres

Chambre simple
Chambre double
Chambre lits jumeaux
Chambre triple
Chambre familiale
Suite


***Commodités
**Équipements populaires et essentiels
Wi-Fi
Parking
Climatisation
Navette aéroport
Piscine
Salle de sport
Spa
Réception 24h/24
Non-fumeur
Baignoire
Blanchisserie
Cuisine
Animaux de compagnie acceptés
Télévision
Baby-sitting
Ascenseur
Équipements pour personnes handicapées

**Équipements de luxe
Animaux de compagnie acceptés
Bain source chaude (Onsen)

**Accessibilité
Ascenseur
Équipements pour personnes handicapées
Douche avec barre d'appui
Baignoire avec barre d'appui
Rampe dans les escaliers
Dispositifs d'écoute assistée disponibles
Parking accessible
Douche accessible
Guide auditif
Personnel connaissant la langue des signes
Signalisation en braille ou tactile
Cordon de tirage d'urgence dans la salle de bain
Accessibilité téléphonique disponible
Lavabo de salle de bain abaissé
Toilettes surélevées
Siège de douche
Accès aux handicapés
Toilettes avec barre d'appui
Chambres accessibles disponibles
Alarmes visuelles

**Équipements pour les voyageurs d’affaires
Étage VIP
Salon d'affaires
Salles de réunion
Centre d'affaires

Salles de conférence

**Restauration
Restaurant
Cuisine
Bar
Salon de thé
Salle à manger
Service de banquet
Four à micro-ondes
Bouteille d'eau offerte
Café
Minibar
Barbecue
Cafetière
Bar du hall

**Pour les familles
Baby-sitting
Équipements enfants
Chambres communicantes
Piscine pour enfants
Terrain de jeux

**Santé
Médecin de garde
Services médicaux
Salle de premiers soins

**Hôtel et équipements extérieurs
Non-fumeur
Blanchisserie
Chambres fumeurs
Étage non-fumeur
Chapelle
Magasins
Salon
Salles de mariage
Bureau de vente de billets
Zones fumeurs
Jardin

**Les chambres
Climatisation
Baignoire
Douche
Peignoir de bain
Cheminée
Chauffage
Réception
Balcon
Sèche-cheveux

**Loisirs et divertissement
Spa
Sauna
Parasols
Salle de mah-jong, échecs et poker
Solarium
Bain à remous
Boîte de nuit
Institut de beauté
Massage
Salle de jeux
Espace pour les bains de soleil
Hammam
Solarium à UV
Bar avec piscine
Bowling
Location de vélos
Karaoké
Bibliothèque
Billards
Casino

**Médias et technologies
Télévision
Salles de spectacle
Photocopieur
Console de jeux vidéos
Téléphone
TV Satellite
Fax

**Services
Réception 24h/24
Personnel polyglotte
Réveil téléphonique
Service de chambre
Distributeur de billets
Fer à repasser
Portier
Coiffeurs
Concierge
Sécurité
Change de devises
Distributeur
Coffre-fort
Presse à pantalons
Enregistrement express
Local à bagages
Départ express

Excursions

**Sport et remise en forme
Piscine
Salle de sport
Plongée sous-marine
Piscine extérieure
Salle de sport
Sports nautiques
Minigolf
Piscine intérieure
Squash
Terrain de basket
Terrain de golf
Plongée masque et tuba
Ping-pong
Terrain de tennis
Équitation

**Transport et stationnement
Parking
Navette aéroport
Service de voiturier
Location de voiture
Station de recharge pour véhicule électrique (VE)
Service de navette
Navette station
Parking extérieur

**Wi-Fi et internet
Wi-Fi
Accès Internet
Wi-Fi dans les parties communes

*/

import React from "react";
import { MapPin, Building, Star, Car, Bed, Shield } from "lucide-react";
import TableHotelCard from "@/components/componentsDemo/HotelCard/TableHotelCard";

export default function FiltersPage() {
  const filterSections = [
    {
      title: "Localisation",
      icon: <MapPin className="w-5 h-5" />,
      categories: [
        {
          name: "Pays",
          items: ["France", "Espagne", "Italie", "Allemagne", "Portugal"],
        },
        {
          name: "Ville",
          items: ["Paris", "Madrid", "Rome", "Berlin", "Lisbonne"],
        },
        {
          name: "Destinations",
          items: [
            "Beach",
            "Mountain",
            "Countryside",
            "Urban",
            "Shopping",
            "Historic",
            "Cultural",
            "Business",
            "Fitness",
            "Wellness",
            "Family",
          ],
        },
      ],
    },
    {
      title: "Équipements et Services",
      icon: <Building className="w-5 h-5" />,
      categories: [
        {
          name: "Équipements de la chambre",
          items: [
            "Shared bathroom",
            "Shared toilet",
            "Air conditioning",
            "WiFi included",
            "Ensuite bathroom",
            "Jacuzzi",
            "Bathtub",
            "Shower",
            "Toilet",
            "Balcony",
            "Minibar",
            "Refrigerator",
            "Kettle",
            "Coffee maker",
            "Television",
            "TV with streaming service",
            "Safe",
            "Iron and ironing board",
            "Hair dryer",
            "Free toiletries",
            "Robes and slippers",
            "Desk",
            "Kitchen",
            "Laundry facilities",
            "Washing machine",
            "Baby cot available",
          ],
        },
        {
          name: "Services de l'hôtel",
          items: [
            "Bar",
            "Restaurant",
            "Casino",
            "Spa / massage",
            "Gym",
            "Business center",
            "Boutique",
            "Pool",
            "Water park",
            "Golf",
            "Concierge service",
            "Room service",
            "Currency exchange",
            "Wake-up service",
            "Laundry service",
            "24/7 reception",
            "Self check-in",
            "Bike rental",
            "Scooter rental",
            "Car rental",
            "Shuttle service",
            "Pets allowed",
            "Smoking area",
          ],
        },
        {
          name: "Options d'accessibilité",
          items: [
            "Elevator",
            "Assistance animals allowed",
            "Step-free path",
            "Wheelchair-accessible shower",
            "Wheelchair-accessible parking",
          ],
        },
        {
          name: "Caractéristiques de l'hôtel",
          items: [
            "Remarkable view",
            "Prime location",
            "Vibrant nightlife",
            "Romantic atmosphere",
            "Quiet and relaxing",
          ],
        },
      ],
    },
    {
      title: "Autres Options",
      icon: <Star className="w-5 h-5" />,
      categories: [
        {
          name: "Options de parking",
          items: [
            "Secure parking",
            "Covered parking",
            "Free parking",
            "Paid parking",
            "Electric vehicle charging station",
          ],
        },
        {
          name: "Types de lits",
          items: [
            "1 king size bed",
            "1 double bed",
            "1 single bed",
            "2 single beds",
            "3 beds and more",
          ],
        },
        {
          name: "Labels",
          items: [
            "Eco-friendly",
            "Family-friendly",
            "Business-friendly",
            "Pet-friendly",
          ],
        },
        {
          name: "Types d'hébergement",
          items: [
            "Hotel",
            "Villa",
            "Historic hotel",
            "Design hotel",
            "Boutique hotel",
            "Serviced apartment",
            "Condominium",
            "Apartment",
            "Guest house",
            "Youth hostel",
            "Houseboat",
            "Private vacation home",
            "Chalet",
            "Camping",
            "Bungalow",
            "Cottage",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Filtres de Recherche
          </h1>
          <p className="text-lg text-gray-600">
            Explorez toutes les options disponibles pour personnaliser votre
            recherche
          </p>
        </div>

        {/* Filter Sections */}
        <div className="space-y-12">
          {filterSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Section Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    {/* Category Title */}
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      {category.name}
                    </h3>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            id={`${sectionIndex}-${categoryIndex}-${itemIndex}`}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <label
                            htmlFor={`${sectionIndex}-${categoryIndex}-${itemIndex}`}
                            className="ml-3 text-sm font-medium text-gray-700 cursor-pointer"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <TableHotelCard />
        </div>
      </div>
    </div>
  );
}
