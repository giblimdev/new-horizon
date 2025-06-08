import React from "react";

export default function TableHotelCard() {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto bg-white rounded-lg border shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold mb-2">🏨 Table Hotel</h1>
          <p className="text-blue-100">
            Structure complète de la base de données - Direct Horizon
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-semibold text-sm">Champ</th>
                <th className="text-left p-4 font-semibold text-sm">Type</th>
                <th className="text-left p-4 font-semibold text-sm">
                  Contraintes
                </th>
                <th className="text-left p-4 font-semibold text-sm">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {/* IDENTIFIANTS */}
              <tr className="bg-muted/30">
                <td
                  colSpan={4}
                  className="p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide border-l-4 border-blue-500"
                >
                  🆔 IDENTIFIANTS ET INFORMATIONS DE BASE
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    id
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">UUID</span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-yellow-100 text-yellow-800 text-xs font-medium mr-1">
                    PRIMARY KEY
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-medium">
                    DEFAULT
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Identifiant unique de l'hôtel
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    name
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    VARCHAR(255)
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                    NOT NULL
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Nom de l'hôtel
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    slug
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    VARCHAR(255)
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-100 text-purple-800 text-xs font-medium mr-1">
                    UNIQUE
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                    NOT NULL
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  URL-friendly identifier
                </td>
              </tr>

              {/* TYPE ET CLASSIFICATION */}
              <tr className="bg-muted/30">
                <td
                  colSpan={4}
                  className="p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide border-l-4 border-green-500"
                >
                  🏷️ TYPE ET CLASSIFICATION
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    accommodation_type
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">ENUM</span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                    NOT NULL
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Hotel, apartment, hostel, guesthouse, boutique hotel, resort,
                  bnb, Villa, Hotel Historic, hotel Design, Serviced apartment,
                  Condominium, Apartment, Guest house, Youth hostel, Houseboat,
                  Private vacation, home,Chalet, Camping, Bungalow, Cottage.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    destination
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">ENUM</span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                    NOT NULL
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Beach, Mountain, Countryside, Urban, Shopping, Historic,
                  Cultural, Business, Feetness, Wellness, Family.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    management_type
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">ENUM</span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                    NOT NULL
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  professional, individual
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    partener
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    BOOLEAN
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                    NOT NULL
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  true / false
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    Label
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">ENUM</span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                    NOT NULL
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  💼 Work Place Suite, 👨‍👩‍👧‍👦 Family Nest, ❤️ Romantic Choice, 🌴
                  Leisure Landing, 🏰 Gilded Gateway, 🏛️ Historical & Culture
                  Hosting, 🌿 ecoHosting, 🌈 Inclusive Place, ⛰️ Adventure Base,
                  🏙️ Urban Oasis, 🐾 Pet Haven, 🧘 Wellness Retreat, 📵 Digital
                  Detox Cabin, 🌊 Bord de Mer, 🏔️ Montagne, 🌾 Campagne, 🏜️
                  Désert, 🏢 Urbain.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    hotel_group
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    VARCHAR(100)
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Marriott International, Jin Jiang International, Hilton
                  Worldwide, InterContinental Hotels Group (IHG), Wyndham Hotels
                  & Resorts, H World Group (ex-Huazhu), Accor, Choice Hotels,
                  BTH Hotels, OYO, Hyatt Hotels Corporation, Radisson Hotel
                  Group, Best Western Hotels & Resorts, Four Seasons Hotels and
                  Resorts, Whitbread (Premier Inn), NH Hotel Group, Meliá Hotels
                  International, Minor Hotels, Shangri-La Hotels and Radisson,
                  Banyan Tree Holdings, Mandarin Oriental Hotel Group, Kempinski
                  Hotels, Rosewood Hotel Group, Aman Resorts, Six Senses Hotels
                  Resorts Spas, Edition Hotels, 1 Hotels, Kimpton Hotels &
                  Restaurants, Autograph Collection, Tribute Portfolio, Curio
                  Collection, LXR Hotels & Resorts, Tapestry Collection, Design
                  Hotels, MGallery Pullman Hotels and Resorts, Swissôtel Hotels
                  & Resorts, Fairmont Hotels & Resorts, Raffles Hotels &
                  Resorts, Movenpick Hotels & Resorts, Anantara Hotels, Resorts
                  & Spas, COMO Hotels and Resorts, Oberoi Hotels & Resorts, Taj
                  Hotels Palaces Resorts Safaris, Leela Palaces Hotels and
                  Resorts, Jumeirah Group, Rotana Hotels, Emaar Hospitality
                  Group, Millennium & Copthorne Hotels, Langham Hospitality
                  Group, Pan Pacific Hotels Group, Shangri-La Hotels and
                  Resorts, Dusit International, Centara Hotels & Resorts.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    star_rating
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    INTEGER
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-orange-100 text-orange-800 text-xs font-medium">
                    CHECK (0-5)
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Nombre d'étoiles
                </td>
              </tr>

              {/* DESCRIPTIONS */}
              <tr className="bg-muted/30">
                <td
                  colSpan={4}
                  className="p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide border-l-4 border-purple-500"
                >
                  📝 DESCRIPTIONS ET CONTENU
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    short_description
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Description courte
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    hotel_highlights
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Remarkable view, Prime location, Vibrant nightlife, Romantic
                  atmosphere, Quiet and relaxing.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    Hotel_amenity
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Bar, Restaurant, Casino, Spa / massage, Gym, Business center,
                  Boutique, Pool, Water park, Golf, Concierge service, Room
                  service, Currency exchange, Wake-up service, Laundry service,
                  24/7 reception, Self check-in, Bike rental, Scooter rental,
                  Car rental, Shuttle service, Pets allowed, Smoking area.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    breakfast
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  petit dejeuné, petit déjené inclus, Continental breakfast,
                  English breakfast, American breakfast .
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    accessibility_options
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Elevator, Assistance animals allowed, Step-free path,
                  Wheelchair-accessible shower, Wheelchair-accessible parking.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    parking_options
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Secure parking, Covered parking, Free parking, Paid parking,
                  Electric vehicle charging station.
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    accommodation_types
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  dortoir, chambre simple, chambre double, chambre triple,
                  suite, appartement.
                </td>
              </tr>

              {/* MÉDIAS */}
              <tr className="bg-muted/30">
                <td
                  colSpan={4}
                  className="p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide border-l-4 border-pink-500"
                >
                  🖼️ MÉDIAS ET GALERIE
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    main_image_url
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    VARCHAR(500)
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Image principale
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    gallery_images
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    JSONB
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Array d'URLs d'images
                </td>
              </tr>

              {/* LOCALISATION */}
              <tr className="bg-muted/30">
                <td
                  colSpan={4}
                  className="p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide border-l-4 border-red-500"
                >
                  📍 LOCALISATION
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    address_id
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">UUID</span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-indigo-100 text-indigo-800 text-xs font-medium">
                    REFERENCES
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Référence vers table Address
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    neighborhood
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    VARCHAR(100)
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">Quartier</td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    nearby_landmarks
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  <p>
                    Cristo Rey, El Gato del Río, Plaza de Caicedo, San Antonio
                    Chapel, Sebastián de Belalcázar Monument, La Ermita Church,
                    Las Tres Cruces, Parque Artesanal Loma de La Cruz, Calima
                    Gold Museum.
                  </p>
                  <p>
                    El Rey Archaeological Zone, El Meco Archaeological Site, San
                    Miguelito Archaeological Site .
                  </p>
                  Sanctuary of Truth, Nong Nooch Tropical Botanical Garden,
                  Pattaya Walking Street, Soî 6, Big Buddha Temple (Wat Phra
                  Yai), Pattaya Floating Market, Terminal 21 Pattaya, Art in
                  Paradise Pattaya, Mini Siam, Jomtien Beach, Coral Island (Koh
                  Larn), Buddha Mountain (Khao Chi Chan), Ramayana Water Park,
                  Tiger Park Pattaya, Wat Yansangwararam, The Million Years
                  Stone Park, Pattaya Viewpoint (Phra Tamnak Hill), Ripley's
                  Believe It or Not!, Tiffany's Show, Underwater World Pattaya,
                  Sriracha Tiger Zoo, Bali Hai Pier.
                </td>
              </tr>

              {/* ÉVALUATIONS */}
              <tr className="bg-muted/30">
                <td
                  colSpan={4}
                  className="p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide border-l-4 border-yellow-500"
                >
                  ⭐ ÉVALUATIONS ET AVIS
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    overall_rating
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    DECIMAL(3,2)
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-orange-100 text-orange-800 text-xs font-medium">
                    CHECK (0-10)
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Note globale sur 10
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    total_reviews
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    INTEGER
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-medium">
                    DEFAULT 0
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Nombre total d'avis
                </td>
              </tr>

              {/* TARIFICATION */}
              <tr className="bg-muted/30">
                <td
                  colSpan={4}
                  className="p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wide border-l-4 border-emerald-500"
                >
                  💰 TARIFICATION ET PROMOTIONS
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    cancellation_policy{" "}
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  annulation gratuite. annulation sous condition. frais de 100%,
                  Non remboursable
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    regular_price
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">TEXT</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  prix barré
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    base_price_per_night
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    DECIMAL(10,2)
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400">-</span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">
                  Prix de base par nuit
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                    currency
                  </code>
                </td>
                <td className="p-4">
                  <span className="text-green-600 font-mono text-sm">
                    VARCHAR(3)
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-medium">
                    DEFAULT 'EUR'
                  </span>
                </td>
                <td className="p-4 text-muted-foreground text-sm">Devise</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
